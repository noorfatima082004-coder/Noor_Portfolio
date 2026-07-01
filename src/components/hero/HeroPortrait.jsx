import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Bot } from 'lucide-react'
import { headshots } from '../../data/siteData'

const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  delay: Math.random() * 2,
}))

export default function HeroPortrait() {
  const [index, setIndex] = useState(0)
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 })
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8])

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % headshots.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[420px] mx-auto aspect-square"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {PARTICLES.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-accent pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + p.delay,
            repeat: Infinity,
            delay: p.delay,
          }}
        />
      ))}

      <motion.div
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        className="relative w-full h-full"
      >
        <motion.div
          className="absolute inset-0 rounded-full border border-accent/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-3 rounded-full border border-accent/15"
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-6 rounded-full border border-dashed border-accent/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />

        <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-accent/30 glow-accent-strong">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={headshots[index]}
              alt={`NOOR FATIMA — photo ${index + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.15, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.92, filter: 'blur(8px)' }}
              transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <motion.div
          className="absolute -top-2 left-4 w-12 h-12 rounded-full bg-bg-elevated border border-accent/40 flex items-center justify-center glow-accent animate-float"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Bot size={22} className="text-accent" />
        </motion.div>

        <motion.div
          className="absolute -bottom-2 -right-2 sm:right-0 max-w-[220px] p-3 rounded-xl bg-bg-elevated/95 border border-border backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-[10px] sm:text-xs text-accent font-medium mb-1">AI/ML Engineer</p>
          <p className="text-[10px] sm:text-xs text-muted leading-snug">
            Pakistan · 2+ Years · 10+ Clients
          </p>
          <div className="flex items-center gap-1 mt-2">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="w-6 h-6 rounded-full bg-accent/20 border border-accent/30 -ml-1 first:ml-0"
              />
            ))}
            <span className="text-[10px] text-accent ml-1 font-medium">+12</span>
          </div>
        </motion.div>
      </motion.div>

      <div className="flex justify-center gap-2 mt-6">
        {headshots.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-8 bg-accent' : 'w-2 bg-border hover:bg-accent/40'
            }`}
            aria-label={`Show photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
