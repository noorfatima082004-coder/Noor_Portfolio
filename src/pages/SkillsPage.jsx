import { motion } from 'framer-motion'
import SkillsGrid from '../components/Skills'

export default function SkillsPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">Expertise</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Tools</h1>
          <p className="text-muted max-w-2xl">
            A comprehensive toolkit spanning AI/ML, full-stack development, cloud infrastructure, and modern DevOps practices.
          </p>
        </motion.div>
        <SkillsGrid showQuote />
      </div>
    </div>
  )
}
