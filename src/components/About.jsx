import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Brain, Code2, Lightbulb } from 'lucide-react'
import { aboutFeatures, siteInfo } from '../data/siteData'
import SkillsGrid from './Skills'

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">About Me</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              {siteInfo.aboutHeading}
            </h2>
            <p className="text-muted leading-relaxed mb-8">{siteInfo.aboutText}</p>

            <div className="space-y-4 mb-8">
              {aboutFeatures.map((feature, i) => {
                const Icon = [Lightbulb, Brain, Code2][i]
                return (
                  <div key={feature.title} className="flex gap-4 items-start">
                    <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 shrink-0">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-sm mb-0.5">{feature.title}</p>
                      <p className="text-xs text-muted">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-accent/50 text-accent rounded-full text-sm hover:bg-accent/10 transition-colors"
            >
              More About Me
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SkillsGrid showQuote />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
