'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useLocale } from './LanguageProvider'
import LanguageSwitcher from './LanguageSwitcher'
import { easeSmooth } from '@/lib/motion'

const navigation = [
  { name: { tr: 'Oyunlar', en: 'Games' }, href: '/#mahallenin-makasi' },
  { name: { tr: 'Projeler', en: 'Projects' }, href: '/projects' },
  { name: { tr: 'Hizmetler', en: 'Services' }, href: '/services' },
  { name: { tr: 'Hakkımızda', en: 'About' }, href: '/about' },
  { name: { tr: 'İletişim', en: 'Contact' }, href: '/contact' },
]

const copy = {
  tr: { cta: 'Bir proje konuşalım', mobileCta: 'Bizimle çalışın', open: 'Menüyü aç', close: 'Menüyü kapat' },
  en: { cta: 'Let’s talk about a project', mobileCta: 'Work with us', open: 'Open menu', close: 'Close menu' },
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const lastY = useRef(0)
  const pathname = usePathname()
  const { locale, t } = useLocale()
  const c = copy[locale]

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setIsScrolled(y > 16)
      setIsHidden(y > 160 && y > lastY.current + 4 ? true : y < lastY.current - 4 ? false : (prev) => prev)
      lastY.current = y
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: isHidden && !isOpen ? '-100%' : 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: easeSmooth }}
        className={`fixed left-0 right-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500 ${
          isScrolled || isOpen ? 'border-line bg-background/80 backdrop-blur-xl' : 'border-transparent bg-transparent'
        }`}
      >
        <div className="container-custom section-padding">
          <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
            <Link href="/" className="group flex shrink-0 items-center gap-2">
              <div className="relative h-9 w-9 lg:h-10 lg:w-10">
                <Image src="/Logo.png" alt="Drective" fill className="object-contain" priority />
              </div>
              <span className="font-heading text-xl font-bold tracking-tight text-foreground lg:text-2xl">Drective</span>
            </Link>

            <div className="hidden min-w-0 flex-1 items-center justify-center gap-7 lg:flex xl:gap-9">
              {navigation.map((item) => {
                const active = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`group relative shrink-0 whitespace-nowrap py-1 text-sm font-medium transition-colors ${
                      active ? 'text-foreground' : 'text-muted hover:text-foreground'
                    }`}
                  >
                    {t(item.name)}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-brass transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                )
              })}
            </div>

            <div className="hidden shrink-0 items-center gap-6 lg:flex">
              <LanguageSwitcher />
              <Link href="/contact#bizimle-calisin" className="text-link group text-sm">
                {c.cta}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="flex shrink-0 items-center gap-3 lg:hidden">
              <LanguageSwitcher />
              <button
                onClick={() => setIsOpen((v) => !v)}
                className="rounded-full border border-line p-2"
                aria-label={isOpen ? c.close : c.open}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            data-lenis-prevent
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: easeSmooth }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-background pt-16 lg:hidden"
          >
            <nav className="container-custom section-padding flex flex-1 flex-col justify-center gap-1 py-10">
              {navigation.map((item, i) => (
                <div key={item.href} className="overflow-hidden">
                  <motion.div
                    initial={{ y: '110%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '110%' }}
                    transition={{ duration: 0.7, ease: easeSmooth, delay: 0.12 + i * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={pathname === item.href ? 'page' : undefined}
                      className={`block py-1 font-display text-5xl leading-tight ${
                        pathname === item.href ? 'text-brass' : 'text-foreground'
                      }`}
                    >
                      {t(item.name)}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="container-custom section-padding pb-10"
            >
              <Link href="/contact#bizimle-calisin" onClick={() => setIsOpen(false)} className="btn-primary w-full text-center">
                {c.mobileCta}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
