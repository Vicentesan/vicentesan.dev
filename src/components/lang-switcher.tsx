'use client'

import { usePathname, useRouter } from 'next/navigation'
import ReactCountryFlag from 'react-country-flag'

import { useLanguage } from '@/context/language'
import type { Language } from '@/types/languages'

import { SUPPORTED_LANGUAGES } from '../../languages'
import { Select, SelectContent, SelectItem, SelectTrigger } from './ui/select'

export function LangSwitcher() {
  const { replace } = useRouter()
  const { language } = useLanguage()

  const pathname = usePathname()

  const handleRedirectLanguageChange = (language: Language) => {
    const paramsArray = pathname.split('/')
    const newParamsArray = paramsArray.map((param, index) =>
      index === 1 ? language : param,
    )

    const newPathname = newParamsArray.join('/')
    replace(newPathname)
  }

  const currentLanguageOption = SUPPORTED_LANGUAGES.find(
    (lang) => lang.value === language,
  )

  return (
    <Select
      onValueChange={(value) => handleRedirectLanguageChange(value as Language)}
    >
      <SelectTrigger className="-mr-1 h-8 w-[150px]">
        <div>
          {currentLanguageOption && (
            <ReactCountryFlag
              countryCode={currentLanguageOption.country}
              svg
              className="mr-2"
            />
          )}

          {currentLanguageOption?.label}
        </div>
      </SelectTrigger>

      <SelectContent>
        {SUPPORTED_LANGUAGES.map(({ value, country, label, enabled }) => (
          <SelectItem
            key={value}
            className={value === language ? 'space-x-2 bg-muted' : 'space-x-2'}
            disabled={!enabled}
            value={value}
          >
            <ReactCountryFlag countryCode={country} svg className="mr-2" />

            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
