'use client'

import { motion } from 'framer-motion'
import Section from '@/components/Section'
import WorkWithUsForm from '@/components/WorkWithUsForm'
import { useLocale } from '@/components/LanguageProvider'
import { staggerContainer, staggerItem } from '@/lib/motion'
import PageHero from '@/components/PageHero'
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react'

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: { tr: 'E-posta', en: 'Email' },
    value: { tr: 'drectivegames@gmail.com', en: 'drectivegames@gmail.com' },
    href: 'mailto:drectivegames@gmail.com',
    description: { tr: 'Proje talepleri için', en: 'For project requests' },
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: { tr: 'Telefon', en: 'Phone' },
    value: { tr: '+90 535 964 45', en: '+90 535 964 45' },
    href: 'tel:+9053596445',
    description: { tr: 'Pazartesi - Cuma, 09:00 - 18:00', en: 'Monday – Friday, 09:00 – 18:00' },
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: { tr: 'Adres', en: 'Address' },
    value: {
      tr: 'Halkalı Merkez Mah. Halkalı Cad No:281/23 Ofis No:34, Küçükçekmece/İstanbul',
      en: 'Halkalı Merkez Mah. Halkalı Cad No:281/23 Office No:34, Küçükçekmece/Istanbul, Turkey',
    },
    href: undefined,
    description: { tr: 'Ofis adresimiz', en: 'Our office' },
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: { tr: 'Çalışma Saatleri', en: 'Working Hours' },
    value: { tr: 'Pazartesi - Cuma', en: 'Monday – Friday' },
    href: undefined,
    description: { tr: '09:00 - 18:00 (GMT+3)', en: '09:00 – 18:00 (GMT+3)' },
  },
]

const copy = {
  tr: {
    eyebrow: 'İletişim',
    title: ['Bizimle', 'çalışın.'],
    intro: 'Oyun, mobil uygulama ya da web sitesi; aklınızdakini kısaca anlatın, birkaç iş günü içinde size yazalım.',
    formTitle: 'Bize yazın',
  },
  en: {
    eyebrow: 'Contact',
    title: ['Work', 'with us.'],
    intro: 'A game, an app or a website: tell us a little about what you have in mind and we’ll get back to you within a few business days.',
    formTitle: 'Send us a message',
  },
}

export default function ContactPage() {
  const { locale, t } = useLocale()
  const c = copy[locale]

  return (
    <div>
      <PageHero eyebrow={c.eyebrow} title={c.title} intro={c.intro}>
        <a href="mailto:drectivegames@gmail.com" className="group inline-flex items-center gap-2 font-display text-[1.65rem] text-foreground sm:text-4xl">
          <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
            drectivegames@gmail.com
          </span>
          <ArrowUpRight aria-hidden="true" className="h-6 w-6 text-brass transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            {contactInfo.map((info) => (
              <motion.div key={info.title.tr} variants={staggerItem} className="flex items-start gap-5 border-t border-line py-6 last:border-b">
                <div className="mt-0.5 text-brass">{info.icon}</div>
                <div>
                  <h3 className="m-0 text-xs font-medium uppercase tracking-[0.18em] !text-muted">{t(info.title)}</h3>
                  {info.href ? (
                    <a href={info.href} className="mt-2 block text-lg text-foreground transition-colors hover:text-brass">
                      {t(info.value)}
                    </a>
                  ) : (
                    <p className="m-0 mt-2 text-lg text-foreground">{t(info.value)}</p>
                  )}
                  <p className="m-0 mt-1 text-sm text-muted">{t(info.description)}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div id="bizimle-calisin" className="surface-panel scroll-mt-28 p-6 sm:p-8">
            <h2 className="mb-6 display-heading text-4xl">{c.formTitle}</h2>
            <WorkWithUsForm />
          </div>
        </div>
      </Section>
    </div>
  )
}
