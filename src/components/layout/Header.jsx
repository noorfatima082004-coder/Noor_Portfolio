import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { navLinks, siteInfo } from '../../data/siteData'
import ThemeTransition from '../ThemeTransition'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dark, setDark] = useState(true)
  const [transitioning, setTransitioning] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.documentElement.classList.toggle('light', !dark)
  }, [dark])

  const handleThemeToggle = () => {
    if (transitioning) return
    setTransitioning(true)
  }

  const handleMidpoint = useCallback(() => setDark(d => !d), [])
  const handleDone = useCallback(() => setTransitioning(false), [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-accent/70 glow-accent group-hover:scale-105 transition-transform shrink-0 bg-black">
              <img src="/images/nf-logo.jpg" alt="NF" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-sm tracking-wide">{siteInfo.name}</p>
              <p className="text-xs text-muted">{siteInfo.title}</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? 'text-accent bg-accent/10'
                    : 'text-muted hover:text-text hover:bg-black/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm border border-accent/50 rounded-full text-accent hover:bg-accent/10 transition-colors"
            >
              Let&apos;s Connect
              <ArrowUpRight size={14} />
            </Link>
            <button
              onClick={handleThemeToggle}
              disabled={transitioning}
              className="p-2 rounded-lg border border-border hover:border-accent/50 transition-colors disabled:opacity-50"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} className="text-accent" /> : <Moon size={18} />}
            </button>
            {transitioning && (
              <ThemeTransition onMidpoint={handleMidpoint} onDone={handleDone} />
            )}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg border border-border"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-bg-elevated border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-sm ${
                    location.pathname === link.path
                      ? 'text-accent bg-accent/10'
                      : 'text-muted'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 text-sm border border-accent/50 rounded-full text-accent"
              >
                Let&apos;s Connect
                <ArrowUpRight size={14} />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
