import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';

import { cn } from '@/lib/utils';
import './globals.css';

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'Vicente Sanchez',
  description: 'Exploring the enchantment of AI with a focus on backend innovation.',
  metadataBase: new URL('https://vicentesan.dev'),
  alternates: {
    canonical: '/'
  },
  keywords: ['Backend Developer', 'AI', 'Web2', 'Web3', 'São Paulo', 'Brazil'],
  authors: [
    {
      name: 'Vicente Sanchez',
      url: 'https://vicentesan.dev'
    }
  ],
  openGraph: {
    title: 'Vicente Sanchez',
    description: 'Exploring the enchantment of AI with a focus on backend innovation.',
    url: 'https://vicentesan.dev',
    siteName: 'Vicente Sanchez',
    images: [
      {
        url: 'https://vicentesan.dev/opengraph-image.png',
        width: 400,
        height: 400,
        alt: 'Vicente Sanchez'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vicente Sanchez',
    description: 'Exploring the enchantment of AI with a focus on backend innovation.',
    creator: '@vicentesandev',
    images: ['https://vicentesan.dev/opengraph-image.png']
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
          geistMono.className,
          'flex h-fit items-center justify-center overflow-x-hidden bg-black antialiased'
        )}
      >
        {children}
      </body>
    </html>
  );
}
