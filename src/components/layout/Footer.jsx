import { Link } from 'react-router-dom'
import { Globe, Link2, Mail, MapPin, Phone } from 'lucide-react'
import { siteInfo } from '../../data/siteData'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Mail size={18} className="text-accent" />
              <span className="text-sm font-medium text-muted">Email</span>
            </div>
            <a
              href={`mailto:${siteInfo.email}`}
              className="text-sm hover:text-accent transition-colors break-all"
            >
              {siteInfo.email}
            </a>
            <div className="flex items-center gap-2 mt-4 mb-1">
              <Phone size={18} className="text-accent" />
              <span className="text-sm font-medium text-muted">Phone</span>
            </div>
            <a
              href={`tel:${siteInfo.phone}`}
              className="text-sm hover:text-accent transition-colors"
            >
              {siteInfo.phone}
            </a>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <MapPin size={18} className="text-accent" />
              <span className="text-sm font-medium text-muted">Location</span>
            </div>
            <p className="text-sm">{siteInfo.location}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-muted mb-3">Connect</p>
            <div className="flex gap-3">
              {[
                { icon: Link2, href: siteInfo.linkedin, label: 'LinkedIn' },
                { icon: Globe, href: siteInfo.github, label: 'GitHub' },
                { icon: Mail, href: `mailto:${siteInfo.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg border border-border hover:border-accent/50 hover:text-accent transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-muted mb-3">Availability</p>
            <p className="text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              {siteInfo.availability}
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
          </p>
          <Link to="/" className="text-xs text-muted hover:text-accent transition-colors">
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  )
}
