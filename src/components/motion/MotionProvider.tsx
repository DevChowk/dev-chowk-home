'use client'

import { domAnimation, LazyMotion, MotionConfig } from 'motion/react'

/**
 * Mounted once in the site layout.
 *
 * `LazyMotion` + `domAnimation` ships the small feature bundle instead of the
 * full `motion` component, and `strict` *throws* if anyone imports `motion.*`
 * rather than `motion/react-m` — so the bundle rule is enforced by the build,
 * not by code review.
 *
 * `reducedMotion="user"` is layer 1 of 3: it neutralises every motion-driven
 * animation when the OS asks. Layer 2 is the CSS block in globals.css, layer 3
 * is useReducedMotionSafe for imperative code.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}
