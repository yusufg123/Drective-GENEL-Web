import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import AppPrivacyPolicy from '@/components/AppPrivacyPolicy'
import { appPrivacy } from '@/lib/app-privacy'
import { getStoreProduct, storeProducts } from '@/lib/apps'
import { getLocale } from '@/lib/i18n-server'

type Props = { params: { app: string } }

export const dynamicParams = false

export function generateStaticParams() {
  return storeProducts.map((product) => ({ app: product.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getStoreProduct(params.app)
  if (!product) return {}
  const c = appPrivacy[getLocale()]
  const path = `/apps/privacy/${product.slug}`
  return {
    title: c.appTitle(product.name),
    description: c.appIntro(product.name),
    alternates: {
      canonical: path,
      languages: { tr: `${path}?lang=tr`, en: `${path}?lang=en` },
    },
    openGraph: { title: c.appTitle(product.name), description: c.appIntro(product.name), url: path },
  }
}

export default function AppPrivacyPage({ params }: Props) {
  const product = getStoreProduct(params.app)
  if (!product) notFound()
  return <AppPrivacyPolicy locale={getLocale()} product={product} />
}
