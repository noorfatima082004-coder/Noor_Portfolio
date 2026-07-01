import { motion } from 'framer-motion'
import { Calendar, Clock } from 'lucide-react'
import { blogPosts } from '../data/siteData'

export default function BlogPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">Insights</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-muted">
            Thoughts on AI, machine learning, and modern web development.
          </p>
        </motion.div>

        <div className="space-y-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-bg-card border border-border hover:border-accent/30 transition-colors cursor-pointer group"
            >
              <span className="inline-block px-2.5 py-0.5 text-xs rounded-full bg-accent/10 text-accent border border-accent/20 mb-3">
                {post.tag}
              </span>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-muted mb-4 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-muted">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}
