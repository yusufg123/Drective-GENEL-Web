'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import Hero from '@/components/Hero'
import RevealText from '@/components/RevealText'
import ScrollWords from '@/components/ScrollWords'
import UpcomingShowcase from '@/components/UpcomingShowcase'
import ProjectArtPlaceholder from '@/components/ProjectArtPlaceholder'
import WorkWithUsForm from '@/components/WorkWithUsForm'
import { useLocale } from '@/components/LanguageProvider'
import { mahalleninMakasi, games, webPortfolio } from '@/lib/portfolio'
import { team } from '@/lib/team'
import { site } from '@/lib/site'
import { easeSmooth } from '@/lib/motion'

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.75, ease: easeSmooth },
}

const copy = {
  tr: {
    iconAlt: 'Mahallenin Makası ikonu',
    live: 'App Store’da yayında',
    chart: 'Ücretli oyunlarda Türkiye ilk 50',
    play: 'App Store’da oyna',
    googlePlay: 'Google Play’de yakında',
    newsLink: 'İlk 50 haberi',
    genres: ['Simülasyon', 'İşletme', 'Casual'],
    manifestoEyebrow: 'Stüdyo',
    manifesto:
      'Bazı fikirler yalnızca fikir olarak kalmamalı. Biz onları oyunlara, uygulamalara ve insanların gerçekten deneyimleyebileceği dijital dünyalara dönüştürüyoruz. Merak ediyor, deniyor, geliştiriyor ve her projede daha iyisini arıyoruz. Çünkü iyi fikirlerin hayata geçmeyi hak ettiğine inanıyoruz.',
    releasedTitle: 'Yayındaki işler',
    releasedText: 'Mahallenin Makası’nın yanında Steam’de de bir oyunumuz var.',
    kind: { game: 'Oyun', app: 'Uygulama' },
    webTitle: 'Web projeleri',
    webText: 'Oyunların yanında markalar için web siteleri de yapıyoruz.',
    webAlt: 'web sitesi',
    teamTitle: 'Ekip',
    teamText: 'Tasarımcı, yazılımcı ve sanatçılardan oluşan küçük bir ekibiz. Ofisimiz Zaim Teknopark’ta.',
    teamAlt: 'Drective ekibi',
    story: 'Hikâyemiz',
    contactTitle: 'Aklınızda bir fikir mi var?',
    contactText: 'Oyun, mobil uygulama ya da web sitesi fark etmez. Kısaca anlatın, birkaç gün içinde size yazalım.',
  },
  en: {
    iconAlt: 'Mahallenin Makası icon',
    live: 'Out now on the App Store',
    chart: 'Top 50 paid games in Turkey',
    play: 'Play on the App Store',
    googlePlay: 'Coming soon to Google Play',
    newsLink: 'Read the Top 50 news',
    genres: ['Simulation', 'Tycoon', 'Casual'],
    manifestoEyebrow: 'Studio',
    manifesto:
      'Some ideas shouldn’t stay ideas. We turn them into games, apps and digital worlds people can actually experience. We stay curious, experiment, keep improving and look for something better in every project. Because we believe good ideas deserve to come to life.',
    releasedTitle: 'Released work',
    releasedText: 'Alongside Mahallenin Makası, we also have a game out on Steam.',
    kind: { game: 'Game', app: 'App' },
    webTitle: 'Web projects',
    webText: 'Besides games, we also build websites for brands.',
    webAlt: 'website',
    teamTitle: 'Team',
    teamText: 'A small team of designers, developers and artists. Our office is at Zaim Teknopark.',
    teamAlt: 'The Drective team',
    story: 'Our story',
    contactTitle: 'Got an idea?',
    contactText: 'A game, an app or a website, it doesn’t matter. Tell us a little about it and we’ll get back to you within a few days.',
  },
}

function SectionHead({ index, title, text }: { index: string; title: string; text?: string }) {
  return (
    <div className="mb-12 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
      <div>
        <motion.span {...reveal} className="block font-heading text-sm text-brass">{index}</motion.span>
        <RevealText lines={[title]} className="display-heading mt-2 text-5xl sm:text-7xl" />
      </div>
      {text && <motion.p {...reveal} className="max-w-sm text-muted md:text-right">{text}</motion.p>}
    </div>
  )
}

export default function HomePage() {
  const { locale, t } = useLocale()
  const c = copy[locale]

  const gameJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: mahalleninMakasi.title,
    description: t(mahalleninMakasi.description),
    image: `${site.url}${mahalleninMakasi.icon}`,
    genre: c.genres,
    gamePlatform: mahalleninMakasi.platforms,
    inLanguage: 'tr',
    url: mahalleninMakasi.appStoreUrl,
    author: { '@type': 'Organization', name: site.name, url: site.url },
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameJsonLd) }}
      />

      <Hero />

      <section id="manifesto" className="scroll-mt-20 py-24 lg:py-40">
        <div className="container-custom section-padding">
          <motion.p {...reveal} className="eyebrow mb-8">{c.manifestoEyebrow}</motion.p>
          <ScrollWords
            text={c.manifesto}
            className="display-heading m-0 max-w-5xl text-[2.1rem] !leading-[1.12] text-foreground sm:text-5xl lg:text-[4.25rem]"
          />
        </div>
      </section>

      {/* Mahallenin Makası */}
      <section id="mahallenin-makasi" className="scroll-mt-20 border-t border-line bg-surface py-20 lg:py-28">
        <div className="container-custom section-padding">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div {...reveal}>
              <div className="mb-6 flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-[1.25rem] shadow-lg">
                  <Image src={mahalleninMakasi.icon} alt={c.iconAlt} fill className="object-cover" sizes="80px" />
                </div>
                <div>
                  <p className="m-0 text-sm text-brass">{c.live}</p>
                  <p className="m-0 text-sm text-muted">{c.chart}</p>
                </div>
              </div>
              <h2 className="display-heading text-5xl sm:text-7xl">{mahalleninMakasi.title}</h2>
              <p className="mt-3 text-lg text-foreground/80">{t(mahalleninMakasi.tagline)}</p>
              <p className="mt-5 text-muted">{t(mahalleninMakasi.description)}</p>

              <ul className="mt-8 space-y-5">
                {mahalleninMakasi.features.map((f, i) => (
                  <li key={f.title.tr} className="grid grid-cols-[2rem_1fr] gap-2">
                    <span className="font-heading text-sm text-brass">0{i + 1}</span>
                    <div>
                      <p className="m-0 font-semibold text-foreground">{t(f.title)}</p>
                      <p className="m-0 mt-1 text-sm text-muted">{t(f.text)}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a href={mahalleninMakasi.appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  {c.play} <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
                <span className="rounded-full border border-line px-3 py-1.5 text-xs text-muted">{c.googlePlay}</span>
                <Link href="/about#haberler" className="text-link">
                  {c.newsLink} <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <div className="relative">
              <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:thin] lg:grid lg:grid-cols-3 lg:overflow-visible">
                {mahalleninMakasi.screens.slice(0, 3).map((s, i) => (
                  <motion.figure
                    key={s.src}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: easeSmooth }}
                    className="relative m-0 aspect-[473/1024] w-[46%] shrink-0 snap-center overflow-hidden rounded-lg border border-line sm:w-[30%] lg:w-auto"
                  >
                    <Image src={s.src} alt={t(s.alt)} fill className="object-cover" sizes="(max-width: 1024px) 45vw, 200px" />
                  </motion.figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <UpcomingShowcase />

      {/* Released */}
      <section id="oyunlar" className="scroll-mt-20 border-t border-line py-20 lg:py-28">
        <div className="container-custom section-padding">
          <SectionHead index="01" title={c.releasedTitle} text={c.releasedText} />
          <div className="divide-y divide-line border-y border-line">
            {games.map((item, i) => {
              const Wrapper = item.url ? motion.a : motion.div
              return (
                <Wrapper
                  key={item.title}
                  {...(item.url ? { href: item.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: easeSmooth }}
                  className="group grid grid-cols-[88px_minmax(0,1fr)] items-center gap-5 py-6 sm:grid-cols-[140px_minmax(0,1fr)_auto] sm:gap-8"
                >
                  <div className="relative aspect-square overflow-hidden rounded-sm bg-surface">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.05]"
                        sizes="140px"
                      />
                    ) : (
                      <ProjectArtPlaceholder title={item.title} compact />
                    )}
                  </div>
                  <div>
                    <p className="m-0 text-xs uppercase tracking-[0.14em] text-brass/80">
                      {c.kind[item.category === 'game' ? 'game' : 'app']} · {t(item.tags).join(' · ')}
                    </p>
                    <h3 className="m-0 mt-2 display-heading text-3xl transition group-hover:text-brass sm:text-4xl">{item.title}</h3>
                    <p className="m-0 mt-2 max-w-2xl text-sm text-muted">{t(item.description)}</p>
                  </div>
                  {item.url && (
                    <ArrowUpRight aria-hidden="true" className="hidden h-5 w-5 text-brass transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block" />
                  )}
                </Wrapper>
              )
            })}
          </div>
        </div>
      </section>

      {/* Web */}
      <section id="web" className="border-t border-line py-20 lg:py-28">
        <div className="container-custom section-padding">
          <SectionHead index="02" title={c.webTitle} text={c.webText} />
          <div className="divide-y divide-line border-y border-line">
            {webPortfolio.map((w, i) => (
              <motion.a
                key={w.title}
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: easeSmooth }}
                className="group grid items-center gap-4 py-5 sm:grid-cols-[180px_1fr_auto] sm:gap-8"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-line">
                  <Image
                    src={w.image}
                    alt={`${w.title} ${c.webAlt}`}
                    fill
                    className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.05]"
                    sizes="180px"
                  />
                </div>
                <div>
                  <h3 className="m-0 font-heading text-2xl font-medium transition group-hover:text-brass">{w.title}</h3>
                  <p className="mt-1 text-sm text-muted">{t(w.description)}</p>
                </div>
                <span className="hidden items-center gap-1 text-sm text-muted transition group-hover:text-foreground sm:inline-flex">
                  {w.url?.replace(/^https?:\/\//, '')}
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="ekip" className="border-t border-line py-20 lg:py-28">
        <div className="container-custom section-padding">
          <SectionHead index="03" title={c.teamTitle} text={c.teamText} />
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easeSmooth }}
            className="relative aspect-[4/3] overflow-hidden rounded-sm sm:aspect-[16/9]"
          >
            <Image src="/images/team.jpg" alt={c.teamAlt} fill className="object-cover object-[50%_60%]" sizes="100vw" />
          </motion.div>

          <div className="mt-8 grid grid-cols-1 gap-5 min-[400px]:grid-cols-2 sm:grid-cols-4">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: easeSmooth }}
                className="flex items-center gap-3"
              >
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-line">
                  <Image src={m.image} alt={m.name} fill className="object-cover" sizes="48px" />
                </div>
                <div className="min-w-0">
                  <p className="m-0 truncate text-sm font-semibold text-foreground">{m.name}</p>
                  <p className="m-0 truncate text-xs text-muted">{t(m.role)}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Link href="/about" className="mt-8 inline-flex items-center gap-1 text-sm text-brass hover:underline">
            {c.story} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section id="bizimle-calisin" className="scroll-mt-20 border-t border-line py-20 lg:py-28">
        <div className="container-custom section-padding grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div {...reveal}>
            <span className="font-heading text-sm text-brass">04</span>
            <h2 className="display-heading mt-2 text-5xl sm:text-7xl">{c.contactTitle}</h2>
            <p className="mt-4 text-muted">{c.contactText}</p>
            <a href={`mailto:${site.email}`} className="mt-6 inline-block text-brass hover:underline">
              {site.email}
            </a>
          </motion.div>
          <motion.div {...reveal} className="border-t border-line pt-6 sm:pt-8">
            <WorkWithUsForm compact />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
