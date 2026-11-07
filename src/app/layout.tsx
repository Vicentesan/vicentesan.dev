import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { cn } from '@/lib/utils';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Vicente Sanchez',
  description: 'Building backend systems, fintech infrastructure, and weird ideas on the web.',
  metadataBase: new URL('https://vicente.fyi'),
  alternates: {
    canonical: '/'
  },
  keywords: ['Backend Developer', 'AI', 'Web3', 'São Paulo', 'Brazil'],
  authors: [
    {
      name: 'Vicente Sanchez',
      url: 'https://vicente.fyi'
    }
  ],
  openGraph: {
    title: 'Vicente Sanchez',
    description: 'Building backend systems, fintech infrastructure, and weird ideas on the web.',
    url: 'https://vicente.fyi',
    siteName: 'Vicente Sanchez',
    images: [
      {
        url: 'https://vicente.fyi/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Vicente Sanchez'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vicente Sanchez',
    description: 'Building backend systems, fintech infrastructure, and weird ideas on the web.',
    creator: '@vicentesandev',
    images: ['https://vicente.fyi/opengraph-image.png']
  },
  robots: 'index, follow'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://assets.onedollarstats.com/stonks.js" />
      </head>
      <body
        className={cn(
          inter.variable,
          'flex h-fit items-center justify-center overflow-x-hidden bg-white antialiased font-sans lowercase'
        )}
      >
        {children}
      </body>
    </html>
  );
}
