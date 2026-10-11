import type { Metadata } from 'next'
import { getLocale } from '@/lib/i18n-server'

const copy = {
  tr: {
    title: 'Hizmetler — Oyun, Mobil Uygulama ve Web Geliştirme',
    description: 'Unity ile oyun geliştirme, iOS ve Android mobil uygulama geliştirme, Next.js ile web sitesi ve UI/UX tasarım hizmetleri.',
    ogTitle: 'Drective Hizmetleri',
    ogDescription: 'Oyun, mobil uygulama ve web geliştirme hizmetleri.',
  },
  en: {
    title: 'Services — Game, Mobile App and Web Development',
    description: 'Game development with Unity, iOS and Android app development, Next.js websites and UI/UX design.',
    ogTitle: 'Drective Services',
    ogDescription: 'Game, mobile app and web development services.',
  },
}

export function generateMetadata(): Metadata {
  const c = copy[getLocale()]
  return {
    title: c.title,
    description: c.description,
    alternates: { canonical: '/services' },
    openGraph: { title: c.ogTitle, description: c.ogDescription, url: '/services' },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
