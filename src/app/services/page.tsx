'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, type MotionValue } from 'framer-motion'
import Section from '@/components/Section'
import RevealText from '@/components/RevealText'
import CTA from '@/components/CTA'
import { useLocale } from '@/components/LanguageProvider'
import PageHero from '@/components/PageHero'
import { staggerContainer, staggerItem, easeSmooth } from '@/lib/motion'
import {
  Code,
  Gamepad2,
  Palette,
  Users,
  Zap,
  Shield,
  Smartphone,
  Database,
  Cloud,
  BarChart3,
} from 'lucide-react'

const services = [
  {
    icon: <Gamepad2 className="w-5 h-5" />,
    title: { tr: 'Oyun Geliştirme', en: 'Game Development' },
    description: {
      tr: 'Unity ile 2D ve 3D oyunlar yapıyoruz. Prototipten Steam’de yayına kadar işin her aşamasındayız, yayından sonra da güncellemeleri sürdürüyoruz.',
      en: 'We make 2D and 3D games in Unity. We handle everything from the first prototype to the Steam release, and keep updating the game after launch.',
    },
    features: { tr: ['Unity 2D/3D', 'C#', 'Cross-platform', 'Steam yayın'], en: ['Unity 2D/3D', 'C#', 'Cross-platform', 'Steam release'] },
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: { tr: 'Mobil Uygulama', en: 'Mobile Apps' },
    description: {
      tr: 'iOS ve Android uygulamalarını fikir aşamasından alıp App Store ve Google Play’de yayına kadar götürüyoruz.',
      en: 'We take iOS and Android apps from the first idea all the way to the App Store and Google Play.',
    },
    features: { tr: ['React Native / native', 'Push', 'Store yayın', 'Performans'], en: ['React Native / native', 'Push', 'Store release', 'Performance'] },
  },
  {
    icon: <Code className="w-5 h-5" />,
    title: { tr: 'Web Geliştirme', en: 'Web Development' },
    description: {
      tr: 'Next.js ve TypeScript ile hızlı açılan, büyümeye hazır siteler yapıyoruz. Tanıtım sitesi de olur, e-ticaret ya da kurumsal platform da.',
      en: 'We build fast websites with Next.js and TypeScript that can grow with you, whether it’s a brand site, an online store or a corporate platform.',
    },
    features: { tr: ['Next.js App Router', 'TypeScript', 'SEO & performans', 'Responsive UI'], en: ['Next.js App Router', 'TypeScript', 'SEO & performance', 'Responsive UI'] },
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: { tr: 'UI/UX Tasarım', en: 'UI/UX Design' },
    description: {
      tr: 'Markanıza yakışan, kullanması kolay arayüzler tasarlıyoruz. İlk taslaktan yayındaki ürüne kadar tasarım dili tutarlı kalıyor.',
      en: 'We design interfaces that suit your brand and are easy to use, and keep the design consistent from the first sketch to the live product.',
    },
    features: { tr: ['Araştırma', 'Wireframe', 'Design system', 'Motion'], en: ['Research', 'Wireframes', 'Design systems', 'Motion'] },
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: { tr: 'Backend', en: 'Backend' },
    description: {
      tr: 'Uygulamanın arkasında çalışan API’leri, veritabanını ve kullanıcı girişini kuruyoruz.',
      en: 'We set up the APIs, database and sign-in that run behind your app.',
    },
    features: { tr: ['Node.js', 'API tasarımı', 'Auth', 'Cloud deploy'], en: ['Node.js', 'API design', 'Auth', 'Cloud deploy'] },
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: { tr: 'Danışmanlık', en: 'Consulting' },
    description: {
      tr: 'Hangi teknolojiyi seçeceğiniz, projeyi nasıl kuracağınız ya da ekibinizi nasıl yöneteceğiniz konusunda yanınızdayız.',
      en: 'We help you choose the right technology, structure your project and keep your team on track.',
    },
    features: { tr: ['Stack seçimi', 'Mimari', 'Kod review', 'Mentörlük'], en: ['Stack selection', 'Architecture', 'Code review', 'Mentoring'] },
  },
]

const extras = [
  {
    icon: <Zap className="w-4 h-4" />,
    title: { tr: 'Performans', en: 'Performance' },
    description: { tr: 'Sitenizi hızlandırıyor, Google’ın hız ölçümlerinde iyi sonuç almasını sağlıyoruz.', en: 'We speed up your site so it scores well on Google’s Core Web Vitals.' },
  },
  {
    icon: <Shield className="w-4 h-4" />,
    title: { tr: 'Güvenlik', en: 'Security' },
    description: { tr: 'Kodda ve sunucuda yaygın güvenlik açıklarını kontrol ediyoruz.', en: 'We check your code and servers for common security issues.' },
  },
  {
    icon: <Cloud className="w-4 h-4" />,
    title: { tr: 'Cloud', en: 'Cloud' },
    description: { tr: 'Projenizi Vercel, AWS gibi platformlara taşıyoruz.', en: 'We move your project to platforms like Vercel and AWS.' },
  },
  {
    icon: <BarChart3 className="w-4 h-4" />,
    title: { tr: 'Analitik', en: 'Analytics' },
    description: { tr: 'Kullanıcıların ürünü nasıl kullandığını görebilmeniz için ölçüm kuruyoruz.', en: 'We set up tracking so you can see how people use your product.' },
  },
]

const copy = {
  tr: {
    eyebrow: 'Hizmetler',
    title: ['Neler', 'yapıyoruz?'],
    intro: 'Asıl işimiz oyun ve mobil uygulama yapmak. Bu işte öğrendiklerimizi markaların web sitelerinde ve uygulamalarında da kullanıyoruz.',
    extrasEyebrow: 'Ek destek',
    extrasTitle: 'Yayından sonra da buradayız',
    ctaTitle: 'Neye ihtiyacınız olduğunu birlikte bulalım',
    ctaText: 'Projenizi kısaca anlatın; ne yapacağımızı, ne kadar süreceğini ve nasıl ilerleyeceğimizi birlikte netleştirelim.',
    ctaPrimary: 'Bizimle Çalışın',
    ctaSecondary: 'Portföyü Gör',
  },
  en: {
    eyebrow: 'Services',
    title: ['What do', 'we make?'],
    intro: 'Our main work is making games and mobile apps. We put what we’ve learned there into websites and apps for brands too.',
    extrasEyebrow: 'Extra support',
    extrasTitle: 'We stay with you after launch',
    ctaTitle: 'Let’s figure out what you need',
    ctaText: 'Tell us a bit about your project and we’ll work out the scope, timeline and plan together.',
    ctaPrimary: 'Work With Us',
    ctaSecondary: 'See Our Work',
  },
}

const steps = [
  {
    title: { tr: 'Tanışma', en: 'Discover' },
    text: {
      tr: 'Fikrinizi, hedeflerinizi ve bütçenizi konuşuyor, kapsamı birlikte netleştiriyoruz.',
      en: 'We talk through your idea, goals and budget, and agree on the scope together.',
    },
  },
  {
    title: { tr: 'Prototip', en: 'Prototype' },
    text: {
      tr: 'Kısa sürede tıklanabilir ya da oynanabilir bir ilk sürüm çıkarıyoruz.',
      en: 'We quickly put together a first version you can click through or play.',
    },
  },
  {
    title: { tr: 'Geliştirme', en: 'Build' },
    text: {
      tr: 'Kısa aralıklarla ilerliyor, her adımda size çalışan bir sürüm gösteriyoruz.',
      en: 'We work in short cycles and show you a working version at every step.',
    },
  },
  {
    title: { tr: 'Yayın ve sonrası', en: 'Launch and beyond' },
    text: {
      tr: 'Mağazalara ve canlıya çıkarıyor, yayından sonra da güncellemeye devam ediyoruz.',
      en: 'We ship to the stores and the web, and keep improving things after launch.',
    },
  },
]

const processCopy = {
  tr: { eyebrow: 'Süreç', title: 'Nasıl ilerliyoruz' },
  en: { eyebrow: 'Process', title: 'How we work' },
}

function ProcessSection() {
  const { locale, t } = useLocale()
  const c = processCopy[locale]
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 55%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <section className="container-custom section-padding py-16 lg:py-24">
      <p className="eyebrow mb-3">{c.eyebrow}</p>
      <RevealText lines={[c.title]} className="display-heading text-5xl lg:text-7xl" />
      <div ref={ref} className="relative mt-12 lg:mt-16">
        <div className="absolute bottom-0 left-[1.15rem] top-0 w-px bg-line lg:bottom-auto lg:left-0 lg:right-0 lg:top-[1.15rem] lg:h-px lg:w-auto" />
        <motion.div
          style={{ scaleY: progress }}
          className="absolute bottom-0 left-[1.15rem] top-0 w-px origin-top bg-brass lg:hidden"
        />
        <motion.div
          style={{ scaleX: progress }}
          className="absolute left-0 right-0 top-[1.15rem] hidden h-px origin-left bg-brass lg:block"
        />
        <ol className="relative m-0 grid list-none gap-10 p-0 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <ProcessStep key={step.title.tr} index={i} progress={progress} title={t(step.title)} text={t(step.text)} />
          ))}
        </ol>
      </div>
    </section>
  )
}

function ProcessStep({ index, progress, title, text }: { index: number; progress: MotionValue<number>; title: string; text: string }) {
  const start = index / steps.length
  const lit = useTransform(progress, [start, start + 0.08], [0, 1])
  const background = useTransform(lit, (v) => (v > 0.5 ? '#e3b64b' : '#141414'))
  const color = useTransform(lit, (v) => (v > 0.5 ? '#141414' : '#aaa9a2'))
  const borderColor = useTransform(lit, (v) => (v > 0.5 ? '#e3b64b' : '#363633'))

  return (
    <li className="flex gap-5 lg:block">
      <motion.span
        style={{ background, color, borderColor }}
        className="relative z-10 flex h-[2.3rem] w-[2.3rem] shrink-0 items-center justify-center rounded-full border font-display text-base transition-colors duration-500"
      >
        {String(index + 1).padStart(2, '0')}
      </motion.span>
      <div className="lg:mt-8">
        <h3 className="m-0 display-heading text-3xl lg:text-4xl">{title}</h3>
        <p className="mt-3 max-w-xs text-sm text-muted">{text}</p>
      </div>
    </li>
  )
}

export default function ServicesPage() {
  const { locale, t } = useLocale()
  const c = copy[locale]

  return (
    <div>
      <PageHero eyebrow={c.eyebrow} title={c.title} intro={c.intro} />

      <div className="mb-16 overflow-hidden border-y border-line py-5 lg:mb-24" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((copyIndex) => (
            <div key={copyIndex} className="flex shrink-0 items-center">
              {services.map((service) => (
                <span key={service.title.tr} className="flex items-center whitespace-nowrap font-display text-3xl italic text-foreground/80 sm:text-4xl">
                  <span className="px-6 sm:px-8">{t(service.title)}</span>
                  <span className="text-xl not-italic text-brass">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="container-custom section-padding pb-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title.tr}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.9, ease: easeSmooth }}
            className="group relative grid gap-6 border-t border-line py-10 last:border-b lg:grid-cols-[120px_1fr_1fr] lg:gap-10 lg:py-14"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 -top-px h-px origin-left scale-x-0 bg-brass transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
            />
            <div className="flex items-center gap-4 lg:flex-col lg:items-start">
              <span className="font-display text-2xl text-muted transition-colors duration-500 group-hover:text-brass">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-all duration-500 group-hover:rotate-[-8deg] group-hover:border-brass group-hover:bg-brass group-hover:text-background">
                {service.icon}
              </span>
            </div>
            <h3 className="m-0 display-heading text-4xl transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 sm:text-5xl lg:text-6xl">
              {t(service.title)}
            </h3>
            <div>
              <p className="m-0 text-muted">{t(service.description)}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {t(service.features).map((feature) => (
                  <li key={feature} className="rounded-full border border-line px-3 py-1 text-xs text-foreground/75 transition-colors duration-500 group-hover:border-foreground/30">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>

      <ProcessSection />

      <Section>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={staggerItem} className="mb-8">
            <p className="eyebrow mb-3">{c.extrasEyebrow}</p>
            <h2 className="display-heading text-5xl lg:text-7xl">{c.extrasTitle}</h2>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {extras.map((item, i) => (
              <motion.div
                key={item.title.tr}
                variants={staggerItem}
                whileHover={{ y: -4, transition: { duration: 0.35, ease: easeSmooth } }}
                className="surface-panel group relative overflow-hidden p-6"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brass transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                />
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-brass">{item.icon}</span>
                  <span className="font-display text-lg text-muted">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="m-0 display-heading text-3xl">{t(item.title)}</h3>
                <p className="mt-2 text-sm text-muted">{t(item.description)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      <CTA
        title={c.ctaTitle}
        description={c.ctaText}
        primaryButton={{ text: c.ctaPrimary, href: '/contact#bizimle-calisin' }}
        secondaryButton={{ text: c.ctaSecondary, href: '/projects' }}
      />
    </div>
  )
}
