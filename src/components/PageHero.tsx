'use client'

import { motion } from 'framer-motion'
import RevealText from './RevealText'
import { easeSmooth } from '@/lib/motion'

type Props = {
  eyebrow: string
  title: string[]
  intro: string
  children?: React.ReactNode
}

export default function PageHero({ eyebrow, title, intro, children }: Props) {
  return (
    <section className="container-custom section-padding pb-12 pt-14 sm:pb-16 lg:pb-24 lg:pt-24">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeSmooth }}
        className="eyebrow mb-6"
      >
        {eyebrow}
      </motion.p>
      <RevealText
        as="h1"
        immediate
        delay={0.1}
        lines={title}
        className="display-heading text-[3.4rem] sm:text-8xl lg:text-[8.5rem]"
      />
      <div className="mt-10 grid gap-8 border-t border-line pt-8 lg:mt-14 lg:grid-cols-2">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: easeSmooth }}
          className="m-0 max-w-xl text-lg leading-relaxed text-muted lg:col-start-2"
        >
          {intro}
        </motion.p>
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: easeSmooth }}
            className="lg:col-start-2"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}
