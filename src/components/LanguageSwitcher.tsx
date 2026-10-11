'use client'

import { locales } from '@/lib/i18n'
import { useLocale } from './LanguageProvider'

export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { locale, setLocale } = useLocale()

  return (
    <div role="group" aria-label={locale === 'tr' ? 'Dil seçimi' : 'Language'} className={`lang-switch ${className}`}>
      {locales.map((option) => (
        <button
          key={option}
          type="button"
          lang={option}
          onClick={() => option !== locale && setLocale(option)}
          aria-pressed={option === locale}
          aria-label={option === 'tr' ? 'Türkçe' : 'English'}
          className="lang-switch-option"
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
