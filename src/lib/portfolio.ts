import type { Localized } from './i18n'

export type PortfolioItem = {
  title: string
  description: Localized
  image?: string
  url?: string
  category: 'web' | 'game' | 'app'
  tags: Localized<string[]>
}

export const mahalleninMakasi = {
  title: 'Mahallenin Makası',
  tagline: {
    tr: 'Neşeli bir mahalle berberi işletme oyunu',
    en: 'A cheerful neighbourhood barbershop tycoon game',
  } satisfies Localized,
  description: {
    tr: 'Mahallede küçük bir berber dükkânı devralıyorsun. Saç kesiyor, sakal tıraşı yapıyor, müşterilerin derdini dinliyor ve kazandığınla dükkânı adım adım büyütüyorsun. Taksici Niyazi’den mahallenin kedisine kadar herkes bir hikâye taşıyor.',
    en: 'You take over a small barbershop in the neighbourhood. Cut hair, shave beards, listen to your customers’ troubles and grow the shop step by step with what you earn. From Niyazi the taxi driver to the neighbourhood cat, everyone has a story.',
  } satisfies Localized,
  icon: '/images/mahallenin-makasi/icon.jpg',
  screens: [
    { src: '/images/mahallenin-makasi/customer.jpg', alt: { tr: 'Dükkâna gelen müşteri: Taksici Niyazi', en: 'A customer at the shop: Niyazi the taxi driver' } },
    { src: '/images/mahallenin-makasi/shave.jpg', alt: { tr: 'Sakal tıraşı mini oyunu', en: 'Beard shaving mini-game' } },
    { src: '/images/mahallenin-makasi/minigame.png', alt: { tr: 'Zamanlama mini oyunu', en: 'Timing mini-game' } },
    { src: '/images/mahallenin-makasi/menu.jpg', alt: { tr: 'Mahallenin Makası ana menü', en: 'Mahallenin Makası main menu' } },
    { src: '/images/mahallenin-makasi/upgrade.png', alt: { tr: 'Dükkânı geliştirme ekranı', en: 'Shop upgrade screen' } },
    { src: '/images/mahallenin-makasi/decor.png', alt: { tr: 'Dükkân dekorasyonu', en: 'Shop decoration' } },
  ],
  features: [
    {
      title: { tr: 'Tıraş ve kesim', en: 'Shaves and cuts' },
      text: {
        tr: 'Usturayı kaydır, makası doğru zamanda kullan. Her müşteri farklı bir dokunuş ister.',
        en: 'Slide the razor and time your scissors right. Every customer wants a different touch.',
      },
    },
    {
      title: { tr: 'Mahalle sakinleri', en: 'Neighbourhood regulars' },
      text: {
        tr: 'Her gün yeni yüzler, yeni sohbetler. Müşterinin sabrını ve gönlünü kazan.',
        en: 'New faces and new conversations every day. Win over your customers before their patience runs out.',
      },
    },
    {
      title: { tr: 'Dükkânını kur', en: 'Build your shop' },
      text: {
        tr: 'Koltuktan aynaya, tabeladan takım flamasına kadar dükkânı kendi zevkine göre geliştir.',
        en: 'From chairs and mirrors to the sign and your team’s flag, upgrade the shop your way.',
      },
    },
  ],
  platforms: ['iOS'],
  appStoreUrl: 'https://apps.apple.com/tr/app/mahallenin-makas%C4%B1/id6818242226?l=tr',
}

export const games: PortfolioItem[] = [
  {
    title: 'Connections',
    description: {
      tr: 'Tedarikçileri, fabrikaları ve pazarları boru hatlarıyla bağladığın endüstriyel bir bulmaca oyunu. 200’den fazla el yapımı bölüm, Steam’de yayında.',
      en: 'An industrial puzzle game where you connect suppliers, factories and markets with pipelines. Over 200 handcrafted levels, out now on Steam.',
    },
    url: 'https://store.steampowered.com/app/4824950/Connections/',
    category: 'game',
    tags: { tr: ['Steam', 'PC', 'Bulmaca'], en: ['Steam', 'PC', 'Puzzle'] },
  },
]

export const apps: PortfolioItem[] = [
  {
    title: 'Scanny',
    description: {
      tr: 'Ders notlarını tarayıp özetleyen ve bu özetlerden kişisel quizler hazırlayan yapay zekâ destekli çalışma uygulaması.',
      en: 'An AI-powered study app that scans and summarises lecture notes, then turns the summaries into personal quizzes.',
    },
    image: '/images/Scanny1.jpg',
    category: 'app',
    tags: { tr: ['iOS', 'OCR', 'Eğitim'], en: ['iOS', 'OCR', 'Education'] },
  },
]

export const webPortfolio: (PortfolioItem & { image: string })[] = [
  {
    title: 'CetLine',
    description: {
      tr: 'Patent ve teknoloji ticarileştirme süreçleri için kurumsal platform.',
      en: 'A corporate platform for patent and technology commercialisation.',
    },
    image: '/images/portfolio/cetline.jpg',
    url: 'https://cetline.com',
    category: 'web',
    tags: { tr: ['Platform', 'Kurumsal'], en: ['Platform', 'Corporate'] },
  },
  {
    title: 'Miela',
    description: {
      tr: 'Moda markası için koleksiyon odaklı e-ticaret sitesi.',
      en: 'A collection-focused online store for a fashion brand.',
    },
    image: '/images/portfolio/miela.jpg',
    url: 'https://mielea.com.tr',
    category: 'web',
    tags: { tr: ['E-ticaret', 'Moda'], en: ['E-commerce', 'Fashion'] },
  },
  {
    title: 'Caras Rent a Car',
    description: {
      tr: 'İstanbul’da araç kiralama için rezervasyon odaklı web sitesi.',
      en: 'A booking-focused website for car rental in Istanbul.',
    },
    image: '/images/portfolio/caras.jpg',
    url: 'https://carasrentacar.com',
    category: 'web',
    tags: { tr: ['Rezervasyon', 'Hizmet'], en: ['Booking', 'Services'] },
  },
  {
    title: 'CetLis',
    description: {
      tr: 'Fikri mülkiyet ve ticarileştirme danışmanlığı için kurumsal site.',
      en: 'A corporate website for intellectual property and commercialisation consulting.',
    },
    image: '/images/portfolio/cetlis.jpg',
    url: 'https://cetlis.com',
    category: 'web',
    tags: { tr: ['Danışmanlık', 'Kurumsal'], en: ['Consulting', 'Corporate'] },
  },
  {
    title: 'Cetrose',
    description: {
      tr: 'Üniversite destekli Ar-Ge kozmetik markası için e-ticaret sitesi.',
      en: 'An online store for a university-backed R&D cosmetics brand.',
    },
    image: '/images/portfolio/cetrose.jpg',
    url: 'https://cetrose.com',
    category: 'web',
    tags: { tr: ['E-ticaret', 'Kozmetik'], en: ['E-commerce', 'Cosmetics'] },
  },
]

export type ProjectScreen = {
  src: string
  alt: Localized
  label: Localized
}

export type UpcomingProject = {
  id: string
  title: string
  description: Localized
  category: 'game' | 'app'
  tags: Localized<string[]>
  previewBackground: string
  screens: ProjectScreen[]
}

export const upcomingGames: UpcomingProject[] = [
  {
    id: 'cubelune',
    title: 'CubeLune',
    description: {
      tr: 'Renkli blokları yerleştir, satır ve sütunları temizle. Bölümlerde hedefleri tamamla ya da sonsuz modda kendi skorunu geç.',
      en: 'Place colourful blocks and clear rows and columns. Complete level goals, or beat your own score in endless mode.',
    },
    category: 'game',
    tags: { tr: ['Mobil', 'Blok bulmaca'], en: ['Mobile', 'Block puzzle'] },
    previewBackground: '#251750',
    screens: [
      {
        src: '/images/upcoming/cubelune/menu.png',
        alt: { tr: 'CubeLune ana menüsünde Journey ve Endless oyun modları', en: 'CubeLune main menu with Journey and Endless modes' },
        label: { tr: 'Oyun modları', en: 'Game modes' },
      },
      {
        src: '/images/upcoming/cubelune/level-15.png',
        alt: { tr: 'CubeLune 15. bölümde renkli bloklar ve engeller', en: 'Colourful blocks and obstacles in CubeLune level 15' },
        label: { tr: 'Bölüm hedefleri', en: 'Level goals' },
      },
      {
        src: '/images/upcoming/cubelune/moon-combo.png',
        alt: { tr: 'CubeLune ay toplama hedefi ve iki kat kombo', en: 'CubeLune moon collecting goal and a x2 combo' },
        label: { tr: 'Ayları topla', en: 'Collect the moons' },
      },
      {
        src: '/images/upcoming/cubelune/combo.png',
        alt: { tr: 'CubeLune üç kat kombo ve puan animasyonu', en: 'CubeLune x3 combo and score animation' },
        label: { tr: 'Kombo zinciri', en: 'Combo chains' },
      },
    ],
  },
  {
    id: 'wizardus',
    title: 'Wizardus',
    description: {
      tr: 'Piksel bir ormanda büyücünü yönet, düşmanlardan kaç ve büyülerini kullan. Her karşılaşmada biraz daha uzun süre hayatta kal.',
      en: 'Guide your wizard through a pixel forest, dodge enemies and cast your spells. Survive a little longer every run.',
    },
    category: 'game',
    tags: { tr: ['Mobil', 'Pixel Art', 'Hayatta kalma'], en: ['Mobile', 'Pixel Art', 'Survival'] },
    previewBackground: '#263c2e',
    screens: [
      {
        src: '/images/upcoming/wizardus/menu.png',
        alt: { tr: 'Wizardus ana menüsü ve piksel oyun logosu', en: 'Wizardus main menu and pixel logo' },
        label: { tr: 'Ana menü', en: 'Main menu' },
      },
      {
        src: '/images/upcoming/wizardus/gameplay.png',
        alt: { tr: 'Wizardus ormanında büyücü, düşmanlar ve dokunmatik kontroller', en: 'The wizard, enemies and touch controls in the Wizardus forest' },
        label: { tr: 'Ormanda hayatta kal', en: 'Survive the forest' },
      },
    ],
  },
]

export const upcomingApps: UpcomingProject[] = [
  {
    id: 'us',
    title: 'US',
    description: {
      tr: 'Planlarını ve notlarını yazarak, konuşarak veya fotoğrafla ekle. US ile gününü hatırla, haftanı gözden geçir ve aklındakileri toparla.',
      en: 'Add plans and notes by typing, talking or snapping a photo. US helps you remember your day, review your week and gather your thoughts.',
    },
    category: 'app',
    tags: { tr: ['Planlama', 'Notlar', 'AI asistan'], en: ['Planning', 'Notes', 'AI assistant'] },
    previewBackground: '#e5dfed',
    screens: [
      {
        src: '/images/upcoming/us/today.png',
        alt: { tr: 'US bugün ekranında planlar, hızlı ekleme ve hafıza', en: 'US Today screen with plans, quick add and memory' },
        label: { tr: 'Günün bir arada', en: 'Your day at a glance' },
      },
      {
        src: '/images/upcoming/us/voice.png',
        alt: { tr: 'US sesle not ekleme ekranı ve dinleyen asistan', en: 'US voice note screen with the listening assistant' },
        label: { tr: 'Konuşarak ekle', en: 'Add by voice' },
      },
      {
        src: '/images/upcoming/us/note.png',
        alt: { tr: 'US not düzenleme ekranında kategori, önem ve tarih seçimi', en: 'US note editor with category, priority and date' },
        label: { tr: 'Notlarını düzenle', en: 'Edit your notes' },
      },
    ],
  },
  {
    id: 'ralli',
    title: 'RALLI',
    description: {
      tr: 'Seviyene ve zamanına uygun padel oyuncuları bul. Maçları keşfet, oyuncu arayan ekiplere katıl ve kortta tanıştığın insanlarla iletişimde kal.',
      en: 'Find padel players who match your level and schedule. Discover matches, join teams looking for players and stay in touch with people you meet on court.',
    },
    category: 'app',
    tags: { tr: ['Padel', 'Topluluk', 'Spor'], en: ['Padel', 'Community', 'Sports'] },
    previewBackground: '#dce5d5',
    screens: [
      {
        src: '/images/upcoming/ralli/matches.png',
        alt: { tr: 'RALLI maç keşfi ekranında İstanbul ilçeleri ve oyuncu filtreleri', en: 'RALLI match discovery with Istanbul districts and player filters' },
        label: { tr: 'Bir sonraki maçın', en: 'Your next match' },
      },
      {
        src: '/images/upcoming/ralli/community.png',
        alt: { tr: 'RALLI topluluk ekranında Sarıyer padel grubu', en: 'RALLI community screen with a Sarıyer padel group' },
        label: { tr: 'Oyun ekibini bul', en: 'Find your crew' },
      },
    ],
  },
]
