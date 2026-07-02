import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, FlaskConical, Play } from 'lucide-react'
import { projects } from '../data/siteData'
import ProjectModal from './ProjectModal'

export default function Projects({ limit = 4 }) {
  const [selected, setSelected] = useState(null)
  const displayed = limit ? projects.slice(0, limit) : projects

  return (
    <section id="projects" className="py-20 lg:py-28 bg-bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">Portfolio</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-1 text-sm text-accent hover:underline">
            View All Projects
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayed.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                  <div className="w-9 h-9 rounded-full bg-accent/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-accent transition-all">
                    <Play size={15} className="text-bg ml-0.5" fill="currentColor" />
                  </div>
                </div>
                {project.isResearch && (
                  <div className="absolute top-2 left-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/20 border border-accent/40 text-accent text-[10px] font-medium backdrop-blur-sm">
                      <FlaskConical size={9} />
                      Research
                    </span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-sm mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-muted mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
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

      <ProjectModal key={selected?.id} project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
