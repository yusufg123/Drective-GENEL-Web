import Link from 'next/link'
import { ArrowUpRight, Mail } from 'lucide-react'
import Section from '@/components/Section'
import { LegalBlocks } from '@/components/LegalDocument'
import { appPrivacy, privacyEmail } from '@/lib/app-privacy'
import { storeProducts, type StoreProduct } from '@/lib/apps'
import { locales, type Locale } from '@/lib/i18n'

type AppPrivacyPolicyProps = {
  locale: Locale
  product?: StoreProduct
}

export const appPrivacyPath = (product?: StoreProduct) =>
  product ? `/apps/privacy/${product.slug}` : '/apps/privacy'

export default function AppPrivacyPolicy({ locale, product }: AppPrivacyPolicyProps) {
  const c = appPrivacy[locale]
  const path = appPrivacyPath(product)

  return (
    <>
      <Section className="pt-8 lg:pt-16">
        <div className="max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <p className="eyebrow m-0">{c.eyebrow}</p>
            <div className="lang-switch" aria-label={locale === 'tr' ? 'Dil seçimi' : 'Language'}>
              {locales.map((option) => (
                <Link
                  key={option}
                  href={`${path}?lang=${option}`}
                  hrefLang={option}
                  aria-current={option === locale ? 'true' : undefined}
                  aria-pressed={option === locale}
                  className="lang-switch-option text-center"
                >
                  {option.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

          <h1 className="font-heading text-4xl font-bold lg:text-6xl">
            {product ? c.appTitle(product.name) : c.title}
          </h1>
          <p className="mt-4 text-sm text-muted">{c.effective}</p>
          <p className="mt-6 text-lg text-muted">{product ? c.appIntro(product.name) : c.intro}</p>

          {product && (
            <div className="mt-6 flex flex-wrap gap-2">
              {[c.kind[product.kind], product.platforms[locale], c.status[product.status]].map((label) => (
                <span key={label} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                  {label}
                </span>
              ))}
            </div>
          )}

          {product?.policyHref && (
            <div className="mt-8 border-l-2 border-brass bg-surface px-5 py-4">
              <p className="m-0 text-sm text-foreground/80">{c.dedicatedPolicy(product.name)}</p>
              <Link href={product.policyHref} className="text-link mt-3 text-sm">
                {c.dedicatedPolicyLink} <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </Section>

      <Section className="!pt-0">
        <h2 className="eyebrow mb-5">{c.summaryTitle}</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {c.summary.map((item) => (
            <div key={item.title} className="surface-panel p-5">
              <h3 className="m-0 font-heading text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
          <nav aria-label={c.tocTitle} className="hidden lg:block">
            <div className="sticky top-28">
              <p className="eyebrow mb-4">{c.tocTitle}</p>
              <ol className="space-y-2 text-sm">
                {c.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="text-muted transition-colors hover:text-foreground">
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className="max-w-3xl space-y-12">
            {c.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="mb-4 font-heading text-xl font-semibold lg:text-2xl">{section.title}</h2>
                <LegalBlocks blocks={section.blocks} />
              </section>
            ))}
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="mb-8 max-w-2xl">
          <h2 className="font-heading text-2xl font-bold lg:text-3xl">{c.productsTitle}</h2>
          <p className="mt-3 text-muted">{c.productsText}</p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {storeProducts.map((item) => {
            const current = item.slug === product?.slug
            return (
              <li key={item.slug}>
                <Link
                  href={`${appPrivacyPath(item)}?lang=${locale}`}
                  aria-current={current ? 'page' : undefined}
                  aria-label={`${item.name} · ${c.viewPolicy}`}
                  className={`surface-panel flex items-center justify-between gap-4 p-5 transition-colors hover:border-brass/60 ${current ? '!border-brass' : ''}`}
                >
                  <span>
                    <span className="block font-heading text-base font-semibold text-foreground">{item.name}</span>
                    <span className="mt-1 block text-xs text-muted">
                      {c.kind[item.kind]} · {item.platforms[locale]} · {c.status[item.status]}
                    </span>
                  </span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 text-brass" />
                </Link>
              </li>
            )
          })}
        </ul>
        {product && (
          <Link href={`/apps/privacy?lang=${locale}`} className="text-link mt-8 text-sm">
            {c.allProducts} <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        )}
      </Section>

      <Section className="!pt-0">
        <div className="surface-panel flex flex-col items-start gap-6 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="m-0 font-heading text-2xl font-bold">{c.contactTitle}</h2>
            <p className="mt-2 text-muted">{c.contactText}</p>
          </div>
          <a
            href={`mailto:${privacyEmail}?subject=${encodeURIComponent(`Privacy${product ? ` · ${product.name}` : ''}`)}`}
            className="inline-flex items-center gap-2 rounded-full bg-brass px-5 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
          >
            <Mail aria-hidden="true" className="h-4 w-4" />
            {privacyEmail}
          </a>
        </div>
      </Section>
    </>
  )
}
