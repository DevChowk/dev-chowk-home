'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

type Category = 'All' | 'Web' | 'Mobile' | 'SaaS' | 'AI'

const projects = [
  {
    title: 'FinFlow — Banking Dashboard',
    category: 'SaaS' as Category,
    tags: ['Next.js', 'PostgreSQL', 'Stripe', 'TypeScript'],
    problem: 'Manual reconciliation costing 40hrs/week',
    solution: 'Automated real-time financial dashboard with ML anomaly detection',
    result: '+340% ops efficiency, $2M transactions processed daily',
    metric: '+340%',
    metricLabel: 'Efficiency',
    color: 'from-violet-900/40 to-purple-900/20',
    accentColor: 'bg-violet-500',
    gradient: 'from-violet-600 to-purple-600',
    icon: '💳',
  },
  {
    title: 'ShopSprint — E-commerce Platform',
    category: 'Web' as Category,
    tags: ['Next.js', 'Shopify API', 'Redis', 'CDN'],
    problem: 'Slow load times causing 65% cart abandonment',
    solution: 'Edge-optimized storefront with sub-second page loads',
    result: '200% conversion increase, Core Web Vitals 98/100',
    metric: '+200%',
    metricLabel: 'Conversions',
    color: 'from-cyan-900/40 to-blue-900/20',
    accentColor: 'bg-cyan-500',
    gradient: 'from-cyan-600 to-blue-600',
    icon: '🛍️',
  },
  {
    title: 'MedTrack — Healthcare App',
    category: 'Mobile' as Category,
    tags: ['Flutter', 'Firebase', 'HIPAA', 'ML Kit'],
    problem: 'Patients missing medication schedules',
    solution: 'AI-powered medication tracker with smart reminders and health insights',
    result: '87% medication adherence, 50K active users',
    metric: '87%',
    metricLabel: 'Adherence',
    color: 'from-emerald-900/40 to-teal-900/20',
    accentColor: 'bg-emerald-500',
    gradient: 'from-emerald-600 to-teal-600',
    icon: '🏥',
  },
  {
    title: 'Clarito — AI Legal Assistant',
    category: 'AI' as Category,
    tags: ['Python', 'LangChain', 'GPT-4', 'RAG'],
    problem: 'Law firms spending 15hrs/week on document review',
    solution: 'RAG-based AI that reviews and summarizes legal documents instantly',
    result: '95% time saved, 99.2% accuracy, 3 law firms onboarded',
    metric: '95%',
    metricLabel: 'Time Saved',
    color: 'from-amber-900/40 to-orange-900/20',
    accentColor: 'bg-amber-500',
    gradient: 'from-amber-600 to-orange-600',
    icon: '⚖️',
  },
  {
    title: 'LaunchPad CRM — Sales SaaS',
    category: 'SaaS' as Category,
    tags: ['React', 'Node.js', 'MongoDB', 'WebSockets'],
    problem: 'Sales team using 5 disconnected tools',
    solution: 'Unified CRM with real-time pipeline, email sync, and AI scoring',
    result: '3x pipeline velocity, $1.2M ARR for the client',
    metric: '3×',
    metricLabel: 'Pipeline Velocity',
    color: 'from-fuchsia-900/40 to-pink-900/20',
    accentColor: 'bg-fuchsia-500',
    gradient: 'from-fuchsia-600 to-pink-600',
    icon: '📈',
  },
  {
    title: 'RideZen — Ride-hailing App',
    category: 'Mobile' as Category,
    tags: ['React Native', 'Node.js', 'Google Maps', 'Stripe'],
    problem: 'Existing app had 4.2★ rating, poor UX',
    solution: 'Full redesign and rebuild with real-time tracking and surge pricing',
    result: 'App Store 4.9★, 30% increase in daily rides',
    metric: '4.9★',
    metricLabel: 'App Store Rating',
    color: 'from-blue-900/40 to-indigo-900/20',
    accentColor: 'bg-blue-500',
    gradient: 'from-blue-600 to-indigo-600',
    icon: '🚗',
  },
]

const categories: Category[] = ['All', 'Web', 'Mobile', 'SaaS', 'AI']

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Category>('All')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="portfolio" className="relative py-24 lg:py-36 bg-[#0a0a10]">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-tag mx-auto mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Case Studies
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight"
          >
            Work That{' '}
            <span className="text-gradient">Speaks for Itself</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg max-w-xl mx-auto mb-10"
          >
            Real projects. Real results. Each built with precision and purpose.
          </motion.p>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 p-1.5 rounded-2xl glass border border-white/[0.08]"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-5 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                  activeFilter === cat ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {activeFilter === cat && (
                  <motion.div
                    layoutId="filterPill"
                    className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative group rounded-2xl overflow-hidden border border-white/[0.07] bg-gradient-to-br ${project.color} transition-all duration-500 cursor-default`}
                style={{
                  transform: hoveredIndex === index ? 'translateY(-6px)' : 'translateY(0)',
                  boxShadow: hoveredIndex === index ? '0 24px 48px -12px rgba(0,0,0,0.6)' : 'none',
                }}
              >
                {/* Top section */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base leading-tight">{project.title}</h3>
                        <span className={`inline-block mt-1 px-2 py-0.5 text-[10px] font-semibold rounded-full bg-gradient-to-r ${project.gradient} text-white`}>
                          {project.category}
                        </span>
                      </div>
                    </div>
                    {/* Metric Badge */}
                    <div className="text-right">
                      <div className={`text-2xl font-black text-gradient`}>{project.metric}</div>
                      <div className="text-[10px] text-zinc-500 font-medium">{project.metricLabel}</div>
                    </div>
                  </div>

                  {/* Problem / Solution / Result */}
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center mt-0.5">
                        <span className="text-red-400 text-[10px]">!</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Problem</span>
                        <p className="text-zinc-300 mt-0.5">{project.problem}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center mt-0.5">
                        <span className="text-violet-400 text-[10px]">→</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Solution</span>
                        <p className="text-zinc-300 mt-0.5">{project.solution}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mt-0.5">
                        <span className="text-emerald-400 text-[10px]">✓</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Result</span>
                        <p className="text-zinc-300 mt-0.5 font-medium">{project.result}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="px-6 pb-6">
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/[0.05] text-zinc-400 border border-white/[0.06]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="btn-secondary mx-auto">
            View All Case Studies
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
