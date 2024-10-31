import { LangSwitcher } from '@/components/lang-switcher'
import { ThemeToggle } from '@/components/theme/theme-toggle'
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
  params: { lang: Language }
}

export default async function RootLayout({
  children,
  params: { lang },
}: RootLayoutProps) {
  const dictionary = await getDictionary(lang)

  return (
    <AppWrapper>
      <LanguageContextProvider language={lang} dictionary={dictionary}>
        <main className="w-full">
          <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-end gap-4 bg-transparent p-6">
            <LangSwitcher />

            <span className="h-6 w-px bg-muted" />

            <ThemeToggle />
          </header>
          {children}
        </main>
      </LanguageContextProvider>
    </AppWrapper>
  )
}
