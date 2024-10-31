'use client'

import { usePathname, useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import NextTopLoader from 'nextjs-toploader'
import * as NProgress from 'nprogress'
import { ReactNode, useEffect } from 'react'

type AppWrapperProps = {
  children: ReactNode
}

export const AppWrapper = ({ children }: AppWrapperProps) => {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    NProgress.done()
  }, [pathname, router])

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      <NextTopLoader color="#ccc" showSpinner={false} />
      {children}
    </NextThemesProvider>
  )
}
