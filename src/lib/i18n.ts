export const locales = ['tr', 'en'] as const
export type Locale = (typeof locales)[number]
export type Localized<T = string> = Record<Locale, T>

export const defaultLocale: Locale = 'tr'
export const LOCALE_COOKIE = 'lang'

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value)
}

export const ogLocale: Localized = { tr: 'tr_TR', en: 'en_US' }
