import './globals.css'

import type { Metadata } from 'next'

import { Footer } from '@/components/footer'
import { AppWrapper } from '@/context/app'

const metadataTitle = 'Vicente Sanchez'
const metadataDescription = 'Obsessed with building products that help people'
const metadataImage = '/vicentesan.jpg'

export const metadata = {
  title: metadataTitle,
  description: metadataDescription,
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    images: [
      {
        url: metadataImage,
      },
    ],
  },
  twitter: {
    title: metadataTitle,
    description: metadataDescription,
    images: [
      {
        url: metadataImage,
      },
    ],
    card: 'summary_large_image',
    creator: '@vicentesandev',
  },
  robots: {
    index: true,
    follow: false,
  },
} satisfies Metadata

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#09090b" />
      </head>
      <body className="bg-background mx-auto my-12 flex max-w-3xl items-center justify-start">
        <AppWrapper>
          <main className="flex min-h-screen w-full flex-col gap-20">
            {children}
            <Footer />
          </main>
        </AppWrapper>
      </body>
    </html>
  )
}
