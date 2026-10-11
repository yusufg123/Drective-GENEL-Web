'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { easeSmooth } from '@/lib/motion'
import { useLocale } from './LanguageProvider'

export default function FloatingCta() {
  const pathname = usePathname()
  const { locale } = useLocale()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const update = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.75
      const nearEnd = window.innerHeight + window.scrollY > document.documentElement.scrollHeight - 900
      setVisible(pastHero && !nearEnd)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [pathname])

  if (pathname.startsWith('/contact')) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 90, opacity: 0, x: '-50%' }}
          animate={{ y: 0, opacity: 1, x: '-50%' }}
          exit={{ y: 90, opacity: 0, x: '-50%' }}
          transition={{ duration: 0.6, ease: easeSmooth }}
          className="fixed bottom-5 left-1/2 z-40"
        >
          <Link href={pathname === '/' ? '#bizimle-calisin' : '/contact#bizimle-calisin'} className="floating-cta group">
            <span className="relative h-8 w-8 shrink-0">
              <Image src="/Logo.png" alt="" fill className="object-contain" sizes="32px" />
            </span>
            <span className="floating-cta-label">{locale === 'tr' ? 'Bir proje konuşalım' : 'Let’s talk about a project'}</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
