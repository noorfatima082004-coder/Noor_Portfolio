import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Download } from 'lucide-react'
import { siteInfo } from '../../data/siteData'
import HeroPortrait from './HeroPortrait'
import TechStack from './TechStack'

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-bg-elevated text-xs text-muted mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              {siteInfo.tagline}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {siteInfo.headline}{' '}
              <span className="text-accent text-glow">{siteInfo.headlineAccent}</span>
            </h1>

            <p className="text-muted text-base sm:text-lg max-w-lg mb-8 leading-relaxed">
              {siteInfo.bio}
            </p>

            <div className="flex flex-wrap gap-4 mb-2">
              <a
                href={siteInfo.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg font-semibold rounded-full hover:bg-accent-dim transition-colors glow-accent"
              >
                <Download size={18} />
                Download CV
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-accent/50 text-accent rounded-full hover:bg-accent/10 transition-colors"
              >
                Explore Projects
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <TechStack />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <HeroPortrait />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
