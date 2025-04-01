import './globals.css'

import { AnimatePresence } from 'motion/react'
import type { Metadata, Viewport } from 'next'

import { Footer } from '@/components/footer'
import { PageTransition } from '@/components/page-transition'
import { AppWrapper } from '@/context/app'

const metadataTitle = 'Vicente Sanchez | Full Stack Developer'
const metadataDescription =
  'Full Stack Developer passionate about minimalism, open-source, and Bitcoin. Building innovative products that help people.'
const metadataImage = '/vicente-san-grayscale.png'
const metadataUrl = 'https://vicentesan.dev'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#09090b',
}

export const metadata = {
  title: {
    default: metadataTitle,
    template: '%s | Vicente Sanchez',
  },
  description: metadataDescription,
  metadataBase: new URL(metadataUrl),
  authors: [
    {
      name: 'Vicente Sanchez',
      url: metadataUrl,
    },
  ],
  creator: 'Vicente Sanchez',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: metadataUrl,
    title: metadataTitle,
    description: metadataDescription,
    siteName: 'Vicente Sanchez',
    images: [
      {
        url: metadataImage,
        width: 400,
        height: 400,
        alt: 'Vicente Sanchez',
      },
    ],
  },
  twitter: {
    title: metadataTitle,
    description: metadataDescription,
    images: [
      {
        url: metadataImage,
        alt: 'Vicente Sanchez',
      },
    ],
    card: 'summary_large_image',
    creator: '@vicentesandev',
    site: '@vicentesandev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: [
    'Vicente Sanchez',
    'Full Stack Developer',
    'Web Development',
    'Bitcoin',
    'Open Source',
    'Minimalism',
    'Software Engineer',
    'Brazil',
  ],
  category: 'technology',
  icons: {
    icon: '/favicon-96x96.png',
    shortcut: '/favicon-96x96.png',
    apple: '/apple-touch-icon.png',
  },
} satisfies Metadata

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <script src="https://assets.onedollarstats.com/stonks.js" />
      </head>
      <body className="bg-background mx-auto my-12 flex max-w-3xl items-center justify-start">
        <AppWrapper>
          <main className="flex min-h-screen w-full flex-col gap-20">
            <AnimatePresence mode="popLayout">
              <PageTransition>{children}</PageTransition>
            </AnimatePresence>
            <Footer />
          </main>
        </AppWrapper>
      </body>
    </html>
  )
}
