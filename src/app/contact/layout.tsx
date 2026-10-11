import type { Metadata } from 'next'
import { getLocale } from '@/lib/i18n-server'

const copy = {
  tr: {
    title: 'İletişim — Bizimle Çalışın',
    description: 'Oyun, mobil uygulama veya web sitesi projeniz için Drective ile iletişime geçin. İstanbul, Küçükçekmece.',
    ogTitle: 'Drective ile çalışın',
    ogDescription: 'Projenizi anlatın, birkaç gün içinde size yazalım.',
  },
  en: {
    title: 'Contact — Work With Us',
    description: 'Get in touch with Drective about your game, mobile app or website project. Küçükçekmece, Istanbul.',
    ogTitle: 'Work with Drective',
    ogDescription: 'Tell us about your project and we’ll get back to you within a few days.',
  },
}

export function generateMetadata(): Metadata {
  const c = copy[getLocale()]
  return {
    title: c.title,
    description: c.description,
    alternates: { canonical: '/contact' },
    openGraph: { title: c.ogTitle, description: c.ogDescription, url: '/contact' },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
