'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Section from '@/components/Section'
import CTA from '@/components/CTA'
import { useLocale } from '@/components/LanguageProvider'
import PageHero from '@/components/PageHero'
import ScrollRevealImage from '@/components/ScrollRevealImage'
import { staggerContainer, staggerItem, easeSmooth } from '@/lib/motion'
import { Users, Lightbulb, Award, Code, Gamepad2, Palette, Zap, ArrowUpRight } from 'lucide-react'
import { team } from '@/lib/team'
import { mahalleninMakasi, upcomingGames, upcomingApps } from '@/lib/portfolio'

const values = [
  {
    icon: <Gamepad2 className="w-5 h-5" />,
    title: { tr: 'Önce oynanış', en: 'Gameplay first' },
    description: {
      tr: 'Bir fikri kâğıt üzerinde tartışmak yerine hemen oynanabilir hale getiriyoruz. Eğlenceli değilse devam etmiyoruz.',
      en: 'Instead of debating an idea on paper, we make it playable right away. If it isn’t fun, we move on.',
    },
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: { tr: 'Küçük ve yakın ekip', en: 'A small, close team' },
    description: {
      tr: 'Tasarımcısı, sanatçısı, yazılımcısı aynı masada oturuyor. Kararları hızlı veriyor, birbirimizle doğrudan konuşuyoruz.',
      en: 'Designers, artists and developers sit at the same table. We decide quickly and talk to each other directly.',
    },
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: { tr: 'Kendi fikirlerimiz', en: 'Our own ideas' },
    description: {
      tr: 'Mahallenin Makası gibi oyunlar, etrafımızda gördüklerimizden ve kendi kültürümüzden çıkıyor.',
      en: 'Games like Mahallenin Makası come from our own observations and culture.',
    },
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: { tr: 'Bitirdiğimiz işler', en: 'Shipping things' },
    description: {
      tr: 'Yarım kalan prototiplerle değil, yayına çıkan ürünlerle övünüyoruz.',
      en: 'We’re proud of what actually ships, not of half-finished prototypes.',
    },
  },
]

const timeline = [
  {
    year: '2024',
    title: { tr: 'Kuruluş', en: 'Founded' },
    description: {
      tr: 'Drective olarak ilk oyun prototiplerimizi geliştirmeye başladık.',
      en: 'We started building our first game prototypes as Drective.',
    },
  },
  {
    year: '2024',
    title: { tr: 'İlk uygulama', en: 'First app' },
    description: {
      tr: 'Yapay zekâ destekli çalışma uygulamamız Scanny’yi geliştirmeye başladık.',
      en: 'We started building Scanny, our AI-powered study app.',
    },
  },
  {
    year: '2025',
    title: { tr: 'Zaim Teknopark', en: 'Zaim Teknopark' },
    description: {
      tr: 'Zaim Teknopark’a kabul edildik ve ofisimizi oraya taşıdık.',
      en: 'We were accepted into Zaim Teknopark and moved our office there.',
    },
  },
  {
    year: '2025',
    title: { tr: 'ISU IDEA Club sponsorluğu', en: 'ISU IDEA Club sponsorship' },
    description: {
      tr: 'İstinye Üniversitesi IDEA Club’ın sponsoru olduk; tanıtım etkinliğinde öğrenciler oyunlarımızı oynadı.',
      en: 'We became a sponsor of İstinye University’s IDEA Club, and students played our games at their launch event.',
    },
  },
  {
    year: '2025',
    title: { tr: 'Web projeleri', en: 'Web projects' },
    description: {
      tr: 'CetLine, Miela, Caras Rent a Car, CetLis ve Cetrose’un web sitelerini yaptık.',
      en: 'We built websites for CetLine, Miela, Caras Rent a Car, CetLis and Cetrose.',
    },
  },
  {
    year: '2026',
    title: { tr: 'Connections ve Mahallenin Makası', en: 'Connections and Mahallenin Makası' },
    description: {
      tr: 'Connections Steam’de yayınlandı. İlk mobil oyunumuz Mahallenin Makası App Store’a çıktı ve ücretli oyunlarda ilk 50’ye girdi.',
      en: 'Connections launched on Steam. Our first mobile game, Mahallenin Makası, came out on the App Store and reached the Top 50 paid games.',
    },
  },
  {
    year: '2026',
    title: { tr: 'Sıradaki ürünler', en: 'What’s next' },
    description: {
      tr: 'CubeLune ve Wizardus oyunları ile US ve RALLI uygulamalarını hazırlıyoruz.',
      en: 'We’re preparing the games CubeLune and Wizardus, and the apps US and RALLI.',
    },
  },
]

const launchNews = {
  date: { tr: 'Ekim 2026', en: 'October 2026' },
  label: { tr: 'İlk mobil oyunumuz', en: 'Our first mobile game' },
  title: { tr: 'Mahallenin Makası App Store’da ilk 50’de', en: 'Mahallenin Makası enters the App Store Top 50' },
  paragraphs: {
    tr: [
      'İlk mobil oyunumuz Mahallenin Makası’nı yayınladık ve ilk güzel haberimiz geldi: oyun, Türkiye App Store’da en çok indirilen ücretli oyunlar arasında ilk 50’ye girdi.',
      'Türk mahalle kültüründen, berber sohbetlerinden ve gündelik hayatın kendine özgü mizahından ilham aldık. Bu proje bizim için yalnızca bir mobil oyun değil; oyun geliştirme, ürün yayınlama ve kendi markalarımızı oluşturma yolculuğumuzda önemli bir kilometre taşı.',
      'Henüz yolun başındayız. Önümüzde yeni oyunlar, hayata geçirmek istediğimiz fikirler ve çok daha büyük hedefler var. Bizi destekleyen ve oyunumuzu oynayan herkese teşekkür ederiz. Bu daha başlangıç.',
    ],
    en: [
      'We launched our first mobile game, Mahallenin Makası, and our first milestone is here: it reached the Top 50 most downloaded paid games on the Turkish App Store.',
      'It’s inspired by Turkish neighbourhood culture, barbershop conversations and the unique humour of everyday life. For us it’s more than a mobile game; it’s an important milestone in our journey of developing games, launching products and building our own brands.',
      'We’re still at the beginning. There are more games to make, ideas to bring to life and much bigger goals ahead. Thank you to everyone who supported us and played the game. This is just the beginning.',
    ],
  },
  play: { tr: 'App Store’da oyna', en: 'Play on the App Store' },
  images: [
    {
      src: '/images/news/mahallenin-makasi-app-store.png',
      alt: {
        tr: 'Mahallenin Makası App Store sayfası, Simülasyon kategorisinde 33. sırada',
        en: 'Mahallenin Makası App Store page, ranked #33 in Simulation',
      },
    },
    {
      src: '/images/news/mahallenin-makasi-top-50.png',
      alt: {
        tr: 'App Store en çok indirilen ücretli oyunlar listesinde 47. sırada Mahallenin Makası',
        en: 'Mahallenin Makası at #47 in the App Store top paid games chart',
      },
    },
  ],
}

const news = [
  {
    image: '/images/news/zaim-teknopark.jpg',
    alt: { tr: 'Drective ekibi Zaim Teknopark’ta', en: 'The Drective team at Zaim Teknopark' },
    date: { tr: 'Ağustos 2025', en: 'August 2025' },
    title: { tr: 'Zaim Teknopark’a kabul edildik', en: 'We joined Zaim Teknopark' },
    text: {
      tr: 'Girişimcilik yolculuğumuzda önemli bir adım. Bu süreçteki değerli destekleri için Sayın Özgür Özdemir’e teşekkür ederiz. Projelerimizi ileriye taşımak ve yeni iş birlikleri kurmak için hız kesmeden çalışıyoruz.',
      en: 'An important step in our entrepreneurial journey. We thank Mr. Özgür Özdemir for his valuable support throughout the process. We keep working to move our projects forward and build new partnerships.',
    },
  },
  {
    image: '/images/news/idea-club-stand.jpg',
    alt: { tr: 'ISU IDEA Club tanıtım etkinliğinde Drective standı', en: 'The Drective stand at the ISU IDEA Club launch event' },
    date: { tr: 'Ekim 2025', en: 'October 2025' },
    title: { tr: 'ISU IDEA Club’ın sponsoruyuz', en: 'We sponsor ISU IDEA Club' },
    text: {
      tr: 'Sponsoru olduğumuz IDEA Club’ın tanıtım etkinliğinde genç girişimcilerle bir araya geldik, Ferman ve diğer oyunlarımızı standımızda oynattık. Yeni dönemde başkan Efe Gürmarmara ve ekibine başarılar.',
      en: 'At the launch event of IDEA Club, which we sponsor, we met young entrepreneurs and let visitors play Ferman and our other games at our stand. Best of luck to president Efe Gürmarmara and his team this term.',
    },
  },
]

const technologies = [
  { name: 'Next.js', icon: <Code className="w-5 h-5" />, category: 'Frontend' },
  { name: 'React', icon: <Code className="w-5 h-5" />, category: 'Frontend' },
  { name: 'TypeScript', icon: <Code className="w-5 h-5" />, category: 'Language' },
  { name: 'Unity', icon: <Gamepad2 className="w-5 h-5" />, category: 'Game' },
  { name: 'Framer Motion', icon: <Palette className="w-5 h-5" />, category: 'Motion' },
  { name: 'Tailwind', icon: <Palette className="w-5 h-5" />, category: 'UI' },
  { name: 'Node.js', icon: <Zap className="w-5 h-5" />, category: 'Backend' },
  { name: 'PostgreSQL', icon: <Zap className="w-5 h-5" />, category: 'Data' },
]

const copy = {
  tr: {
    eyebrow: 'Hakkımızda',
    title: ['Küçük bir ekip,', 'kendi oyunlarımız.'],
    intro: 'İstanbul’da kurulan küçük bir oyun ve uygulama stüdyosuyuz. Kendi oyunlarımızı ve uygulamalarımızı yapıyor, markalar için de web siteleri hazırlıyoruz.',
    teamAlt: 'Drective ekibi',
    storyEyebrow: 'Hikâyemiz',
    storyTitle: 'Oyun yapmayı seven birkaç arkadaşla başladık.',
    story: [
      'Drective, oyun yapmayı seven birkaç arkadaşın kurduğu bir stüdyo olarak başladı. Bugün tasarımcılar, sanatçılar ve yazılımcılardan oluşan bir ekip olarak kendi oyunlarımızı ve mobil uygulamalarımızı geliştiriyoruz.',
      '2025’te Zaim Teknopark bünyesine kabul edildik. Aynı yıl ISU IDEA Club’ın sponsoru olduk ve genç girişimcilerle fikir alışverişinde bulunmanın ne kadar ilham verici olduğunu gördük. Aramıza katılan yeni arkadaşlarımızla büyümeye devam ediyoruz.',
      'Connections ile Steam’e çıktık, Mahallenin Makası ile mahalle kültürünü mobile taşıdık. CubeLune, Wizardus, US ve RALLI üzerinde çalışmaya devam ediyoruz.',
    ],
    stats: ['Yayındaki oyun', 'Yoldaki yeni ürün', 'Canlı web projesi', 'Kişilik ekip'],
    photoAlts: ['Drective ekibi IDEA Club standında', 'Drective ekibinden üç kişi oyun standında', 'Drective ekibi Zaim Teknopark’ta'],
    newsEyebrow: 'Haberler',
    newsTitle: 'Son gelişmeler',
    valuesEyebrow: 'Değerler',
    valuesTitle: 'Nasıl çalışıyoruz',
    timelineEyebrow: 'Yolculuk',
    timelineTitle: 'Kısa tarihçe',
    teamEyebrow: 'Ekip',
    teamTitle: 'Takımımız',
    teamText: 'Projeleri birlikte hayata geçiren çekirdek ekip.',
    stackTitle: 'Teknolojiler',
    ctaTitle: 'Birlikte üretelim',
    ctaText: 'Oyun, uygulama ya da web sitesi fikriniz için ekibimizle konuşun.',
    ctaPrimary: 'Bizimle Çalışın',
    ctaSecondary: 'Portföy',
  },
  en: {
    eyebrow: 'About',
    title: ['A small team,', 'our own games.'],
    intro: 'We’re a small game and app studio founded in Istanbul. We develop our own games and mobile apps and build websites for brands.',
    teamAlt: 'The Drective team',
    storyEyebrow: 'Our story',
    storyTitle: 'It started with a few friends who love making games.',
    story: [
      'Drective started as a studio founded by a few friends who love making games. Today we’re a team of designers, artists and developers building our own games and mobile apps.',
      'In 2025 we were accepted into Zaim Teknopark. The same year we became a sponsor of ISU IDEA Club and saw how inspiring it is to exchange ideas with young entrepreneurs. We keep growing with the new people joining us.',
      'We launched on Steam with Connections and brought neighbourhood culture to mobile with Mahallenin Makası. We’re now working on CubeLune, Wizardus, US and RALLI.',
    ],
    stats: ['Released games', 'Products on the way', 'Live websites', 'Team members'],
    photoAlts: ['The Drective team at the IDEA Club stand', 'Three Drective team members at the game stand', 'The Drective team at Zaim Teknopark'],
    newsEyebrow: 'News',
    newsTitle: 'Latest updates',
    valuesEyebrow: 'Values',
    valuesTitle: 'How we work',
    timelineEyebrow: 'Journey',
    timelineTitle: 'A short history',
    teamEyebrow: 'Team',
    teamTitle: 'Our team',
    teamText: 'The core team bringing our projects to life.',
    stackTitle: 'Technologies',
    ctaTitle: 'Let’s build together',
    ctaText: 'Talk to our team about your game, app or website idea.',
    ctaPrimary: 'Work With Us',
    ctaSecondary: 'Portfolio',
  },
}

export default function AboutPage() {
  const { locale, t } = useLocale()
  const c = copy[locale]
  const stats = ['2', String(upcomingGames.length + upcomingApps.length), '5', String(team.length)]

  return (
    <div>
      <PageHero eyebrow={c.eyebrow} title={c.title} intro={c.intro} />

      <div className="container-custom section-padding">
        <ScrollRevealImage src="/images/team.jpg" alt={c.teamAlt} priority className="aspect-[4/5] sm:aspect-[16/9]" />
      </div>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: easeSmooth }}
          >
            <p className="eyebrow mb-3">{c.storyEyebrow}</p>
            <h2 className="display-heading text-5xl lg:text-6xl">{c.storyTitle}</h2>
            {c.story.map((paragraph, i) => (
              <p key={i} className={`${i === 0 ? 'mt-5' : 'mt-4'} text-muted`}>{paragraph}</p>
            ))}

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {c.stats.map((label, i) => (
                <div key={label} className="border-l border-line pl-4">
                  <div className="font-display text-5xl leading-none text-brass">{stats[i]}</div>
                  <div className="mt-1 text-xs text-muted">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeSmooth, delay: 0.1 }}
            className="grid grid-cols-5 gap-3"
          >
            <div className="relative col-span-5 aspect-[4/3] overflow-hidden rounded-sm border border-line">
              <Image
                src="/images/news/idea-club-stand.jpg"
                alt={c.photoAlts[0]}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div className="relative col-span-3 aspect-[4/3] overflow-hidden rounded-sm border border-line">
              <Image
                src="/images/news/idea-club-ekip.jpg"
                alt={c.photoAlts[1]}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 60vw, 27vw"
              />
            </div>
            <div className="relative col-span-2 overflow-hidden rounded-sm border border-line">
              <Image
                src="/images/news/zaim-teknopark.jpg"
                alt={c.photoAlts[2]}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 40vw, 18vw"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      <Section id="haberler" className="scroll-mt-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={staggerItem} className="mb-10 max-w-2xl">
            <p className="eyebrow mb-3">{c.newsEyebrow}</p>
            <h2 className="display-heading text-5xl lg:text-7xl">{c.newsTitle}</h2>
          </motion.div>
          <motion.article
            variants={staggerItem}
            className="mb-6 grid overflow-hidden project-entry lg:grid-cols-[1.05fr_0.95fr]"
          >
            <div className="flex flex-col p-6 lg:p-10">
              <p className="m-0 text-xs uppercase tracking-[0.18em] text-brass">{t(launchNews.date)} · {t(launchNews.label)}</p>
              <h3 className="mt-3 font-heading text-2xl font-semibold lg:text-3xl">{t(launchNews.title)}</h3>
              {t(launchNews.paragraphs).map((paragraph) => (
                <p key={paragraph} className="mt-4 text-sm leading-relaxed text-muted">{paragraph}</p>
              ))}
              <a
                href={mahalleninMakasi.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link mt-8 self-start"
              >
                {t(launchNews.play)} <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
            <div className="flex items-center justify-center gap-4 bg-[#ded9cb] px-6 py-10 sm:gap-6">
              {launchNews.images.map((image, i) => (
                <div
                  key={image.src}
                  className={`relative aspect-[473/1024] w-[42%] max-w-[210px] overflow-hidden rounded-[1.1rem] shadow-xl ${i === 1 ? 'translate-y-5' : '-translate-y-3'}`}
                >
                  <Image src={image.src} alt={t(image.alt)} fill className="object-cover" sizes="(max-width: 1024px) 42vw, 210px" />
                </div>
              ))}
            </div>
          </motion.article>
          <div className="grid gap-6 md:grid-cols-2">
            {news.map((item) => (
              <motion.article
                key={item.image}
                variants={staggerItem}
                className="group overflow-hidden project-entry"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={t(item.alt)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <p className="m-0 text-xs uppercase tracking-[0.18em] text-brass">{t(item.date)}</p>
                  <h3 className="mt-2 font-heading text-xl font-semibold">{t(item.title)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{t(item.text)}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={staggerItem} className="mb-10 max-w-2xl">
            <p className="eyebrow mb-3">{c.valuesEyebrow}</p>
            <h2 className="display-heading text-5xl lg:text-7xl">{c.valuesTitle}</h2>
          </motion.div>
          <div className="grid gap-4 md:grid-cols-2">
            {values.map((value) => (
              <motion.div key={value.title.tr} variants={staggerItem} className="surface-panel p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-brass/30 bg-brass/10 text-brass">
                  {value.icon}
                </div>
                <h3 className="m-0 font-heading text-lg font-semibold">{t(value.title)}</h3>
                <p className="mt-2 text-sm text-muted">{t(value.description)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={staggerItem} className="mb-10">
            <p className="eyebrow mb-3">{c.timelineEyebrow}</p>
            <h2 className="display-heading text-5xl lg:text-7xl">{c.timelineTitle}</h2>
          </motion.div>
          <div className="space-y-4">
            {timeline.map((item) => (
              <motion.div
                key={item.title.tr + item.year}
                variants={staggerItem}
                className="grid gap-4 project-entry p-5 sm:grid-cols-[100px_1fr]"
              >
                <div className="font-display text-4xl leading-none text-brass">{item.year}</div>
                <div>
                  <h3 className="m-0 font-heading text-lg font-semibold">{t(item.title)}</h3>
                  <p className="mt-1 text-sm text-muted">{t(item.description)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={staggerItem} className="mb-10 max-w-2xl">
            <p className="eyebrow mb-3">{c.teamEyebrow}</p>
            <h2 className="display-heading text-5xl lg:text-7xl">{c.teamTitle}</h2>
            <p className="mt-3 text-muted">{c.teamText}</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={staggerItem}
                whileHover={{ y: -4, transition: { duration: 0.3, ease: easeSmooth } }}
                className="surface-panel p-5 text-center"
              >
                <div className="relative mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full border border-line">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="m-0 font-heading text-base font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm text-brass">{t(member.role)}</p>
                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-line px-2.5 py-1 text-[11px] text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={staggerItem} className="mb-10">
            <p className="eyebrow mb-3">Stack</p>
            <h2 className="display-heading text-5xl lg:text-7xl">{c.stackTitle}</h2>
          </motion.div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                variants={staggerItem}
                whileHover={{ y: -3, transition: { duration: 0.25, ease: easeSmooth } }}
                className="surface-panel px-3 py-4 text-center"
              >
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center text-brass">
                  {tech.icon}
                </div>
                <div className="text-sm font-medium text-foreground">{tech.name}</div>
                <div className="text-[11px] text-muted">{tech.category}</div>
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
