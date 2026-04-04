'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Web Development',
    subtitle: 'High-performance websites & web apps',
    description:
      'We craft blazing-fast, SEO-optimized web experiences using Next.js, React, and modern stacks. From landing pages to complex platforms.',
    features: ['Next.js / React', 'Performance Optimized', 'SEO Ready', 'CMS Integration'],
    color: 'from-violet-600 to-purple-600',
    glow: 'rgba(139,92,246,0.2)',
    gradient: 'from-violet-600/10 to-purple-900/5',
    tag: 'Most Popular',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobile App Development',
    subtitle: 'iOS & Android apps that users love',
    description:
      'Native and cross-platform mobile apps with exceptional UX. Built with Flutter & React Native for maximum performance and reach.',
    features: ['Flutter / React Native', 'iOS & Android', 'Offline Support', 'Push Notifications'],
    color: 'from-cyan-500 to-blue-600',
    glow: 'rgba(6,182,212,0.2)',
    gradient: 'from-cyan-600/10 to-blue-900/5',
    tag: null,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'SaaS Development',
    subtitle: 'Scalable subscription products',
    description:
      'End-to-end SaaS platforms with multi-tenancy, billing, dashboards, and analytics. We turn your idea into a revenue-generating product.',
    features: ['Multi-tenancy', 'Stripe Billing', 'Analytics Dashboard', 'Role-based Access'],
    color: 'from-fuchsia-500 to-pink-600',
    glow: 'rgba(217,70,239,0.2)',
    gradient: 'from-fuchsia-600/10 to-pink-900/5',
    tag: 'High Demand',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'UI/UX Design',
    subtitle: 'Designs that convert & delight',
    description:
      'Research-driven design systems, wireframes, and prototypes. We create interfaces that are intuitive, beautiful, and drive measurable outcomes.',
    features: ['Figma Design', 'Design System', 'Prototyping', 'User Research'],
    color: 'from-orange-500 to-red-600',
    glow: 'rgba(249,115,22,0.2)',
    gradient: 'from-orange-600/10 to-red-900/5',
    tag: null,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: 'Cloud & DevOps',
    subtitle: 'Reliable infrastructure at scale',
    description:
      'AWS, GCP & Azure architectures. CI/CD pipelines, Docker, Kubernetes, and monitoring setups that keep your product always online.',
    features: ['AWS / GCP / Azure', 'Kubernetes', 'CI/CD Pipelines', '99.9% Uptime SLA'],
    color: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16,185,129,0.2)',
    gradient: 'from-emerald-600/10 to-teal-900/5',
    tag: null,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
      </svg>
    ),
    title: 'AI Solutions',
    subtitle: 'Intelligent automation & ML products',
    description:
      'LLM integrations, custom AI agents, computer vision, NLP pipelines, and RAG systems. We make your product smarter with cutting-edge AI.',
    features: ['LLM Integration', 'RAG Systems', 'Computer Vision', 'Custom AI Agents'],
    color: 'from-amber-500 to-yellow-600',
    glow: 'rgba(245,158,11,0.2)',
    gradient: 'from-amber-600/10 to-yellow-900/5',
    tag: 'Trending',
  },
]

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="services" className="relative py-24 lg:py-36 bg-[#09090b]">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-tag mx-auto mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Our Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight"
          >
            Everything You Need to{' '}
            <span className="text-gradient">Build & Scale</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            From idea to enterprise — we cover the full spectrum of IT services with a single, dedicated team.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative group rounded-2xl p-6 bg-gradient-to-br ${service.gradient} border border-white/[0.07] cursor-default transition-all duration-500 overflow-hidden`}
              style={{
                boxShadow: hoveredIndex === index ? `0 20px 40px -10px ${service.glow}, 0 0 0 1px ${service.glow}` : '0 4px 6px -1px rgba(0,0,0,0.4)',
                transform: hoveredIndex === index ? 'translateY(-6px)' : 'translateY(0)',
                borderColor: hoveredIndex === index ? service.glow : 'rgba(255,255,255,0.07)',
              }}
            >
              {/* Tag */}
              {service.tag && (
                <div className={`absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${service.color} text-white`}>
                  {service.tag}
                </div>
              )}

              {/* Hover glow bg */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at 30% 30%, ${service.glow}, transparent 70%)` }}
              />

              {/* Icon */}
              <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} mb-5 shadow-lg`}>
                <div className="text-white">{service.icon}</div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                <p className="text-xs font-medium text-zinc-500 mb-3">{service.subtitle}</p>
                <p className="text-sm text-zinc-400 leading-relaxed mb-5">{service.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feat, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white/[0.06] text-zinc-400 border border-white/[0.06] group-hover:border-white/10 transition-colors"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Learn More */}
                <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                  style={{ color: '#a78bfa' }}>
                  Learn More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-500 mb-6">
            Not sure what you need?{' '}
            <span className="text-violet-400 font-medium">Let's talk and figure it out together.</span>
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary mx-auto"
          >
            Schedule Free Discovery Call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
