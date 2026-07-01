import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { testimonials } from '../data/siteData'

function RobotMascot() {
  return (
    <motion.div
      className="hidden lg:flex items-end justify-center"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      <svg viewBox="0 0 120 140" className="w-32 h-36 drop-shadow-[0_0_20px_rgba(57,255,20,0.4)]">
        <rect x="30" y="20" width="60" height="50" rx="12" fill="#111" stroke="#39ff14" strokeWidth="2"/>
        <circle cx="45" cy="40" r="6" fill="#39ff14"/>
        <circle cx="75" cy="40" r="6" fill="#39ff14"/>
        <path d="M48 52 Q60 58 72 52" fill="none" stroke="#39ff14" strokeWidth="2"/>
        <rect x="20" y="70" width="80" height="55" rx="10" fill="#111" stroke="#39ff14" strokeWidth="2"/>
        <rect x="10" y="75" width="15" height="35" rx="6" fill="#111" stroke="#39ff14" strokeWidth="1.5"/>
        <rect x="95" y="75" width="15" height="35" rx="6" fill="#111" stroke="#39ff14" strokeWidth="1.5"/>
        <path d="M35 10 Q60 0 85 10" fill="none" stroke="#39ff14" strokeWidth="2"/>
        <circle cx="60" cy="5" r="4" fill="#39ff14"/>
        <rect x="35" y="30" width="20" height="8" rx="4" fill="none" stroke="#39ff14" strokeWidth="1.5"/>
        <rect x="65" y="30" width="20" height="8" rx="4" fill="none" stroke="#39ff14" strokeWidth="1.5"/>
      </svg>
    </motion.div>
  )
}

export default function TestimonialsCTA() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-bg-card border border-border flex flex-col"
          >
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-6">
              What Clients Say
            </p>
            <div className="flex-1 relative min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-lg leading-relaxed mb-6 italic text-muted">
                    &ldquo;{testimonials[index].quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-sm">{testimonials[index].name}</p>
                    <p className="text-xs text-muted">{testimonials[index].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={prev}
                className="p-2 rounded-lg border border-border hover:border-accent/50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-lg border border-border hover:border-accent/50 transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-bg-card border border-accent/20 glow-accent flex flex-col lg:flex-row items-center gap-6"
          >
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Let&apos;s build something amazing together!
              </h3>
              <p className="text-muted text-sm mb-6">
                Have a project in mind? I&apos;d love to hear about it. Let&apos;s create something extraordinary.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg font-semibold rounded-full hover:bg-accent-dim transition-colors"
              >
                Get In Touch
                <ArrowUpRight size={18} />
              </Link>
            </div>
            <RobotMascot />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
