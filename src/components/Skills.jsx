import { motion } from 'framer-motion'
import { Brain, Cloud, Database, Globe, Smartphone, Wrench } from 'lucide-react'
import { skills, siteInfo } from '../data/siteData'

const iconMap = {
  brain: Brain,
  globe: Globe,
  smartphone: Smartphone,
  cloud: Cloud,
  database: Database,
  wrench: Wrench,
}

export default function SkillsGrid({ showQuote = false }) {
  return (
    <div>
      <p className="text-accent text-sm font-medium tracking-widest uppercase mb-6">
        Skills & Tools
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {skills.map((skill, i) => {
          const Icon = iconMap[skill.icon] || Brain
          return (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, boxShadow: '0 0 30px rgba(57,255,20,0.15)' }}
              className="p-5 rounded-xl bg-bg-card border border-border hover:border-accent/30 transition-colors"
            >
              <Icon size={24} className="text-accent mb-3" />
              <p className="font-semibold text-sm mb-2">{skill.category}</p>
              <p className="text-xs text-muted">{skill.tools.join(', ')}</p>
            </motion.div>
          )
        })}
      </div>

      {showQuote && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-xl border border-accent/30 bg-accent/5 glow-accent flex items-center justify-between gap-4"
        >
          <p className="text-sm sm:text-base font-medium italic text-accent/90">
            &ldquo;{siteInfo.quote}&rdquo;
          </p>
          <div className="hidden sm:block w-16 h-16 shrink-0">
            <svg viewBox="0 0 64 64" className="w-full h-full">
              <polygon
                points="32,4 60,20 60,44 32,60 4,44 4,20"
                fill="none"
                stroke="#39ff14"
                strokeWidth="1.5"
                opacity="0.6"
              />
              <polygon
                points="32,12 52,24 52,40 32,52 12,40 12,24"
                fill="none"
                stroke="#39ff14"
                strokeWidth="1"
                opacity="0.3"
              />
            </svg>
          </div>
        </motion.div>
      )}
    </div>
  )
}
