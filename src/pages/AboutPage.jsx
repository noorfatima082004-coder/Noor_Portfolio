import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { aboutFeatures, siteInfo, stats } from '../data/siteData'
import { Brain, Code2, Lightbulb } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">About</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{siteInfo.name}</h1>
          <p className="text-xl text-muted mb-8">{siteInfo.tagline}</p>
          <p className="text-muted leading-relaxed mb-8">{siteInfo.aboutText}</p>
          <p className="text-muted leading-relaxed mb-8">{siteInfo.bio}</p>

          <a
            href={siteInfo.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg font-semibold rounded-full hover:bg-accent-dim transition-colors glow-accent mb-12"
          >
            <Download size={18} />
            Download CV
          </a>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-bg-card border border-border">
                <p className="text-2xl font-bold text-accent">{stat.value}</p>
                <p className="text-xs text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6">What Drives Me</h2>
          <div className="space-y-6">
            {aboutFeatures.map((feature, i) => {
              const Icon = [Lightbulb, Brain, Code2][i]
              return (
                <div key={feature.title} className="flex gap-4 p-5 rounded-xl bg-bg-card border border-border">
                  <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 shrink-0 h-fit">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">{feature.title}</p>
                    <p className="text-sm text-muted">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
