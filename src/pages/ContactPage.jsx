import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2 } from 'lucide-react'
import { siteInfo } from '../data/siteData'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | done | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const data = new FormData()
    data.append('name', form.name)
    data.append('email', form.email)
    data.append('message', form.message)
    data.append('_subject', `Portfolio Contact from ${form.name}`)
    data.append('_captcha', 'false')
    data.append('_template', 'table')

    try {
      const res = await fetch('https://formsubmit.co/noor.fatima.082004@gmail.com', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      })
      if (res.ok) {
        setStatus('done')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">Get In Touch</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-muted max-w-2xl">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-xl bg-bg-card border border-border">
              <div className="flex items-center gap-3 mb-2">
                <Mail size={20} className="text-accent" />
                <span className="font-medium">Email</span>
              </div>
              <a href={`mailto:${siteInfo.email}`} className="text-sm text-muted hover:text-accent transition-colors">
                {siteInfo.email}
              </a>
            </div>
            <div className="p-6 rounded-xl bg-bg-card border border-border">
              <div className="flex items-center gap-3 mb-2">
                <Phone size={20} className="text-accent" />
                <span className="font-medium">Phone / WhatsApp</span>
              </div>
              <a href={`tel:${siteInfo.phone}`} className="text-sm text-muted hover:text-accent transition-colors">
                {siteInfo.phone}
              </a>
            </div>
            <div className="p-6 rounded-xl bg-bg-card border border-border">
              <div className="flex items-center gap-3 mb-2">
                <MapPin size={20} className="text-accent" />
                <span className="font-medium">Location</span>
              </div>
              <p className="text-sm text-muted">{siteInfo.location}</p>
            </div>
            <div className="p-6 rounded-xl bg-bg-card border border-accent/20 glow-accent">
              <p className="text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
                {siteInfo.availability}
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl bg-bg-card border border-border space-y-5"
          >
            {status === 'done' ? (
              <div className="text-center py-10 flex flex-col items-center gap-4">
                <CheckCircle2 size={48} className="text-accent" />
                <p className="text-accent font-semibold text-lg">Message sent!</p>
                <p className="text-sm text-muted">
                  Thanks for reaching out — I'll get back to you soon. 😊
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-xs text-accent underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-bg border border-border focus:border-accent/50 focus:outline-none transition-colors text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-bg border border-border focus:border-accent/50 focus:outline-none transition-colors text-sm"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-bg border border-border focus:border-accent/50 focus:outline-none transition-colors text-sm resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                {status === 'error' && (
                  <p className="text-xs text-red-400">Something went wrong. Please email me directly at {siteInfo.email}</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-bg font-semibold rounded-full hover:bg-accent-dim transition-colors glow-accent disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <><Loader2 size={18} className="animate-spin" /> Sending…</>
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  )
}
