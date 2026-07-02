import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Download } from 'lucide-react'
import { siteInfo } from '../../data/siteData'
import HeroPortrait from './HeroPortrait'
import TechStack from './TechStack'

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-36 lg:pb-24" style={{ overflow: 'hidden' }}>
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">

          {/* Text — shown FIRST on mobile, left column on desktop */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-bg-elevated text-xs text-muted mb-5">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              {siteInfo.tagline}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              {siteInfo.headline}{' '}
              <span className="text-accent text-glow">{siteInfo.headlineAccent}</span>
            </h1>

            <p className="text-muted text-sm sm:text-lg max-w-lg mb-7 leading-relaxed">
              {siteInfo.bio}
            </p>

            <div className="flex flex-wrap gap-3 mb-2">
              <a
                href={siteInfo.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-bg font-semibold rounded-full hover:bg-accent-dim transition-colors glow-accent text-sm"
              >
                <Download size={16} />
                Download CV
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-accent/50 text-accent rounded-full hover:bg-accent/10 transition-colors text-sm"
              >
                Explore Projects
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <TechStack />
          </div>

          {/* Portrait — shown SECOND on mobile, right column on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full flex justify-center"
          >
            <HeroPortrait />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
