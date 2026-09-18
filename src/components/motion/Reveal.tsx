'use client'

import * as m from 'motion/react-m'

type RevealProps = {
  children: React.ReactNode
  /** Seconds. Use to stagger siblings. */
  delay?: number
  /** Travel distance in px. 0 gives a pure fade. */
  y?: number
  className?: string
  as?: 'div' | 'li' | 'section'
}

/**
 * Scroll-triggered entrance.
 *
 * The important part is that `children` arrives already rendered by the
 * server: a client component receiving RSC children renders them straight
 * from the server payload, so the content never enters the client bundle —
 * only this ~1KB wrapper does. That is what keeps the pages RSC while
 * everything on them animates.
 */
export function Reveal({ children, delay = 0, y = 24, className, as = 'div' }: RevealProps) {
  const Tag = as === 'li' ? m.li : as === 'section' ? m.section : m.div

  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Tag>
  )
}
