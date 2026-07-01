import { motion } from 'framer-motion'
import { techStack } from '../../data/siteData'

export default function TechStack() {
  return (
    <div className="flex flex-wrap gap-3 mt-8">
      {techStack.map((tech, i) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + i * 0.05 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-elevated border border-border text-xs text-muted hover:border-accent/30 hover:text-white transition-colors"
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: tech.color }}
          />
          {tech.name}
        </motion.div>
      ))}
    </div>
  )
}
