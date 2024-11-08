'use client'

import { setCookie } from 'cookies-next'
import { Loader2 } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { useLanguage } from '@/context/language'
import { trpc } from '@/lib/trpc'

export default function AuthenticatePage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const code = searchParams.get('code')
  const redirect = searchParams.get('redirect')

  const { language } = useLanguage()

  const { mutateAsync, isSuccess } = trpc.authenticateFromMagicLink.useMutation(
    {
      onSuccess: (data) => {
        if ('token' in data && data.token) {
          // Remove httpOnly to allow client-side access
          setCookie('auth_token', data.token, {
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24 * 7, // 7 days
          })
        }
      },
    },
  )

  useEffect(() => {
    const authenticate = async () => {
      if (!code) return
      await mutateAsync({ code })
    }

    authenticate()
  }, [code, mutateAsync])

  useEffect(() => {
    if (isSuccess) {
      router.push(redirect ?? `/${language}/quotes`)
    }
  }, [isSuccess, redirect, router, language])

  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <div className="space-y-4 text-center">
        <Loader2 className="mx-auto size-8 animate-spin" />
        <h2 className="text-2xl font-semibold">Authenticating...</h2>
        <p className="text-muted-foreground">Please wait a moment</p>
      </div>
    </div>
  )
}
