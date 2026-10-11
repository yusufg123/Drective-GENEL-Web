import Section from '@/components/Section'

export type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'ul' | 'ol'; items: string[] }
  | { type: 'fields'; items: [label: string, value: string][] }

export type LegalSection = {
  title: string
  blocks: LegalBlock[]
}

type LegalDocumentProps = {
  title: string
  updated: string
  sections: LegalSection[]
}

export default function LegalDocument({ title, updated, sections }: LegalDocumentProps) {
  return (
    <Section className="pt-8 lg:pt-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-heading text-4xl font-bold lg:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-muted">{updated}</p>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-4 font-heading text-xl font-semibold lg:text-2xl">{section.title}</h2>
              <LegalBlocks blocks={section.blocks} />
            </section>
          ))}
        </div>
      </div>
    </Section>
  )
}

export function LegalBlocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <div className="space-y-4 leading-relaxed text-muted">
      {blocks.map((block, i) => {
        if (block.type === 'p') return <p key={i}>{block.text}</p>
        if (block.type === 'fields') {
          return (
            <dl key={i} className="space-y-1">
              {block.items.map(([label, value]) => (
                <div key={label}>
                  <dt className="inline font-semibold text-foreground">{label}: </dt>
                  <dd className="inline">{value}</dd>
                </div>
              ))}
            </dl>
          )
        }
        const List = block.type
        return (
          <List key={i} className={`${block.type === 'ul' ? 'list-disc' : 'list-decimal'} space-y-2 pl-6`}>
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </List>
        )
      })}
    </div>
  )
}
