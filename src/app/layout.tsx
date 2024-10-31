import './globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { Pattern } from '@/components/pattern'

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`dark font-mono ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Pattern variant="checkered" />
        {children}
      </body>
    </html>
  )
}
