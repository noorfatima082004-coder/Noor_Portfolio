import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'

// Pre-generate so they're stable across renders
const SPARKS = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: 2 + Math.random() * 96,
  y: 15 + Math.random() * 70,
  size: 3 + Math.random() * 9,
  delay: Math.random() * 1.1,
  star: i % 3 !== 0,
}))

export default function ThemeTransition({ onMidpoint, onDone }) {
  useEffect(() => {
    const t1 = setTimeout(onMidpoint, 820)
    const t2 = setTimeout(onDone, 1950)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onMidpoint, onDone])

  return createPortal(
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 99999 }}>
      <motion.div
        className="absolute inset-x-0"
        style={{ top: '-60vh', height: '220vh' }}
        initial={{ y: '-100%' }}
        animate={{ y: '100%' }}
        transition={{ duration: 1.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Main shimmer curtain */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg,
              transparent 0%,
              rgba(57,255,20,0.04) 4%,
              rgba(57,255,20,0.22) 12%,
              rgba(57,255,20,0.72) 22%,
              rgba(80,255,40,0.92) 32%,
              rgba(160,255,100,0.98) 41%,
              rgba(220,255,180,1)  46%,
              rgba(255,255,255,1)  50%,
              rgba(220,255,180,1)  54%,
              rgba(160,255,100,0.98) 59%,
              rgba(80,255,40,0.92) 68%,
              rgba(57,255,20,0.72) 78%,
              rgba(57,255,20,0.22) 88%,
              rgba(57,255,20,0.04) 96%,
              transparent 100%
            )`,
          }}
        />

        {/* Diagonal shimmer stripes inside curtain */}
        <div
          className="absolute inset-0"
          style={{
            background: `repeating-linear-gradient(
              -55deg,
              transparent 0px,
              transparent 18px,
              rgba(255,255,255,0.07) 18px,
              rgba(255,255,255,0.07) 19px
            )`,
            mixBlendMode: 'overlay',
          }}
        />

        {/* Leading bright edge line */}
        <div
          className="absolute left-0 right-0"
          style={{
            top: '46%',
            height: '8px',
            background:
              'linear-gradient(90deg, transparent, rgba(57,255,20,0.5) 15%, white 50%, rgba(57,255,20,0.5) 85%, transparent)',
            filter: 'blur(3px)',
            boxShadow: '0 0 30px 8px rgba(57,255,20,0.5)',
          }}
        />
        <div
          className="absolute left-0 right-0"
          style={{
            top: '54%',
            height: '4px',
            background:
              'linear-gradient(90deg, transparent, rgba(57,255,20,0.35) 15%, white 50%, rgba(57,255,20,0.35) 85%, transparent)',
            filter: 'blur(2px)',
          }}
        />

        {/* Sparkles / stars */}
        {SPARKS.map((s) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1.3, 1, 0],
              rotate: [0, 72, 144],
            }}
            transition={{ delay: s.delay, duration: 0.55, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size,
              height: s.size,
              background: 'white',
              borderRadius: s.star ? '0' : '50%',
              clipPath: s.star
                ? 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)'
                : undefined,
              boxShadow: `0 0 ${s.size * 3}px ${s.size}px rgba(57,255,20,0.85), 0 0 ${s.size * 6}px rgba(255,255,255,0.6)`,
            }}
          />
        ))}
      </motion.div>
    </div>,
    document.body
  )
}
