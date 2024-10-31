import '../globals.css'

import { Header } from '@/components/header'
import { AppWrapper } from '@/context/app-provider'
import { LanguageContextProvider } from '@/context/language-provider'
import type { Language } from '@/types/langs'
import { getDictionary } from '@/utils/dictionaries'
import { SUPPORTED_LANGUAGES } from '@/utils/langs'

export async function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({ lang: lang.value }))
}

export const dynamic = 'force-dynamic'

type LangLayoutProps = {
  children: React.ReactNode
  params: Promise<{ lang: Language }>
}

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return (
    <AppWrapper>
      <LanguageContextProvider language={lang} dictionary={dictionary}>
        <div className="relative flex min-h-screen flex-col [&_*]:subpixel-antialiased">
          <Header />
          <main className="flex-grow md:overflow-x-hidden">{children}</main>
        </div>
      </LanguageContextProvider>
    </AppWrapper>
  )
}
