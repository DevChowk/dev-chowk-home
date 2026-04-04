'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'CEO',
    company: 'FinNova Labs',
    avatar: 'PS',
    color: 'from-violet-600 to-purple-700',
    rating: 5,
    text: "Dev Chowk transformed our entire fintech platform in just 6 weeks. The architecture they designed is handling 50K daily transactions without a sweat. These guys are the real deal — they think about your business, not just your code.",
    metric: '50K daily TXNs',
    industry: 'Fintech',
  },
  {
    name: 'Arjun Mehta',
    role: 'Co-founder & CTO',
    company: 'GrowthStack',
    avatar: 'AM',
    color: 'from-cyan-600 to-blue-700',
    rating: 5,
    text: "We tried two agencies before Dev Chowk. The difference is night and day. They deliver on time, communicate proactively, and the code quality is exceptional. Our SaaS went from 0 to $50K MRR in 4 months post-launch.",
    metric: '$50K MRR in 4 months',
    industry: 'SaaS',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Product Director',
    company: 'HealthPulse Inc',
    avatar: 'SM',
    color: 'from-emerald-600 to-teal-700',
    rating: 5,
    text: "The mobile app they built us has a 4.9-star rating on both app stores. The UX is stunning and the performance is rock solid. More importantly, they understood our HIPAA compliance requirements from day one.",
    metric: '4.9★ App Store Rating',
    industry: 'Healthcare',
  },
  {
    name: 'David Chen',
    role: 'Founder',
    company: 'ScaleAI',
    avatar: 'DC',
    color: 'from-amber-600 to-orange-700',
    rating: 5,
    text: "I needed an AI-powered document processing system in 3 weeks for a demo. Dev Chowk pulled it off. Not only did we nail the demo, but we landed a $500K contract because of it. Worth every penny.",
    metric: '$500K contract landed',
    industry: 'AI/ML',
  },
  {
    name: 'Riya Patel',
    role: 'Head of Engineering',
    company: 'ShopSmart',
    avatar: 'RP',
    color: 'from-fuchsia-600 to-pink-700',
    rating: 5,
    text: "Our e-commerce platform was crashing during flash sales. Dev Chowk rebuilt our infrastructure on AWS with auto-scaling in 2 weeks. We handled Black Friday with zero downtime and 3x our usual traffic.",
    metric: '3× traffic, zero downtime',
    industry: 'E-commerce',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-zinc-700'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [isPaused, next])

  return (
    <section className="relative py-24 lg:py-36 bg-[#0a0a10] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      {/* Ambient glows */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-violet-900/15 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-cyan-900/15 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-tag mx-auto mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            Client Stories
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight"
          >
            What Our Clients{' '}
            <span className="text-gradient">Actually Say</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg max-w-xl mx-auto"
          >
            Don't take our word for it. Hear from the founders and teams we've helped build and ship.
          </motion.p>
        </div>

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative rounded-3xl glass border border-white/[0.07] overflow-hidden p-8 lg:p-12">
            {/* Quote mark */}
            <div className="absolute top-6 right-8 text-8xl font-black text-violet-500/10 leading-none select-none">
              "
            </div>

            {/* Top bar */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {testimonials[current].avatar}
                </div>
                <div>
                  <div className="font-bold text-white text-lg">{testimonials[current].name}</div>
                  <div className="text-zinc-500 text-sm">
                    {testimonials[current].role} · {testimonials[current].company}
                  </div>
                  <StarRating rating={testimonials[current].rating} />
                </div>
              </div>

              <div className="hidden sm:flex flex-col items-end">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${testimonials[current].color} text-white mb-2`}>
                  {testimonials[current].industry}
                </span>
                <div className="text-sm font-bold text-gradient">{testimonials[current].metric}</div>
              </div>
            </div>

            {/* Quote */}
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="text-xl lg:text-2xl text-zinc-200 leading-relaxed font-medium relative"
              >
                "{testimonials[current].text}"
              </motion.blockquote>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/[0.06]">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? 'bg-violet-500 w-8' : 'bg-zinc-700 w-1.5 hover:bg-zinc-500'
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-xl glass border border-white/[0.07] hover:border-violet-500/40 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                  aria-label="Previous"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-xl glass border border-white/[0.07] hover:border-violet-500/40 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                  aria-label="Next"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mini testimonials strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {testimonials.map((t, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.08 }}
              onClick={() => setCurrent(i)}
              className={`text-left p-4 rounded-2xl border transition-all duration-300 ${
                i === current
                  ? 'glass-strong border-violet-500/40 shadow-glow'
                  : 'glass border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-xs font-semibold text-white truncate">{t.name}</div>
                  <div className="text-[10px] text-zinc-600 truncate">{t.company}</div>
                </div>
              </div>
              <div className="text-xs text-zinc-500 font-medium truncate">{t.metric}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
