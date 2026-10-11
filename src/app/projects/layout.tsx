import type { Metadata } from 'next'
import { getLocale } from '@/lib/i18n-server'

const copy = {
  tr: {
    title: 'Projeler — Oyunlar, Uygulamalar ve Web Siteleri',
    description:
      'Drective portföyü: Mahallenin Makası, Connections, CubeLune ve Wizardus oyunları; Scanny, US ve RALLI uygulamaları; CetLine, Miela, Caras Rent a Car, CetLis ve Cetrose web siteleri.',
    ogTitle: 'Drective Projeleri',
    ogDescription: 'Oyunlarımız, mobil uygulamalarımız ve markalar için yaptığımız web siteleri.',
  },
  en: {
    title: 'Projects — Games, Apps and Websites',
    description:
      'The Drective portfolio: the games Mahallenin Makası, Connections, CubeLune and Wizardus; the apps Scanny, US and RALLI; and websites for CetLine, Miela, Caras Rent a Car, CetLis and Cetrose.',
    ogTitle: 'Drective Projects',
    ogDescription: 'Games, mobile apps and the websites we build for brands.',
  },
}

export function generateMetadata(): Metadata {
  const c = copy[getLocale()]
  return {
    title: c.title,
    description: c.description,
    alternates: { canonical: '/projects' },
    openGraph: { title: c.ogTitle, description: c.ogDescription, url: '/projects' },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
