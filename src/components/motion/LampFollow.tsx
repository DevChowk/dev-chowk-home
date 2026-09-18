'use client'

import { useMotionTemplate, useMotionValue, useSpring } from 'motion/react'
import * as m from 'motion/react-m'
import { useEffect, useRef } from 'react'
import { useReducedMotionSafe } from './useReducedMotionSafe'

const SPRING = { stiffness: 140, damping: 26, mass: 0.6 }

/**
 * A lamp carried across the square.
 *
 * `children` is the lit copy of the ornament, rendered on the server and
 * revealed through a radial mask that follows the pointer — so the lattice
 * brightens where the light falls rather than a blob floating over the page.
 * The spring makes the light lag slightly, which is what sells it as a
 * physical object instead of a cursor attachment.
 *
 * Renders nothing at all when the device has no hover, or when motion is
 * reduced. Only the mask position animates, so there is no layout work.
 */
export function LampFollow({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotionSafe()

  const x = useMotionValue(-9999)
  const y = useMotionValue(-9999)
  const lit = useMotionValue(0)

  const sx = useSpring(x, SPRING)
  const sy = useSpring(y, SPRING)
  const sLit = useSpring(lit, { stiffness: 90, damping: 22 })

  const mask = useMotionTemplate`radial-gradient(240px circle at ${sx}px ${sy}px, #000 0%, rgba(0,0,0,0.6) 45%, transparent 72%)`
  const glow = useMotionTemplate`radial-gradient(320px circle at ${sx}px ${sy}px, color-mix(in oklab, var(--brass) 22%, transparent) 0%, transparent 70%)`

  useEffect(() => {
    if (reduced) return
    if (!window.matchMedia('(any-hover: hover) and (any-pointer: fine)').matches) return

    const el = ref.current
    if (!el) return

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      x.set(event.clientX - rect.left)
      y.set(event.clientY - rect.top)

      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
      lit.set(inside ? 1 : 0)
    }

    const onLeave = () => lit.set(0)

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [reduced, x, y, lit])

  if (reduced) return null

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden md:block"
    >
      {/* the warm pool of light itself */}
      <m.div className="absolute inset-0" style={{ background: glow, opacity: sLit }} />
      {/* the lattice, lit only where the lamp falls */}
      <m.div
        className="absolute inset-0"
        style={{
          opacity: sLit,
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
      >
        {children}
      </m.div>
    </div>
  )
}
