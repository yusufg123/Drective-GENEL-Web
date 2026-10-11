import type { Localized } from './i18n'

export type StoreProduct = {
  slug: string
  name: string
  kind: 'game' | 'app'
  platforms: Localized
  status: 'live' | 'soon'
  /** Product-specific policy that adds detail on top of the general app privacy policy. */
  policyHref?: string
  storeUrl?: string
}

export const storeProducts: StoreProduct[] = [
  {
    slug: 'mahallenin-makasi',
    name: 'Mahallenin Makası',
    kind: 'game',
    platforms: { tr: 'iOS', en: 'iOS' },
    status: 'live',
    storeUrl: 'https://apps.apple.com/tr/app/mahallenin-makas%C4%B1/id6818242226?l=tr',
  },
  {
    slug: 'connections',
    name: 'Connections',
    kind: 'game',
    platforms: { tr: 'Steam (PC)', en: 'Steam (PC)' },
    status: 'live',
    storeUrl: 'https://store.steampowered.com/app/4824950/Connections/',
  },
  {
    slug: 'cubelune',
    name: 'CubeLune',
    kind: 'game',
    platforms: { tr: 'iOS', en: 'iOS' },
    status: 'soon',
    policyHref: '/cubelune/privacy',
  },
  {
    slug: 'wizardus',
    name: 'Wizardus',
    kind: 'game',
    platforms: { tr: 'Mobil', en: 'Mobile' },
    status: 'soon',
  },
  {
    slug: 'us',
    name: 'US',
    kind: 'app',
    platforms: { tr: 'Mobil', en: 'Mobile' },
    status: 'soon',
  },
  {
    slug: 'ralli',
    name: 'RALLI',
    kind: 'app',
    platforms: { tr: 'Mobil', en: 'Mobile' },
    status: 'soon',
  },
  {
    slug: 'nool',
    name: 'Nool',
    kind: 'app',
    platforms: { tr: 'Mobil', en: 'Mobile' },
    status: 'soon',
    policyHref: '/nool/privacy',
  },
  {
    slug: 'scanny',
    name: 'Scanny',
    kind: 'app',
    platforms: { tr: 'iOS', en: 'iOS' },
    status: 'soon',
  },
]

export function getStoreProduct(slug: string) {
  return storeProducts.find((product) => product.slug === slug)
}
