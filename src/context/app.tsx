'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import { usePathname, useRouter } from 'next/navigation'
import NextTopLoader from 'nextjs-toploader'
import * as NProgress from 'nprogress'
import { ReactNode, useEffect, useState } from 'react'

import { ThemeProvider } from '@/components/theme/theme-provider'
import { env } from '@/env.mjs'
import { trpc } from '@/lib/trpc'

type AppWrapperProps = {
  children: ReactNode
}

export const AppWrapper = ({ children }: AppWrapperProps) => {
  const pathname = usePathname()
  const router = useRouter()

  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${env.NEXT_PUBLIC_API_BASE_URL}/trpc`,
        }),
      ],
    }),
  )

  useEffect(() => {
    NProgress.done()
  }, [pathname, router])

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          storageKey="@vicentesan-theme:0.0.0"
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <NextTopLoader color="#ccc" showSpinner={false} />
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </trpc.Provider>
  )
}
