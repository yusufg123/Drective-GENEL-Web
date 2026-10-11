import { cookies, headers } from 'next/headers'
import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from './i18n'

export function getLocale(): Locale {
  const saved = cookies().get(LOCALE_COOKIE)?.value
  if (isLocale(saved)) return saved

  const acceptLanguage = headers().get('accept-language')
  if (!acceptLanguage) return defaultLocale
  return acceptLanguage.toLowerCase().startsWith('tr') ? 'tr' : 'en'
}
