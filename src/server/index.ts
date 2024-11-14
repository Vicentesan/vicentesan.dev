import { createHTTPServer } from '@trpc/server/adapters/standalone'
import { and, eq, or } from 'drizzle-orm'
import { z } from 'zod'

import { db } from '@/db'
import { clients, quotes } from '@/db/schemas'
import { resend } from '@/resend'
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
  getQuotes: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .query(async ({ input }) => {
      const client = await db.query.clients.findFirst({
        where: eq(clients.email, input.email.toLocaleLowerCase()),
      })

      if (!client) {
        return { success: false, message: 'Client not found' }
      }

      const quotesFromClient = await db.query.quotes.findMany({
        where: eq(quotes.clientId, client.id),
      })

      return { success: true, quotes: quotesFromClient }
    }),
  getQuoteById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const quote = await db.query.quotes.findFirst({
        where: and(eq(quotes.id, input.id)),
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
