'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  {
    value: 150,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Across 12 countries',
    icon: '🚀',
    color: 'from-violet-600 to-purple-700',
    glow: 'rgba(139,92,246,0.3)',
  },
  {
    value: 100,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Startups to enterprises',
    icon: '❤️',
    color: 'from-fuchsia-600 to-pink-700',
    glow: 'rgba(217,70,239,0.3)',
  },
  {
    value: 6,
    suffix: '+',
    label: 'Years of Experience',
    description: 'In IT consulting & dev',
    icon: '⭐',
    color: 'from-amber-600 to-orange-700',
    glow: 'rgba(245,158,11,0.3)',
  },
  {
    value: 40,
    suffix: '+',
    label: 'Technologies',
    description: 'Modern stack mastery',
    icon: '⚡',
    color: 'from-cyan-600 to-blue-700',
    glow: 'rgba(6,182,212,0.3)',
  },
]

function Counter({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a10] via-[#0d0b1a] to-[#09090b]" />
      <div className="absolute inset-0 bg-dots opacity-30" />

      {/* Center glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-violet-900/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-tag mx-auto mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            By The Numbers
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight"
          >
            Proven at{' '}
            <span className="text-gradient">Scale</span>
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl p-6 lg:p-8 glass border border-white/[0.07] text-center hover:border-white/[0.15] transition-all duration-500 cursor-default overflow-hidden"
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 20px 40px -10px ${stat.glow}`
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = ''
                e.currentTarget.style.transform = ''
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${stat.glow}, transparent 70%)` }}
              />

              {/* Icon */}
              <div className="text-3xl mb-4">{stat.icon}</div>

              {/* Counter */}
              <div className={`text-5xl lg:text-6xl font-black mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              <div className="text-base font-bold text-white mb-1">{stat.label}</div>
              <div className="text-xs text-zinc-500 font-medium">{stat.description}</div>

              {/* Bottom gradient line */}
              <div className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* Urgency banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            ⚡ Limited onboarding slots available this month — only 3 spots left
          </div>
        </motion.div>
      </div>
    </section>
  )
}
