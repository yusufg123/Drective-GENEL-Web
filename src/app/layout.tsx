import type { Metadata, Viewport } from 'next'
import { Instrument_Serif } from 'next/font/google'
import '../styles/globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import FloatingCta from '@/components/FloatingCta'
import { LanguageProvider } from '@/components/LanguageProvider'
import { site } from '@/lib/site'
import { ogLocale } from '@/lib/i18n'
import { getLocale } from '@/lib/i18n-server'

const displayFont = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-display',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#141414',
  width: 'device-width',
  initialScale: 1,
}

export function generateMetadata(): Metadata {
  const locale = getLocale()
  const title = site.title[locale]
  const description = site.description[locale]

  return {
    metadataBase: new URL(site.url),
    title: {
      default: title,
      template: `%s | ${site.name}`,
    },
    description,
    keywords: site.keywords,
    applicationName: site.name,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    publisher: site.name,
    alternates: { canonical: '/' },
    formatDetection: { email: false, address: false, telephone: false },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    openGraph: {
      type: 'website',
      locale: ogLocale[locale],
      alternateLocale: ogLocale[locale === 'tr' ? 'en' : 'tr'],
      url: site.url,
      siteName: site.name,
      title,
      description,
      images: [
        {
          url: '/images/mahallenin-makasi/menu.jpg',
          width: 473,
          height: 1024,
          alt: 'Mahallenin Makası — Drective',
        },
        {
          url: '/images/team.jpg',
          width: 980,
          height: 1024,
          alt: locale === 'tr' ? 'Drective ekibi' : 'The Drective team',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/team.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = getLocale()

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/Logo.png`,
    email: site.email,
    description: site.description[locale],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Halkalı Merkez Mah. Halkalı Cad. No:281/23',
      addressLocality: 'Küçükçekmece',
      addressRegion: 'İstanbul',
      postalCode: '34303',
      addressCountry: 'TR',
    },
    sameAs: Object.values(site.social),
  }

  return (
    <html lang={locale} className={displayFont.variable}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <LanguageProvider initialLocale={locale}>
          <SmoothScroll />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
          />
          <div className="relative flex min-h-screen flex-col">
            <NavBar />
            <a href="#main-content" className="skip-link">{locale === 'tr' ? 'İçeriğe geç' : 'Skip to content'}</a>
            <main id="main-content" className="flex-1 pt-16 lg:pt-20">{children}</main>
            <Footer />
          </div>
          <FloatingCta />
        </LanguageProvider>
      </body>
    </html>
  )
}
