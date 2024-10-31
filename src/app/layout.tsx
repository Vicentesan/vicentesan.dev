import './globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { Pattern } from '@/components/pattern'
import { cn } from '@/lib/utils'
import type { Language } from '@/types/langs'

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

type RootLayoutProps = {
  children: React.ReactNode
  params: Promise<{ lang: Language }>
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { lang } = await params

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          'dark m-10 overflow-hidden font-mono antialiased',
        )}
      >
        <Pattern variant="checkered" />

        {children}
      </body>
    </html>
  )
}
