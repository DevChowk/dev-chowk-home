'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Lightning Fast Delivery',
    description:
      'We ship in 2-week sprints. No endless planning phases. Your MVP is live in weeks, not months. Speed is our competitive advantage.',
    color: 'from-violet-600 to-purple-700',
    glow: 'rgba(139,92,246,0.25)',
    stat: '2 weeks',
    statLabel: 'to first delivery',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Scalable Architecture',
    description:
      'Built to handle 10x growth from day one. We design systems that scale gracefully — no painful rewrites as your user base grows.',
    color: 'from-cyan-600 to-blue-700',
    glow: 'rgba(6,182,212,0.25)',
    stat: '10×',
    statLabel: 'growth-ready infra',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Startup-Friendly Pricing',
    description:
      'Transparent, milestone-based pricing with no hidden fees. We offer flexible engagement models — fixed scope, retainers, or equity deals.',
    color: 'from-emerald-600 to-teal-700',
    glow: 'rgba(16,185,129,0.25)',
    stat: '0',
    statLabel: 'hidden fees',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Dedicated Team',
    description:
      'A consistent team that knows your codebase inside out. No freelancer roulette. Senior developers, designers, and a PM assigned to you.',
    color: 'from-fuchsia-600 to-pink-700',
    glow: 'rgba(217,70,239,0.25)',
    stat: '1',
    statLabel: 'dedicated team',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Innovation First',
    description:
      'We stay ahead of the curve — AI integrations, edge computing, new frameworks. Your product benefits from the latest tech without the learning curve.',
    color: 'from-amber-600 to-orange-700',
    glow: 'rgba(245,158,11,0.25)',
    stat: 'Latest',
    statLabel: 'tech always',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: '24/7 Post-Launch Support',
    description:
      'We don\'t vanish after launch. 30-day complimentary support, monitoring, and bug fixes. Long-term maintenance plans available.',
    color: 'from-blue-600 to-indigo-700',
    glow: 'rgba(99,102,241,0.25)',
    stat: '24/7',
    statLabel: 'support SLA',
  },
]

export default function WhyDevChowk() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="why-us" className="relative py-24 lg:py-36 bg-[#09090b] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-tag mx-auto mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            Why Dev Chowk
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight"
          >
            Not Just Another{' '}
            <span className="text-gradient">Dev Shop</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            We combine the speed of a startup with the reliability of an enterprise partner. Here's what makes the difference.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl p-6 glass border border-white/[0.07] hover:border-white/[0.12] transition-all duration-500 cursor-default overflow-hidden"
              style={{
                '--glow-color': reason.glow,
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 20px 40px -10px ${reason.glow}`
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = ''
                e.currentTarget.style.transform = ''
              }}
            >
              {/* Hover bg glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at 20% 20%, ${reason.glow}, transparent 60%)` }}
              />

              {/* Stat badge top right */}
              <div className="absolute top-5 right-5 text-right">
                <div className={`text-lg font-black text-gradient`}>{reason.stat}</div>
                <div className="text-[10px] text-zinc-600 font-medium">{reason.statLabel}</div>
              </div>

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${reason.color} mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">{reason.icon}</div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 relative">{reason.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed relative">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom row: trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {[
            { icon: '🔐', label: 'NDA Protected' },
            { icon: '📋', label: 'ISO Best Practices' },
            { icon: '🌍', label: 'Global Remote Team' },
            { icon: '⚡', label: '< 4hr Response Time' },
            { icon: '🏆', label: 'Award-winning Design' },
            { icon: '♻️', label: 'Agile Methodology' },
          ].map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full glass border border-white/[0.07] text-sm font-medium text-zinc-400 hover:text-zinc-200 hover:border-violet-500/30 transition-all cursor-default"
            >
              <span className="text-base">{badge.icon}</span>
              {badge.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
