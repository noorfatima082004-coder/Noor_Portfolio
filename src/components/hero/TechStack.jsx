import { useRef } from 'react'
import { techStack } from '../../data/siteData'

// Duplicate items so the loop is seamless
const items = [...techStack, ...techStack]

export default function TechStack() {
  const trackRef = useRef(null)

  return (
    <div className="mt-8 overflow-hidden relative" style={{ maskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)' }}>
      <div
        ref={trackRef}
        className="flex gap-3 w-max"
        style={{
          animation: 'ticker 22s linear infinite',
        }}
        onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
        onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
      >
        {items.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-elevated border border-border text-xs text-muted hover:border-accent/40 hover:text-white transition-colors cursor-default whitespace-nowrap select-none"
          >
            <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: tech.color }} />
            {tech.name}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
