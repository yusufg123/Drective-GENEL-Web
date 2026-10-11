'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import RevealText from './RevealText'
import { mahalleninMakasi, upcomingApps, upcomingGames } from '@/lib/portfolio'
import { easeSmooth } from '@/lib/motion'
import type { Localized } from '@/lib/i18n'
import { useLocale } from './LanguageProvider'

const copy = {
  tr: {
    eyebrow: 'Drective / İstanbul',
    title: ['Fikirleri gerçeğe,', 'hayalleri ekrana', 'taşıyoruz.'],
    note: 'Bağımsız bir yaratıcı teknoloji stüdyosuyuz. Oyunlar geliştiriyor, dijital ürünler tasarlıyor ve fikirleri insanların severek kullandığı deneyimlere dönüştürüyoruz.',
    work: 'İşlerimize göz at',
    featuredEyebrow: 'Stüdyodan / Mobil oyun',
    featuredText: 'App Store’da yayında · Ücretli oyunlarda Türkiye ilk 50',
    featuredCta: 'Oyunu keşfet',
    footnote: 'Oyunlar / Uygulamalar / Web',
    more: 'Kaydır',
  },
  en: {
    eyebrow: 'Drective / Istanbul',
    title: ['Ideas made real,', 'dreams brought', 'to the screen.'],
    note: 'We’re an independent creative technology studio. We develop games, design digital products and turn ideas into experiences people love to use.',
    work: 'See our work',
    featuredEyebrow: 'From the studio / Mobile game',
    featuredText: 'Out now on the App Store · Top 50 paid games in Turkey',
    featuredCta: 'Discover the game',
    footnote: 'Games / Apps / Web',
    more: 'Scroll',
  },
}

const [cubelune, wizardus] = upcomingGames
const [us, ralli] = upcomingApps

type FloatingCard = {
  src: string
  alt: Localized
  /** Horizontal centre of the card, as a percentage of the stage width. */
  left: number
  top: string
  rotate: number
  depth: number
  className: string
}

const cards: FloatingCard[] = [
  { src: us.screens[0].src, alt: us.screens[0].alt, left: 9, top: '24%', rotate: -9, depth: 0.5, className: 'hidden sm:block w-[15%] z-0' },
  { src: cubelune.screens[0].src, alt: cubelune.screens[0].alt, left: 18, top: '12%', rotate: -6, depth: 0.9, className: 'w-[30%] sm:hidden z-10' },
  { src: cubelune.screens[0].src, alt: cubelune.screens[0].alt, left: 28, top: '8%', rotate: -5, depth: 0.9, className: 'hidden sm:block w-[18%] z-10' },
  { src: mahalleninMakasi.screens[0].src, alt: mahalleninMakasi.screens[0].alt, left: 50, top: '0%', rotate: 0, depth: 1.4, className: 'w-[38%] sm:w-[22%] z-20' },
  { src: wizardus.screens[0].src, alt: wizardus.screens[0].alt, left: 72, top: '10%', rotate: 5, depth: 0.9, className: 'hidden sm:block w-[18%] z-10' },
  { src: wizardus.screens[0].src, alt: wizardus.screens[0].alt, left: 82, top: '14%', rotate: 6, depth: 0.9, className: 'w-[30%] sm:hidden z-10' },
  { src: ralli.screens[0].src, alt: ralli.screens[0].alt, left: 91, top: '26%', rotate: 9, depth: 0.5, className: 'hidden sm:block w-[15%] z-0' },
]

function Card({
  card,
  index,
  pointerX,
  pointerY,
  scroll,
  alt,
}: {
  card: FloatingCard
  index: number
  pointerX: MotionValue<number>
  pointerY: MotionValue<number>
  scroll: MotionValue<number>
  alt: string
}) {
  const x = useTransform(pointerX, (v) => v * card.depth * 36)
  const pointerShift = useTransform(pointerY, (v) => v * card.depth * 24)
  const scrollShift = useTransform(scroll, [0, 1], [0, -card.depth * 140])
  const y = useTransform([pointerShift, scrollShift], ([a, b]: number[]) => a + b)
  const rotateY = useTransform(pointerX, (v) => v * 10)
  const rotateX = useTransform(pointerY, (v) => v * -8)

  return (
    <div className={`absolute -translate-x-1/2 ${card.className}`} style={{ left: `${card.left}%`, top: card.top }}>
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: easeSmooth, delay: 0.35 + Math.abs(card.left - 50) / 120 }}
      >
        <motion.div style={{ x, y, rotateX, rotateY, rotate: card.rotate, transformPerspective: 1200 }}>
          <div className="hero-float" style={{ animationDelay: `${index * -1.3}s` }}>
            <div className="relative aspect-[1/2.1] overflow-hidden rounded-[1.4rem] border border-white/10 bg-surface shadow-[0_40px_80px_-20px_#000000b3]">
              <Image src={card.src} alt={alt} fill className="object-cover object-bottom" sizes="(max-width: 640px) 38vw, 22vw" priority={card.depth > 1} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  const { locale, t } = useLocale()
  const c = copy[locale]
  const reduceMotion = useReducedMotion()
  const stageRef = useRef<HTMLDivElement>(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const pointerX = useSpring(rawX, { stiffness: 60, damping: 18 })
  const pointerY = useSpring(rawY, { stiffness: 60, damping: 18 })
  const { scrollYProgress } = useScroll({ target: stageRef, offset: ['start end', 'end start'] })
  const still = useMotionValue(0)

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== 'mouse') return
    const rect = event.currentTarget.getBoundingClientRect()
    rawX.set((event.clientX - rect.left) / rect.width - 0.5)
    rawY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const resetPointer = () => {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <section className="container-custom section-padding pt-10 sm:pt-14 lg:pt-14">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeSmooth }}
            className="eyebrow mb-5"
          >
            {c.eyebrow}
          </motion.p>
          <RevealText
            as="h1"
            immediate
            lines={c.title}
            lineClassNames={['', 'italic text-muted', 'italic text-muted']}
            className="hero-display"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeSmooth, delay: 0.5 }}
          className="max-w-xs pb-3"
        >
          <p className="text-muted">{c.note}</p>
          <Link href="/projects" className="text-link mt-6">
            {c.work} <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>

      <div
        ref={stageRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
        className="relative mt-10 aspect-square sm:aspect-[16/9] lg:mt-10 lg:aspect-[2/1]"
      >
        {cards.map((card, index) => (
          <Card
            key={`${card.src}-${index}`}
            card={card}
            index={index}
            pointerX={pointerX}
            pointerY={pointerY}
            scroll={reduceMotion ? still : scrollYProgress}
            alt={t(card.alt)}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="relative z-30 mt-6 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p className="eyebrow m-0 !text-brass">{c.featuredEyebrow}</p>
          <p className="m-0 mt-2 font-display text-3xl text-foreground sm:text-4xl">{mahalleninMakasi.title}</p>
          <p className="m-0 mt-1 text-sm text-muted">{c.featuredText}</p>
        </div>
        <Link href="/#mahallenin-makasi" className="text-link group self-start sm:self-auto">
          {c.featuredCta}
          <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </motion.div>

      <div className="hero-footnote">
        <span>{c.footnote}</span>
        <Link href="#manifesto" className="inline-flex items-center gap-2">
          {c.more} <ArrowDown aria-hidden="true" className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  )
}
