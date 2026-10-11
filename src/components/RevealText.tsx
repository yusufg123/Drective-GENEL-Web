'use client'

import { motion } from 'framer-motion'
import { easeSmooth } from '@/lib/motion'

type Props = {
  lines: string[]
  as?: 'h1' | 'h2' | 'h3' | 'p'
  className?: string
  lineClassNames?: string[]
  delay?: number
  immediate?: boolean
}

export default function RevealText({ lines, as = 'h2', className = '', lineClassNames = [], delay = 0, immediate = false }: Props) {
  const Tag = motion[as]
  const trigger = immediate
    ? { initial: 'hidden', animate: 'visible' }
    : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, margin: '-12% 0px' } }

  let index = 0

  return (
    <Tag {...trigger} aria-label={lines.join(' ')} className={className}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} aria-hidden="true" className={`block ${lineClassNames[lineIndex] ?? ''}`}>
          {line.split(' ').map((word, wordIndex) => {
            const order = index++
            return (
              <span key={wordIndex} className="reveal-word">
                <motion.span
                  className="inline-block"
                  variants={{
                    hidden: { y: '110%', rotate: 4 },
                    visible: {
                      y: '0%',
                      rotate: 0,
                      transition: { duration: 1.1, ease: easeSmooth, delay: delay + order * 0.06 },
                    },
                  }}
                >
                  {word}
                </motion.span>
                {wordIndex < line.split(' ').length - 1 && '\u00a0'}
              </span>
            )
          })}
        </span>
      ))}
    </Tag>
  )
}
