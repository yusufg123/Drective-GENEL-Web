'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin, Mail, Instagram, Gamepad2 } from 'lucide-react'
import { useLocale } from './LanguageProvider'

const pageLinks = [
  { name: { tr: 'Mahallenin Makası', en: 'Mahallenin Makası' }, href: '/#mahallenin-makasi' },
  { name: { tr: 'Hakkımızda', en: 'About' }, href: '/about' },
  { name: { tr: 'Hizmetler', en: 'Services' }, href: '/services' },
  { name: { tr: 'Projeler', en: 'Projects' }, href: '/projects' },
  { name: { tr: 'İletişim', en: 'Contact' }, href: '/contact' },
]

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/efeardaaric', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/d-rective-interactive/?viewAsMember=true', icon: Linkedin },
  { name: 'E-mail', href: 'mailto:drectivegames@gmail.com', icon: Mail },
  { name: 'Instagram', href: 'https://www.instagram.com/drectiveinteractive/', icon: Instagram },
  { name: 'Steam', href: 'https://store.steampowered.com/app/4824950/Connections/', icon: Gamepad2 },
]

const copy = {
  tr: {
    about: 'İstanbul’da oyun ve mobil uygulama yapan bağımsız bir stüdyoyuz. Son oyunumuz Mahallenin Makası; CubeLune, Wizardus, US ve RALLI de yolda.',
    pages: 'Sayfalar',
    startTitle: 'Birlikte çalışalım',
    startText: 'Aklınızda bir oyun, uygulama ya da web sitesi varsa bize yazın.',
    startCta: 'Bizimle Çalışın',
    rights: 'Tüm hakları saklıdır.',
    privacy: 'Gizlilik',
    appPrivacy: 'Uygulama Gizliliği',
    terms: 'Kullanım Şartları',
  },
  en: {
    about: 'We’re an independent studio making games and mobile apps in Istanbul. Our latest game is Mahallenin Makası, and CubeLune, Wizardus, US and RALLI are on the way.',
    pages: 'Pages',
    startTitle: 'Work with us',
    startText: 'Have an idea for a game, app or website? Write to us.',
    startCta: 'Work With Us',
    rights: 'All rights reserved.',
    privacy: 'Privacy',
    appPrivacy: 'App Privacy',
    terms: 'Terms of Use',
  },
}

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { locale, t } = useLocale()
  const c = copy[locale]

  return (
    <footer className="border-t border-line bg-background">
      <div className="container-custom section-padding py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="mb-5 flex items-center gap-3">
              <div className="relative h-14 w-14">
                <Image src="/Logo.png" alt="Drective" fill className="object-contain" />
              </div>
              <span className="font-heading text-2xl font-bold">Drective</span>
            </Link>
            <p className="m-0 max-w-sm text-sm text-muted">{c.about}</p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  className="p-2 text-muted transition hover:border-brass hover:text-brass"
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-base font-semibold text-foreground">{c.pages}</h3>
            <ul className="space-y-2">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-brass">
                    {t(link.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-base font-semibold text-foreground">{c.startTitle}</h3>
            <p className="mb-4 text-sm text-muted">{c.startText}</p>
            <Link href="/contact#bizimle-calisin" className="btn-primary text-sm">
              {c.startCta}
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0">© {currentYear} Drective. {c.rights}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-foreground">
              {c.privacy}
            </Link>
            <Link href="/apps/privacy" className="hover:text-foreground">
              {c.appPrivacy}
            </Link>
            <Link href="/terms-of-use" className="hover:text-foreground">
              {c.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
