'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

type Props = {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export default function ScrollRevealImage({ src, alt, className = '', priority = false }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] })
  const inset = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0%', '0%'] : ['8%', '0%'])
  const clipPath = useTransform(inset, (v) => `inset(0 ${v} round 4px)`)
  const scale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1.18, 1])

  return (
    <motion.div ref={ref} style={{ clipPath }} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" priority={priority} />
      </motion.div>
    </motion.div>
  )
}
