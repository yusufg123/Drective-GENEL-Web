import type { Metadata } from 'next'
import AppPrivacyPolicy from '@/components/AppPrivacyPolicy'
import { appPrivacy } from '@/lib/app-privacy'
import { getLocale } from '@/lib/i18n-server'

export function generateMetadata(): Metadata {
  const c = appPrivacy[getLocale()]
  const title = `${c.title} — ${c.eyebrow}`
  return {
    title,
    description: c.intro,
    alternates: {
      canonical: '/apps/privacy',
      languages: { tr: '/apps/privacy?lang=tr', en: '/apps/privacy?lang=en' },
    },
    openGraph: { title, description: c.intro, url: '/apps/privacy' },
  }
}

export default function AppsPrivacyPage() {
  return <AppPrivacyPolicy locale={getLocale()} />
}
