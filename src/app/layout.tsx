import './globals.css'

import type { Metadata } from 'next'

import type { Language } from '@/types/languages'

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
  params: Promise<{ lang: string }>
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const resolvedParams = await params
  const lang = resolvedParams.lang as Language

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#09090b" />
      </head>
      <body className="mx-auto my-12 flex max-w-3xl items-center justify-start bg-background">
        {children}
      </body>
    </html>
  )
}
