import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const DOTS = [
  { x: 6,  y: 10, s: 5, d: 3.2, o: 0.55 },
  { x: 93, y: 7,  s: 4, d: 4.1, o: 0.45 },
  { x: 14, y: 38, s: 6, d: 3.6, o: 0.5  },
  { x: 87, y: 52, s: 4, d: 2.9, o: 0.4  },
  { x: 4,  y: 72, s: 5, d: 4.4, o: 0.5  },
  { x: 96, y: 80, s: 3, d: 3.0, o: 0.45 },
  { x: 48, y: 4,  s: 6, d: 3.8, o: 0.55 },
  { x: 72, y: 93, s: 4, d: 2.7, o: 0.4  },
  { x: 28, y: 62, s: 5, d: 4.0, o: 0.5  },
  { x: 80, y: 28, s: 4, d: 3.3, o: 0.45 },
  { x: 60, y: 15, s: 3, d: 4.6, o: 0.35 },
  { x: 19, y: 86, s: 4, d: 3.5, o: 0.4  },
]

export default function LightSparkles() {
  const [light, setLight] = useState(() =>
    document.documentElement.classList.contains('light')
  )

  useEffect(() => {
    const obs = new MutationObserver(() =>
      setLight(document.documentElement.classList.contains('light'))
    )
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => obs.disconnect()
  }, [])

  return (
    <AnimatePresence>
      {light && (
        <motion.div
          key="sparkles"
          className="fixed inset-0 pointer-events-none"
          style={{ zIndex: 5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          aria-hidden
        >
          {DOTS.map((dot, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.2, 1],
                opacity: dot.o,
                y: [0, -8, 0],
              }}
              transition={{
                scale: { delay: i * 0.07, duration: 0.5 },
                opacity: { delay: i * 0.07, duration: 0.5 },
                y: { delay: i * 0.07, duration: dot.d, repeat: Infinity, ease: 'easeInOut' },
              }}
              style={{
                left: `${dot.x}%`,
                top: `${dot.y}%`,
                width: dot.s,
                height: dot.s,
                background: '#16a34a',
                boxShadow: `0 0 ${dot.s * 3}px ${dot.s * 1.5}px rgba(22,163,74,0.35)`,
              }}
            />
          ))}

          {/* Subtle green shimmer streak at top */}
          <div
            className="absolute top-0 left-0 right-0"
            style={{
              height: '3px',
              background:
                'linear-gradient(90deg, transparent 0%, rgba(22,163,74,0.4) 20%, rgba(57,255,20,0.6) 50%, rgba(22,163,74,0.4) 80%, transparent 100%)',
              filter: 'blur(1px)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: '2px',
              background:
                'linear-gradient(90deg, transparent 0%, rgba(22,163,74,0.25) 30%, rgba(22,163,74,0.25) 70%, transparent 100%)',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
