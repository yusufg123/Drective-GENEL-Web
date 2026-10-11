import type { Metadata } from 'next'
import { getLocale } from '@/lib/i18n-server'

const copy = {
  tr: {
    title: 'Hakkımızda — Ekip ve Hikâye',
    description: 'Drective, İstanbul’da kurulan bir oyun ve mobil uygulama stüdyosu. Ekibimizi, hikâyemizi ve çalışma şeklimizi tanıyın.',
    ogTitle: 'Drective Ekibi',
    ogDescription: 'Oyunlarımızı ve uygulamalarımızı yapan ekiple tanışın.',
    ogAlt: 'Drective ekibi',
  },
  en: {
    title: 'About — Team and Story',
    description: 'Drective is a game and mobile app studio founded in Istanbul. Meet our team, our story and how we work.',
    ogTitle: 'The Drective Team',
    ogDescription: 'Meet the team behind our games and mobile apps.',
    ogAlt: 'The Drective team',
  },
}

export function generateMetadata(): Metadata {
  const c = copy[getLocale()]
  return {
    title: c.title,
    description: c.description,
    alternates: { canonical: '/about' },
    openGraph: {
      title: c.ogTitle,
      description: c.ogDescription,
      url: '/about',
      images: [{ url: '/images/team.jpg', alt: c.ogAlt }],
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
