import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '../data/siteData'

export default function ExperiencePage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">Career</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Experience</h1>
          <p className="text-muted">
            My professional journey building AI systems and full-stack applications.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-8">
            {experience.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                className="relative pl-16"
              >
                <div className="absolute left-3 top-1 w-6 h-6 rounded-full bg-bg border-2 border-accent flex items-center justify-center">
                  <Briefcase size={12} className="text-accent" />
                </div>
                <div className="p-6 rounded-xl bg-bg-card border border-border hover:border-accent/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h2 className="font-semibold text-lg">{item.role}</h2>
                    <span className="text-xs text-accent font-medium">{item.period}</span>
                  </div>
                  <p className="text-sm text-muted mb-3">{item.company}</p>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
