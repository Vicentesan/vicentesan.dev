import { createId } from '@paralleldrive/cuid2'
import { TRPCError } from '@trpc/server'
import { createHTTPServer } from '@trpc/server/adapters/standalone'
import dayjs from 'dayjs'
import { and, eq, or } from 'drizzle-orm'
import * as jose from 'jose'
import { z } from 'zod'

import { db } from '@/db'
import { authLinks, clients, quotes } from '@/db/schemas'
import { env } from '@/env.mjs'
import { resend } from '@/resend'
import { AuthenticationMagicLinkTemplate } from '@/resend/templates/magic-link'
import { QuoteCreatedTemplate } from '@/resend/templates/quote-created'

import { publicProcedure, router } from './trpc'

const quoteFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email' }),
  phone: z.string().min(1, { message: 'Phone number is required' }),
  projectName: z.string().min(1, { message: 'Project name is required' }),
  website: z.string().optional(),
  type: z.enum(['api', 'web', 'mobile', 'desktop', 'unfinished', 'other']),
  details: z.string().optional(),
  deliveryTime: z.enum(['short', 'normal', 'medium', 'flexible', 'urgent']),
  budget: z.enum(['1k', '2k', '3k', '5k', 'custom']),
})

export const appRouter = router({
  requestMagicLink: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        redirectTo: z.string().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      const userFromEmail = await db.query.clients.findFirst({
        where: eq(clients.email, input.email.toLocaleLowerCase()),
      })

      if (!userFromEmail) return

      const [authLink] = await db
        .insert(authLinks)
        .values({
          code: createId(),
          clientId: userFromEmail.id,
        })
        .returning()

      const authLinkUrl = new URL(
        '/auth-links/authenticate',
        env.NEXT_PUBLIC_API_BASE_URL,
      )

      authLinkUrl.searchParams.set('code', authLink.code)
      authLinkUrl.searchParams.set(
        'redirect',
        input.redirectTo || env.NEXT_PUBLIC_BASE_URL,
      )

      const { error, data } = await resend.emails.send({
        from: 'Vicente Sanchez <hello@vicentesan.dev>',
        to: input.email.toLocaleLowerCase(),
        subject: 'Login link',
        react: AuthenticationMagicLinkTemplate({
          authLink: authLinkUrl.toString(),
          userEmail: input.email.toLocaleLowerCase(),
          userName: userFromEmail.name,
        }),
      })

      console.log('data', data)
      console.log('error', error)

      if (error) {
        throw new Error(error.message)
      }

      return {
        success: true,
      }
    }),
  authenticateFromMagicLink: publicProcedure
    .input(z.object({ code: z.string() }))
    .mutation(async ({ input }) => {
      const authLinkFromCode = await db.query.authLinks.findFirst({
        where: eq(authLinks.code, input.code),
      })

      if (!authLinkFromCode) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Invalid code',
        })
      }

      const daysSinceAuthLinkWasCreated = dayjs().diff(
        authLinkFromCode.createdAt,
        'days',
      )

      if (daysSinceAuthLinkWasCreated > 7) {
        return {
          success: false,
          message: 'AuthLink has expired, please generate a new one.',
        }
      }

      const jwt = await new jose.SignJWT({ sub: authLinkFromCode.clientId })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(new TextEncoder().encode(env.JWT_SECRET))

      await db.delete(authLinks).where(eq(authLinks.id, authLinkFromCode.id))

      return { success: true, token: jwt }
    }),
  getQuotes: publicProcedure
    .input(z.object({ clientId: z.string() }))
    .query(async ({ input }) => {
      const quotesFromClient = await db.query.quotes.findMany({
        where: eq(quotes.clientId, input.clientId),
      })

      return { success: true, quotes: quotesFromClient }
    }),
  getQuoteById: publicProcedure
    .input(z.object({ id: z.string(), clientId: z.string() }))
    .query(async ({ input }) => {
      const quote = await db.query.quotes.findFirst({
        where: and(
          eq(quotes.id, input.id),
          eq(quotes.clientId, input.clientId),
        ),
      })

      if (!quote) {
        return {
          success: false,
          message: 'Quote not found',
        }
      }

      return { success: true, quote }
    }),
  getClientInfoByEmail: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .query(async ({ input }) => {
      const client = await db.query.clients.findFirst({
        where: eq(clients.email, input.email.toLocaleLowerCase()),
      })

      return { client }
    }),
  createQuote: publicProcedure
    .input(quoteFormSchema)
    .mutation(async ({ input }) => {
      let user = await db.query.clients.findFirst({
        where: or(
          eq(clients.email, input.email.toLocaleLowerCase()),
          eq(clients.phone, input.phone),
        ),
      })

      if (!user) {
        ;[user] = await db
          .insert(clients)
          .values({
            name: input.name,
            email: input.email.toLocaleLowerCase(),
            phone: input.phone,
          })
          .returning()
      }

      const [quote] = await db
        .insert(quotes)
        .values({
          ...input,
          details: input.details || null,
          clientId: user.id,
        })
        .returning()

      await resend.emails.send({
        from: 'Vicente Sanchez <hello@vicentesan.dev>',
        to: input.email.toLocaleLowerCase(),
        subject: 'Your quote was created',
        react: QuoteCreatedTemplate({
          userName: user.name,
          quoteId: quote.id,
        }),
      })

      return {
        quoteId: quote.id,
      }
    }),
  getSession: publicProcedure
    .input(z.object({ token: z.string().optional() }))
    .query(async ({ input }) => {
      try {
        const token = input.token

        if (!token) {
          console.log('No token provided')
          return { user: null }
        }

        try {
          const { payload } = await jose.jwtVerify(
            token,
            new TextEncoder().encode(env.JWT_SECRET),
          )

          if (!payload.sub) {
            console.log('No sub in payload')
            return { user: null }
          }

          const user = await db.query.clients.findFirst({
            where: eq(clients.id, payload.sub),
            columns: {
              id: true,
              name: true,
              email: true,
            },
          })

          if (!user) {
            console.log('No user found')
            return { user: null }
          }

          return { user }
        } catch (error) {
          console.error('Token verification failed:', error)
          return { user: null }
        }
      } catch (error) {
        console.error('Session error:', error)
        return { user: null }
      }
    }),
  markQuoteAsUrgent: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      await db
        .update(quotes)
        .set({ deliveryTime: 'urgent' })
        .where(eq(quotes.id, input.id))
    }),
})

export const server = createHTTPServer({
  router: appRouter,
})

export type AppRouter = typeof appRouter
