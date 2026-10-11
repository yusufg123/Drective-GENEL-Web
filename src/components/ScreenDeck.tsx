'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, type PanInfo } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useLocale } from './LanguageProvider'
import type { ProjectScreen } from '@/lib/portfolio'

const copy = {
  tr: { show: 'Öne getir', prev: 'Önceki ekran', next: 'Sonraki ekran', hint: 'Sürükleyin ya da arkadakilere dokunun' },
  en: { show: 'Bring to front', prev: 'Previous screen', next: 'Next screen', hint: 'Drag, or tap the ones behind' },
}

const spring = { type: 'spring', stiffness: 260, damping: 30, mass: 0.9 } as const

type Props = {
  screens: ProjectScreen[]
  className?: string
}

export default function ScreenDeck({ screens, className = '' }: Props) {
  const { locale, t } = useLocale()
  const c = copy[locale]
  const reduceMotion = useReducedMotion()
  const [order, setOrder] = useState(() => screens.map((_, i) => i))
  const [hovered, setHovered] = useState<number | null>(null)
  const count = screens.length

  const bringToFront = (index: number) => setOrder((o) => [index, ...o.filter((i) => i !== index)])
  const next = () => setOrder((o) => [...o.slice(1), o[0]])
  const prev = () => setOrder((o) => [o[o.length - 1], ...o.slice(0, -1)])

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 70 || Math.abs(info.velocity.x) > 500) {
      if (info.offset.x < 0) next()
      else prev()
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className={`relative aspect-[1170/2300] ${className}`}>
        {screens.map((screen, index) => {
          const depth = order.indexOf(index)
          const isFront = depth === 0
          const lift = hovered === index && !isFront ? 1 : 0
          return (
            <motion.div
              key={screen.src}
              initial={false}
              animate={{
                x: `${depth * 15 + lift * 7}%`,
                y: `${-lift * 2}%`,
                rotate: depth * 5 + lift * 2,
                scale: 1 - depth * 0.08,
                opacity: depth > 3 ? 0 : 1,
                filter: `brightness(${1 - depth * 0.09 + lift * 0.08})`,
              }}
              transition={reduceMotion ? { duration: 0 } : spring}
              style={{ zIndex: count - depth }}
              drag={isFront && count > 1 ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.55}
              dragSnapToOrigin
              onDragEnd={handleDragEnd}
              whileDrag={{ rotate: -3, scale: 1.02 }}
              onHoverStart={() => setHovered(index)}
              onHoverEnd={() => setHovered((h) => (h === index ? null : h))}
              className={`absolute inset-0 overflow-hidden rounded-[1.6rem] shadow-[0_40px_80px_-24px_#000000a6] ${
                isFront ? (count > 1 ? 'cursor-grab active:cursor-grabbing' : '') : 'cursor-pointer'
              }`}
            >
              <Image
                src={screen.src}
                alt={t(screen.alt)}
                fill
                draggable={false}
                className="pointer-events-none select-none object-cover object-bottom"
                sizes="(max-width: 1024px) 50vw, 22vw"
              />
              {!isFront && (
                <button
                  type="button"
                  onClick={() => bringToFront(index)}
                  aria-label={`${c.show}: ${t(screen.alt)}`}
                  className="absolute inset-0 h-full w-full"
                />
              )}
            </motion.div>
          )
        })}
      </div>

      {count > 1 && (
        <div className="relative z-10 mt-7 flex items-center gap-2 text-current short:mt-3 sm:gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label={c.prev}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-current opacity-60 transition-opacity hover:opacity-100"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          </button>
          <div className="flex items-center" aria-live="polite">
            {screens.map((screen, index) => (
              <button
                key={screen.src}
                type="button"
                onClick={() => bringToFront(index)}
                aria-label={`${c.show}: ${t(screen.alt)}`}
                aria-current={order[0] === index ? 'true' : undefined}
                className="flex h-9 min-w-[1.5rem] items-center justify-center px-1"
              >
                <span
                  className={`block h-1 rounded-full bg-current transition-all duration-500 ${
                    order[0] === index ? 'w-6 opacity-100' : 'w-1.5 opacity-35'
                  }`}
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label={c.next}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-current opacity-60 transition-opacity hover:opacity-100"
          >
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      )}
      {count > 1 && <p className="m-0 mt-2 hidden text-[0.69rem] uppercase tracking-[0.12em] opacity-50 lg:block">{c.hint}</p>}
    </div>
  )
}
