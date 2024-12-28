import type { Metadata } from 'next'

import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/sonner'
import { AppWrapper } from '@/context/app'
import { LanguageContextProvider } from '@/context/language'
import type { Language } from '@/types/languages'
import { getDictionary } from '@/utils/dictionaries'

import { SUPPORTED_LANGUAGES } from '../../../languages'

export async function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({ lang: lang.value }))
}

export const dynamic = 'force-dynamic'

type RootLayoutProps = {
  children: React.ReactNode
  params: Promise<{ lang: Language }>
}

export const metadata: Metadata = {
  title: {
    template: 'Vicente Sanchez',
    default: 'Vicente Sanchez',
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
    ],
    shortcut: '/favicon.ico',
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
  appleWebApp: {
    title: 'Vicente Sanchez',
    statusBarStyle: 'default',
  },
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { lang } = await params

  const dictionary = await getDictionary(lang)

  return (
    <AppWrapper>
      <LanguageContextProvider language={lang} dictionary={dictionary}>
        <main className="flex min-h-screen w-full flex-col gap-16">
          <Toaster richColors position="top-right" closeButton />
          {children}
          <Footer />
        </main>
      </LanguageContextProvider>
    </AppWrapper>
  )
}
