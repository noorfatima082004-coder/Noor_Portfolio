import { useState } from 'react'
import { motion } from 'framer-motion'
import { FlaskConical, Play } from 'lucide-react'
import { projects } from '../data/siteData'
import ProjectModal from '../components/ProjectModal'

export default function ProjectsPage() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">Portfolio</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">All Projects</h1>
          <p className="text-muted max-w-2xl">
            Click any project to explore details, demo videos, and research highlights.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelected(project)}
              className="group cursor-pointer rounded-xl bg-bg-card border border-border overflow-hidden hover:border-accent/40 transition-all"
            >
              <div className="relative overflow-hidden aspect-[16/10] bg-black">
                {project.video ? (
                  <video
                    src={project.video}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    muted
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-accent/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-accent transition-all">
                    <Play size={17} className="text-bg ml-0.5" fill="currentColor" />
                  </div>
                </div>
                {project.isResearch && (
                  <div className="absolute top-2 left-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/20 border border-accent/40 text-accent text-[10px] font-medium backdrop-blur-sm">
                      <FlaskConical size={10} />
                      Research
                    </span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h2 className="font-semibold text-base mb-1.5 group-hover:text-accent transition-colors">
                  {project.title}
                </h2>
                <p className="text-xs text-muted mb-3 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-[10px] rounded-full bg-accent/10 text-accent border border-accent/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
