import ogImage from '@/assets/og.png'
import { ThemeProvider } from '@/components/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import type { Metadata } from 'next'
import { Instrument_Serif as InstrumentSerif } from 'next/font/google'
import './globals.css'

const instrumentSerif = InstrumentSerif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Vicente Sanchez',
  description:
    'Exploring the enchantment of Web3 with a focus on backend innovation.',
  metadataBase: new URL('https://eric.rest'),
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Full Stack Developer',
    'Tesseract',
    'Web2',
    'Web3',
    'São Paulo',
    'Brazil',
  ],
  authors: [
    {
      name: 'Vicente Sanchez',
      url: 'https://vicentesan.dev',
    },
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'Vicente Sanchez',
    description:
      'Exploring the enchantment of Web3 with a focus on backend innovation.',
    creator: '@vicentesandev',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <script src="https://assets.onedollarstats.com/stonks.js" />
        </head>
        <body className={instrumentSerif.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>{children}</TooltipProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
