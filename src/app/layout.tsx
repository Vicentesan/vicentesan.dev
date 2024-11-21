import './globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { Pattern } from '@/components/pattern'
import { cn } from '@/lib/utils'
import type { Language } from '@/types/languages'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Vicente Sanchez',
  description: 'Obsessed with building products that help people',
}

interface RootLayoutProps {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const resolvedParams = await params
  const lang = resolvedParams.lang as Language

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={cn(geistSans.variable, geistMono.variable)}
    >
      <head>
        <meta name="theme-color" content="#09090b" />
      </head>
      <body className="m-10 overflow-x-hidden font-mono antialiased lg:overflow-x-hidden">
        <Pattern variant="checkered" />
        {children}
      </body>
    </html>
  )
}
