'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    step: '01',
    title: 'Discovery',
    subtitle: 'Week 1',
    description:
      'We dive deep into your business goals, technical requirements, and user needs. Stakeholder interviews, market research, and competitive analysis.',
    deliverables: ['Requirements doc', 'Tech stack recommendation', 'Project timeline', 'Risk assessment'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    color: 'from-violet-600 to-purple-700',
    glow: 'rgba(139,92,246,0.3)',
  },
  {
    step: '02',
    title: 'Planning',
    subtitle: 'Week 1-2',
    description:
      'Architecture design, database schema, API contracts, and UI wireframes. We align on every detail before writing a single line of code.',
    deliverables: ['System architecture', 'Database design', 'API documentation', 'UI wireframes'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    color: 'from-cyan-600 to-blue-700',
    glow: 'rgba(6,182,212,0.3)',
  },
  {
    step: '03',
    title: 'Development',
    subtitle: 'Week 2-8',
    description:
      'Agile 2-week sprints with daily standups and weekly demos. Clean code, code reviews, automated testing, and CI/CD from day one.',
    deliverables: ['Working features', 'Sprint demos', 'Test coverage', 'CI/CD pipeline'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: 'from-fuchsia-600 to-pink-700',
    glow: 'rgba(217,70,239,0.3)',
  },
  {
    step: '04',
    title: 'Launch',
    subtitle: 'Week 8-10',
    description:
      'Rigorous QA, performance testing, security audit, and staged deployment. We monitor every metric and ensure a smooth go-live.',
    deliverables: ['Production deployment', 'Performance report', 'Security audit', 'Monitoring setup'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    color: 'from-emerald-600 to-teal-700',
    glow: 'rgba(16,185,129,0.3)',
  },
  {
    step: '05',
    title: 'Support',
    subtitle: 'Ongoing',
    description:
      '30-day complimentary bug-fix period, followed by flexible maintenance retainers. We grow with you — feature additions, scaling, and continuous improvement.',
    deliverables: ['Bug fixes', 'Performance tuning', 'Feature additions', 'Monthly reports'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    color: 'from-amber-600 to-orange-700',
    glow: 'rgba(245,158,11,0.3)',
  },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="process" className="relative py-24 lg:py-36 bg-[#09090b] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-tag mx-auto mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Our Process
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight"
          >
            How We Go from{' '}
            <span className="text-gradient">Idea to Launch</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            A proven, battle-tested process refined across 150+ projects. No surprises, no delays — just consistent delivery.
          </motion.p>
        </div>

        {/* Steps — vertical on mobile, horizontal flow on desktop */}
        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[8%] right-[8%] h-px bg-gradient-to-r from-violet-600/30 via-fuchsia-500/30 to-amber-500/30" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step circle */}
                <div className="relative z-10 mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300`}
                    style={{ boxShadow: `0 0 30px ${step.glow}` }}
                  >
                    {step.icon}
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-zinc-900 border border-white/20 flex items-center justify-center text-[10px] font-bold text-zinc-400">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-1">{step.subtitle}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">{step.description}</p>

                  {/* Deliverables */}
                  <div className="space-y-1.5">
                    {step.deliverables.map((d, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 justify-center text-xs text-zinc-500"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`} />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow (between steps on mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden mt-6 text-zinc-700">
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl glass border border-white/[0.07]">
            <div className="text-left">
              <p className="text-white font-semibold">Ready to start your project?</p>
              <p className="text-zinc-500 text-sm">Book a free 30-min discovery call. No commitment required.</p>
            </div>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary whitespace-nowrap"
            >
              Book a Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
