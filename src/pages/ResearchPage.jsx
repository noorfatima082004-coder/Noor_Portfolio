import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, FlaskConical, Tag } from 'lucide-react'
import { research } from '../data/siteData'

export default function ResearchPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">Research</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Research & Publications</h1>
          <p className="text-muted max-w-2xl">
            Academic research focused on AI safety, deepfake detection, and multimodal machine learning for regional language media.
          </p>
        </motion.div>

        <div className="space-y-8">
          {research.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-bg-card border border-border hover:border-accent/30 transition-colors overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium">
                    <FlaskConical size={12} />
                    {item.status}
                  </span>
                  <span className="text-xs text-muted">{item.year}</span>
                  <span className="text-xs text-muted">·</span>
                  <span className="text-xs text-muted">{item.institution}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold mb-4 leading-snug">
                  {item.title}
                </h2>

                <p className="text-sm text-muted leading-relaxed mb-6">
                  {item.abstract}
                </p>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
                    <BookOpen size={14} />
                    Key Contributions
                  </p>
                  <ul className="space-y-2">
                    {item.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-8 py-4 border-t border-border bg-bg/50 flex items-center justify-between">
                <p className="text-xs text-muted">
                  Deepfake detection · Urdu-language AI safety research
                </p>
                <button
                  disabled
                  className="inline-flex items-center gap-1.5 text-xs text-muted cursor-not-allowed opacity-50"
                  title="Full paper coming soon"
                >
                  <ExternalLink size={14} />
                  Full paper coming soon
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-6 rounded-xl border border-accent/20 bg-accent/5 glow-accent"
        >
          <p className="text-sm font-semibold text-accent mb-2">Interested in collaborating?</p>
          <p className="text-sm text-muted">
            I am open to research collaborations in deepfake detection, NLP for regional languages, and multimodal AI. Reach out at{' '}
            <a href="mailto:noor.fatima.082004@gmail.com" className="text-accent hover:underline">
              noor.fatima.082004@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
