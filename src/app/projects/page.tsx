'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import ProjectCard from '@/components/ProjectCard'
import UpcomingProjectCard from '@/components/UpcomingProjectCard'
import ProjectArtPlaceholder from '@/components/ProjectArtPlaceholder'
import CTA from '@/components/CTA'
import PageHero from '@/components/PageHero'
import { useLocale } from '@/components/LanguageProvider'
import { easeSmooth } from '@/lib/motion'
import type { Localized } from '@/lib/i18n'
import { mahalleninMakasi, games, apps, webPortfolio, upcomingGames, upcomingApps, type UpcomingProject } from '@/lib/portfolio'

type ExistingProject = {
  title: string
  description: Localized
  image?: string
  images?: string[]
  video?: string
  tags: Localized<string[]>
  category: 'web' | 'game' | 'app'
  url?: string
}

type ProjectItem = ExistingProject | UpcomingProject

const projects: ProjectItem[] = [
  ...games,
  ...upcomingGames,
  ...upcomingApps,
  {
    title: 'Crusader Tycoon',
    description: {
      tr: 'Orta Çağ’da kaleni büyütüp ordunu yönettiğin piksel sanat bir strateji ve idle oyunu.',
      en: 'A pixel-art strategy and idle game where you grow your castle and lead your army in the Middle Ages.',
    },
    video: '/images/Crusader Tycoon Trailer.mp4',
    tags: { tr: ['Strateji', 'Pixel Art'], en: ['Strategy', 'Pixel Art'] },
    category: 'game',
  },
  {
    title: 'Ferman',
    description: {
      tr: 'Osmanlı esintili, kartları kaydırarak hükümdarlığını yönettiğin mobil karar oyunu.',
      en: 'An Ottoman-inspired mobile decision game where you rule your realm by swiping cards.',
    },
    video: '/images/Ferman_Teaser.mp4',
    tags: { tr: ['Mobil', 'Kart'], en: ['Mobile', 'Cards'] },
    category: 'game',
  },
  { ...apps[0], image: undefined, images: ['/images/Scanny1.jpg', '/images/Scanny2.jpg', '/images/Scanny3.jpg'] },
  ...webPortfolio,
]

const categories = [
  { id: 'all', name: { tr: 'Tümü', en: 'All' } },
  { id: 'game', name: { tr: 'Oyunlar', en: 'Games' } },
  { id: 'app', name: { tr: 'Uygulamalar', en: 'Apps' } },
  { id: 'web', name: { tr: 'Web', en: 'Web' } },
] as const

const copy = {
  tr: {
    eyebrow: 'Projeler',
    title: ['Yaptığımız', 'işler.'],
    googlePlay: 'Google Play’de yakında',
    intro: 'Yayındaki oyunlarımız, üzerinde çalıştığımız yeni oyun ve uygulamalar, bir de markalar için yaptığımız web siteleri.',
    iconAlt: 'Mahallenin Makası ikonu',
    featuredEyebrow: 'App Store’da yayında · Ücretli oyunlarda Türkiye ilk 50',
    featuredText: 'Tıraş yap, sohbet et, dükkânını büyüt.',
    filters: 'Proje filtresi',
    ctaTitle: 'Aklınızda bir proje mi var?',
    ctaText: 'Oyun, uygulama ya da web sitesi fark etmez. Anlatın, birlikte planlayalım.',
    ctaPrimary: 'Bizimle çalışın',
    ctaSecondary: 'Hizmetler',
  },
  en: {
    eyebrow: 'Projects',
    title: ['Things', 'we’ve made.'],
    googlePlay: 'Coming soon to Google Play',
    intro: 'Our released games, the new games and apps we’re working on, and the websites we’ve built for brands.',
    iconAlt: 'Mahallenin Makası icon',
    featuredEyebrow: 'Out now on the App Store · Top 50 paid games in Turkey',
    featuredText: 'Shave, chat and grow your shop.',
    filters: 'Project filter',
    ctaTitle: 'Got a project in mind?',
    ctaText: 'A game, an app or a website. Tell us about it and we’ll plan it together.',
    ctaPrimary: 'Work with us',
    ctaSecondary: 'Services',
  },
}

export default function ProjectsPage() {
  const { locale, t } = useLocale()
  const c = copy[locale]
  const [active, setActive] = useState<(typeof categories)[number]['id']>('all')
  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <div>
      <PageHero eyebrow={c.eyebrow} title={c.title} intro={c.intro} />

      {/* Featured: Mahallenin Makası */}
      <section className="container-custom section-padding pb-12">
        <Link
          href="/#mahallenin-makasi"
          className="group grid items-center gap-6 overflow-hidden project-entry p-6 sm:grid-cols-[auto_1fr] sm:p-8 lg:grid-cols-[auto_1fr_auto]"
        >
          <div className="relative h-28 w-28 overflow-hidden rounded-[1.5rem] shadow-lg">
            <Image src={mahalleninMakasi.icon} alt={c.iconAlt} fill className="object-cover" sizes="112px" />
          </div>
          <div>
            <p className="m-0 text-sm text-brass">{c.featuredEyebrow}</p>
            <h2 className="mt-1 display-heading text-4xl sm:text-5xl">{mahalleninMakasi.title}</h2>
            <p className="mt-2 max-w-xl text-muted">{t(mahalleninMakasi.tagline)}. {c.featuredText}</p>
            <span className="mt-4 inline-block rounded-full border border-line px-3 py-1 text-xs text-muted">{c.googlePlay}</span>
          </div>
          <div className="hidden gap-3 lg:flex">
            {mahalleninMakasi.screens.slice(0, 2).map((s) => (
              <div key={s.src} className="relative aspect-[473/1024] w-24 overflow-hidden rounded-xl border-2 border-[#1c1915] transition duration-500 group-hover:-translate-y-1">
                <Image src={s.src} alt={t(s.alt)} fill className="object-cover" sizes="96px" />
              </div>
            ))}
          </div>
        </Link>
      </section>

      <section className="container-custom section-padding pb-20">
        <div role="group" aria-label={c.filters} className="mb-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActive(category.id)}
              aria-pressed={active === category.id}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                active === category.id
                  ? 'bg-brass text-background'
                  : 'border border-line text-muted hover:border-brass hover:text-foreground'
              }`}
            >
              {t(category.name)}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, ease: easeSmooth }}
              >
                {'screens' in p ? (
                  <UpcomingProjectCard {...p} />
                ) : p.url && !p.video && !p.images ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full overflow-hidden project-entry transition hover:border-brass/50"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {p.image ? (
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.04]"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ) : (
                        <ProjectArtPlaceholder title={p.title} />
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="m-0 font-heading text-xl font-semibold">{p.title}</h3>
                        <ArrowUpRight className="h-4 w-4 text-brass" />
                      </div>
                      <p className="mt-2 text-sm text-muted">{t(p.description)}</p>
                    </div>
                  </a>
                ) : (
                  <ProjectCard
                    title={p.title}
                    description={t(p.description)}
                    image={p.image}
                    images={p.images}
                    video={p.video}
                    tags={t(p.tags)}
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <CTA
        title={c.ctaTitle}
        description={c.ctaText}
        primaryButton={{ text: c.ctaPrimary, href: '/contact#bizimle-calisin' }}
        secondaryButton={{ text: c.ctaSecondary, href: '/services' }}
      />
    </div>
  )
}
