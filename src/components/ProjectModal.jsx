import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, FlaskConical, Play } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  const [playing, setPlaying] = useState(false)

  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.97 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-bg-card border border-border shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-bg/80 border border-border hover:border-accent/50 hover:text-accent transition-colors"
          >
            <X size={18} />
          </button>

          {/* Media */}
          <div className="relative bg-black aspect-video overflow-hidden rounded-t-2xl">
            {project.video ? (
              !playing ? (
                <>
                  <video
                    src={project.video}
                    className="w-full h-full object-cover opacity-60"
                    muted loop autoPlay playsInline
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setPlaying(true)}
                      className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center glow-accent hover:scale-110 transition-transform"
                    >
                      <Play size={28} className="text-bg ml-1" fill="currentColor" />
                    </button>
                  </div>
                  {project.isResearch && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-medium backdrop-blur-sm">
                        <FlaskConical size={11} />
                        Research Demo
                      </span>
                    </div>
                  )}
                </>
              ) : (
                <video src={project.video} className="w-full h-full object-cover" controls autoPlay />
              )
            ) : (
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            )}
          </div>

          {/* Content */}
          <div className="p-7">
            {project.role && (
              <p className="text-xs text-accent font-medium mb-3">{project.role}</p>
            )}
            <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
            <p className="text-sm text-muted mb-5 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20">
                  {tag}
                </span>
              ))}
            </div>

            {project.details && (
              <>
                <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Key Details</p>
                <ul className="space-y-3">
                  {project.details.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
