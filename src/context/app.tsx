'use client'

import { usePathname, useRouter } from 'next/navigation'
import NextTopLoader from 'nextjs-toploader'
import * as NProgress from 'nprogress'
import { ReactNode, useEffect } from 'react'

import { ThemeProvider } from '@/components/theme/theme-provider'

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
    <ThemeProvider
      storageKey="@vicentesan-theme:0.0.0"
      attribute="class"
      defaultTheme="dark"
      enableSystem
    >
      <NextTopLoader color="#ccc" showSpinner={false} />
      {children}
    </ThemeProvider>
  )
}
