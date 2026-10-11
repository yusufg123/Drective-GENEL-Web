'use client'

import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { upcomingApps, upcomingGames } from '@/lib/portfolio'
import { easeSmooth } from '@/lib/motion'
import { useLocale } from './LanguageProvider'
import ScreenDeck from './ScreenDeck'

const products = [...upcomingGames, ...upcomingApps]

const copy = {
  tr: {
    eyebrow: 'Yakında',
    title: 'Üzerinde çalıştıklarımız',
    kind: { game: 'Oyun', app: 'Uygulama' },
  },
  en: {
    eyebrow: 'Coming soon',
    title: 'What we’re working on',
    kind: { game: 'Game', app: 'App' },
  },
}

function isLight(hex: string) {
  const value = parseInt(hex.slice(1), 16)
  const r = (value >> 16) & 255
  const g = (value >> 8) & 255
  const b = value & 255
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.6
}

const backgrounds = products.map((p) => p.previewBackground)
const foregrounds = backgrounds.map((bg) => (isLight(bg) ? '#141414' : '#f2f0ea'))
const n = products.length
const holdInput = products.flatMap((_, i) => [(i + 0.12) / n, (i + 0.88) / n])
const hold = (values: string[]) => values.flatMap((v) => [v, v])

export default function UpcomingShowcase() {
  const { locale, t } = useLocale()
  const c = copy[locale]
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const background = useTransform(scrollYProgress, holdInput, hold(backgrounds))
  const color = useTransform(scrollYProgress, holdInput, hold(foregrounds))

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActive(Math.min(n - 1, Math.max(0, Math.floor(v * n))))
  })

  const product = products[active]

  return (
    <section ref={ref} id="yakinda" aria-labelledby="yakinda-title" style={{ height: `${n * 100}svh` }} className="relative">
      <motion.div style={{ background, color }} className="sticky top-0 flex h-[100svh] flex-col overflow-hidden">
        <div className="container-custom section-padding relative z-20 flex items-center justify-between pt-24 short:pt-20 lg:pt-28">
          <div>
            <p className="m-0 text-[0.69rem] font-medium uppercase tracking-[0.12em] opacity-60">{c.eyebrow}</p>
            <h2 id="yakinda-title" className="m-0 mt-1 text-base font-medium !text-current">{c.title}</h2>
          </div>
          <p className="m-0 font-display text-2xl tabular-nums">
            {String(active + 1).padStart(2, '0')}
            <span className="opacity-40"> / {String(n).padStart(2, '0')}</span>
          </p>
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={product.id}
              initial={{ opacity: 0, y: '30%' }}
              animate={{ opacity: 0.1, y: '0%' }}
              exit={{ opacity: 0, y: '-30%' }}
              transition={{ duration: 0.9, ease: easeSmooth }}
              className="whitespace-nowrap font-display text-[30vw] leading-none lg:text-[22vw]"
            >
              {product.title}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="container-custom section-padding relative z-10 grid flex-1 items-center gap-6 pb-24 short:content-center short:gap-3 lg:grid-cols-[1fr_auto_1fr] lg:gap-12 lg:pb-16">
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: easeSmooth }}
              >
                <p className="m-0 text-xs uppercase tracking-[0.14em] opacity-60">{c.kind[product.category]}</p>
                <h3 className="m-0 mt-2 font-display text-5xl font-normal !text-current short:mt-1 short:text-4xl lg:text-7xl">{product.title}</h3>
                <p className="mt-4 max-w-sm text-sm opacity-75 short:mt-2 short:line-clamp-2 lg:text-base">{t(product.description)}</p>
                <p className="m-0 mt-4 text-xs uppercase tracking-[0.14em] opacity-60 short:hidden">{t(product.tags).join(' · ')}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative order-1 mx-auto w-fit lg:order-2">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 120, rotate: 6 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                exit={{ opacity: 0, y: -120, rotate: -6 }}
                transition={{ duration: 0.85, ease: easeSmooth }}
              >
                <ScreenDeck screens={product.screens} className="h-[38svh] short:h-[27svh] lg:h-[54svh]" />
              </motion.div>
            </AnimatePresence>
          </div>

          <ol className="order-3 m-0 hidden list-none justify-self-end p-0 lg:block">
            {products.map((item, i) => (
              <li
                key={item.id}
                aria-current={i === active ? 'step' : undefined}
                className={`flex items-center gap-3 py-1.5 text-sm transition-opacity duration-500 ${i === active ? 'opacity-100' : 'opacity-35'}`}
              >
                <span className={`h-px bg-current transition-all duration-500 ${i === active ? 'w-10' : 'w-4'}`} />
                {item.title}
              </li>
            ))}
          </ol>
        </div>
      </motion.div>
    </section>
  )
}
