'use client'

import * as m from 'motion/react-m'

/**
 * A hairline that draws itself as it enters the viewport. Used as the rule
 * under each chapter label, so the page reveals its structure while you read
 * rather than announcing everything at once.
 */
export function ScrollLine({ className }: { className?: string }) {
  return (
    <m.span
      aria-hidden="true"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: 'left' }}
      className={className}
    />
  )
}
