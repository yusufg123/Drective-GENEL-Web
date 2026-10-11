'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { UpcomingProject } from '@/lib/portfolio'
import { useLocale } from './LanguageProvider'

type Props = Pick<UpcomingProject, 'title' | 'description' | 'screens' | 'tags' | 'previewBackground'> & {
  id?: string
}

const copy = {
  tr: { screenshots: 'ekran görüntüleri', previous: 'önceki görsel', next: 'sonraki görsel', soon: 'Yakında' },
  en: { screenshots: 'screenshots', previous: 'previous image', next: 'next image', soon: 'Coming soon' },
}

export default function UpcomingProjectCard({ id, title, description, screens, tags, previewBackground }: Props) {
  const [current, setCurrent] = useState(0)
  const { locale, t } = useLocale()
  const c = copy[locale]
  const screen = screens[current]

  return (
    <article id={id} className="project-entry flex h-full min-w-0 scroll-mt-28 flex-col">
      <div className="upcoming-preview" style={{ backgroundColor: previewBackground }}>
        <div className="upcoming-screen">
          <Image src={screen.src} alt={t(screen.alt)} fill className="object-cover object-bottom" sizes="(max-width: 640px) 180px, 210px" />
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 border-b border-line py-3">
        <p aria-live="polite" aria-atomic="true" className="min-w-0 text-xs text-muted">
          <span className="mr-2 tabular-nums">{current + 1} / {screens.length}</span>
          {t(screen.label)}
        </p>
        <div role="group" aria-label={`${title} ${c.screenshots}`} className="flex shrink-0 gap-1">
          <button type="button" onClick={() => setCurrent((value) => (value - 1 + screens.length) % screens.length)} aria-label={`${title}: ${c.previous}`} className="gallery-control">
            <ChevronLeft aria-hidden="true" className="h-4 w-4" />
          </button>
          <button type="button" onClick={() => setCurrent((value) => (value + 1) % screens.length)} aria-label={`${title}: ${c.next}`} className="gallery-control">
            <ChevronRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="flex flex-1 flex-col py-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-heading text-2xl font-medium">{title}</h3>
          <span className="inline-flex items-center gap-2 text-xs text-brass"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brass" />{c.soon}</span>
        </div>
        <p className="mt-3 text-sm text-muted">{t(description)}</p>
        <p className="mt-auto pt-5 text-xs text-muted">{t(tags).join(' / ')}</p>
      </div>
    </article>
  )
}
