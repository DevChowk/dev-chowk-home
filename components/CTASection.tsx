'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projectTypes = [
  'Web App / Website',
  'Mobile App',
  'SaaS Platform',
  'UI/UX Design',
  'Cloud & DevOps',
  'AI Integration',
  'Consulting / Audit',
  'Other',
]

const budgetRanges = [
  'Under $5K',
  '$5K – $15K',
  '$15K – $50K',
  '$50K – $100K',
  '$100K+',
  'Let\'s discuss',
]

type FormState = {
  name: string
  email: string
  company: string
  projectType: string
  budget: string
  message: string
}

export default function CTASection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email address'
    if (!form.projectType) newErrors.projectType = 'Please select a project type'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1800))
    setStatus('success')
  }

  const update = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  return (
    <section id="contact" className="relative py-24 lg:py-36 bg-[#0a0a10] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      {/* Ambient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="section-tag mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Let's Work Together
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.05]"
            >
              Let's Build Your{' '}
              <span className="text-gradient">Next Big Thing</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 text-lg leading-relaxed mb-10"
            >
              Whether you have a detailed spec or just an idea on a napkin — we'll help you shape it,
              build it, and ship it. First consultation is always free.
            </motion.p>

            {/* Perks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-4 mb-10"
            >
              {[
                { icon: '🎯', title: 'Free Strategy Session', desc: 'We analyze your requirements and give expert recommendations — zero cost.' },
                { icon: '⚡', title: 'Response in < 4 Hours', desc: 'We respond fast. No waiting days for a reply.' },
                { icon: '📋', title: 'Detailed Proposal in 48hrs', desc: 'Technical scope, timeline, and fixed pricing — no surprises.' },
              ].map((perk, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl glass border border-white/[0.06] hover:border-violet-500/20 transition-colors">
                  <span className="text-2xl flex-shrink-0">{perk.icon}</span>
                  <div>
                    <div className="font-semibold text-white text-sm mb-0.5">{perk.title}</div>
                    <div className="text-zinc-500 text-sm">{perk.desc}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-3"
            >
              <a href="mailto:hello@devchowk.com" className="flex items-center gap-3 text-zinc-400 hover:text-violet-400 transition-colors text-sm">
                <div className="w-9 h-9 rounded-lg glass border border-white/[0.07] flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                hello@devchowk.com
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-400 hover:text-emerald-400 transition-colors text-sm">
                <div className="w-9 h-9 rounded-lg glass border border-white/[0.07] flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.855L0 24l6.318-1.518A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.796 9.796 0 01-5.149-1.462l-.371-.22-3.821.917.952-3.715-.242-.38A9.79 9.79 0 012.182 12c0-5.411 4.407-9.818 9.818-9.818S21.818 6.589 21.818 12 17.411 21.818 12 21.818z" />
                  </svg>
                </div>
                +91 98765 43210
              </a>
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="rounded-3xl glass-strong border border-white/[0.08] p-8 lg:p-10 shadow-2xl">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-6">🎉</div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-zinc-400 mb-6">
                    Thanks for reaching out, {form.name.split(' ')[0]}! We'll get back to you within 4 hours.
                  </p>
                  <button
                    onClick={() => { setStatus('idle'); setForm({ name: '', email: '', company: '', projectType: '', budget: '', message: '' }) }}
                    className="btn-secondary mx-auto"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Get Your Free Consultation</h3>
                    <p className="text-zinc-500 text-sm">Fill out the form and we'll reach out within 4 hours.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={update('name')}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.05] border text-white placeholder-zinc-600 text-sm outline-none focus:ring-2 focus:ring-violet-500/50 transition-all ${errors.name ? 'border-red-500/50' : 'border-white/[0.08] focus:border-violet-500/40'}`}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5 uppercase tracking-wider">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={update('email')}
                        placeholder="john@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.05] border text-white placeholder-zinc-600 text-sm outline-none focus:ring-2 focus:ring-violet-500/50 transition-all ${errors.email ? 'border-red-500/50' : 'border-white/[0.08] focus:border-violet-500/40'}`}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5 uppercase tracking-wider">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={update('company')}
                      placeholder="Your company (optional)"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] focus:border-violet-500/40 text-white placeholder-zinc-600 text-sm outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5 uppercase tracking-wider">
                      Project Type *
                    </label>
                    <select
                      value={form.projectType}
                      onChange={update('projectType')}
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-900 border text-sm outline-none focus:ring-2 focus:ring-violet-500/50 transition-all cursor-pointer ${form.projectType ? 'text-white' : 'text-zinc-600'} ${errors.projectType ? 'border-red-500/50' : 'border-white/[0.08] focus:border-violet-500/40'}`}
                    >
                      <option value="" className="text-zinc-600">Select a service...</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="text-white bg-zinc-900">{type}</option>
                      ))}
                    </select>
                    {errors.projectType && <p className="text-red-400 text-xs mt-1">{errors.projectType}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5 uppercase tracking-wider">
                      Budget Range
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {budgetRanges.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setForm((prev) => ({ ...prev, budget: range }))}
                          className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all ${
                            form.budget === range
                              ? 'bg-violet-600/20 border-violet-500/50 text-violet-300'
                              : 'bg-white/[0.03] border-white/[0.07] text-zinc-500 hover:text-zinc-300 hover:border-white/[0.12]'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5 uppercase tracking-wider">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      value={form.message}
                      onChange={update('message')}
                      rows={4}
                      placeholder="Describe your project, goals, or challenges. The more detail, the better!"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] focus:border-violet-500/40 text-white placeholder-zinc-600 text-sm outline-none focus:ring-2 focus:ring-violet-500/50 transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full justify-center py-4 text-base font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                    whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                    whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send My Request — It's Free
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-zinc-600">
                    No spam. No commitment. 100% free consultation.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
