'use client'

import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'
import { flushSync } from 'react-dom'
import { useRouter } from 'next/navigation'
import { LOCALE_COOKIE, type Locale, type Localized } from '@/lib/i18n'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: <T>(value: Localized<T>) => T
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ initialLocale, children }: { initialLocale: Locale; children: ReactNode }) {
  const router = useRouter()
  const [locale, setLocaleState] = useState<Locale>(initialLocale)

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === locale) return
      document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`
      const apply = () => {
        flushSync(() => setLocaleState(next))
        document.documentElement.lang = next
      }
      const doc = document as Document & { startViewTransition?: (callback: () => void) => unknown }
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (doc.startViewTransition && !reduceMotion) doc.startViewTransition(apply)
      else apply()
      router.refresh()
    },
    [locale, router]
  )

  const t = useCallback(<T,>(value: Localized<T>) => value[locale], [locale])

  return <LanguageContext.Provider value={{ locale, setLocale, t }}>{children}</LanguageContext.Provider>
}

export function useLocale() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLocale must be used inside LanguageProvider')
  return context
}
