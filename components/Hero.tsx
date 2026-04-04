'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const floatingBadges = [
  { icon: '⚡', label: '2x Faster Delivery', color: 'from-violet-600/20 to-purple-600/20', border: 'border-violet-500/30', top: '15%', left: '5%', delay: 0.8 },
  { icon: '🚀', label: '100+ Projects', color: 'from-cyan-600/20 to-blue-600/20', border: 'border-cyan-500/30', top: '25%', right: '4%', delay: 1.0 },
  { icon: '⭐', label: '4.9 / 5 Rating', color: 'from-amber-600/20 to-orange-600/20', border: 'border-amber-500/30', bottom: '30%', left: '3%', delay: 1.2 },
  { icon: '🔒', label: 'Enterprise Grade', color: 'from-emerald-600/20 to-green-600/20', border: 'border-emerald-500/30', bottom: '25%', right: '5%', delay: 1.4 },
]

const techStack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Flutter', 'AI/ML', 'PostgreSQL', 'Docker', 'Kubernetes', 'GraphQL']

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const springConfig = { stiffness: 60, damping: 30 }
  const spotlightX = useSpring(mouseX, springConfig)
  const spotlightY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#09090b] pt-16"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-100" />

      {/* Mouse-follow Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: useTransform(
            [spotlightX, spotlightY],
            ([x, y]) =>
              `radial-gradient(600px circle at ${x}px ${y}px, rgba(139,92,246,0.08), transparent 70%)`
          ),
        }}
      />

      {/* Ambient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl animate-blob-delayed pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Orb Lines (decorative) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="g1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="50%" cy="50%" r="300" fill="none" stroke="url(#g1)" strokeWidth="0.5" />
        <circle cx="50%" cy="50%" r="450" fill="none" stroke="url(#g1)" strokeWidth="0.3" />
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-tag mb-8 cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
            </span>
            Trusted by 100+ Clients Worldwide
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.05] mb-6"
          >
            <span className="text-white">Building Digital</span>
            <br />
            <span className="text-gradient">Solutions That</span>
            <br />
            <span className="text-white">Scale.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10"
          >
            We design, develop, and deploy premium digital products for startups and enterprises.
            From concept to launch —{' '}
            <span className="text-violet-400 font-medium">faster, smarter, and built to last.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary text-base px-8 py-4 font-semibold min-w-[220px] justify-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Get Free Consultation
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('#portfolio')}
              className="btn-secondary text-base px-8 py-4 font-semibold min-w-[220px] justify-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View Our Work
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-zinc-500 mb-16"
          >
            {['No lock-in contracts', 'Free initial consultation', '2-week sprint delivery', 'Startup-friendly pricing'].map((item, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </span>
            ))}
          </motion.div>

          {/* Tech Stack Marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="w-full overflow-hidden"
          >
            <p className="text-xs text-zinc-600 uppercase tracking-widest font-medium mb-4">Tech Stack We Master</p>
            <div className="relative flex overflow-hidden">
              <div className="flex gap-4 animate-marquee whitespace-nowrap">
                {[...techStack, ...techStack].map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium text-zinc-400 glass border border-white/[0.06] hover:border-violet-500/30 hover:text-violet-400 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Badges */}
      {floatingBadges.map((badge, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: badge.delay, type: 'spring' }}
          className={`absolute hidden xl:flex items-center gap-2 px-4 py-2.5 rounded-2xl glass-strong bg-gradient-to-br ${badge.color} border ${badge.border} shadow-xl cursor-default`}
          style={{
            top: badge.top,
            left: badge.left,
            right: (badge as any).right,
            bottom: badge.bottom,
            animation: `float ${5 + i}s ease-in-out ${i * 0.5}s infinite`,
          }}
        >
          <span className="text-xl">{badge.icon}</span>
          <span className="text-sm font-semibold text-white whitespace-nowrap">{badge.label}</span>
        </motion.div>
      ))}

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-zinc-600 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-zinc-700 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-violet-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}
