import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Loader2, Bot } from 'lucide-react'

const SYSTEM_PROMPT = `You are Noor's AI assistant on her personal portfolio website. You help visitors learn about Noor Fatima — an AI Engineer and AI-Powered Full Stack Developer from Faisalabad, Pakistan.

ABOUT NOOR:
- BS Artificial Intelligence at NUML (National University of Modern Languages), Faisalabad — CGPA 3.85/4.0
- 2+ years of hands-on experience across multiple AI-based projects and e-commerce development sites (live and delivered)
- A real estate platform is currently in development — coming soon
- Currently Backend AI Engineer at FlyRank AI, Chicago (remote)
- Passionate about AI chatbots, LLM integrations, ML-powered apps
- Location: Faisalabad, Punjab, Pakistan

CONTACT: noor.fatima.082004@gmail.com | WhatsApp: +923128315415
LinkedIn: linkedin.com/in/noor-fatima-747527319 | GitHub: github.com/noorfatima082004-coder

SKILLS: TensorFlow, PyTorch, Keras, OpenCV, Whisper, React.js, React Native, FastAPI, Node.js, Firebase, Supabase, Cloudinary, MongoDB, Java, Kotlin, Python, JavaScript, C, C++, OpenAI API, Gemini API, LangChain, AI Chatbots, RAG

PROJECTS (AI-based): Dermalyze (AI skin disease detection), Plantey (Android plant disease detection), RPA Insurance Policy Document Classification, AI Air Canvas (gesture-controlled drawing with OCR), AI Content Toolkit (plagiarism detection, summarization, PDF-to-Word conversion, paraphrasing). Also built a Real-Time Messenger — a WhatsApp-style chat app with Socket.io messaging, delivery ticks, live presence, typing indicators, media sharing, and a JWT-secured REST API. Noor has also delivered multiple e-commerce development sites for clients. A real estate platform is in the pipeline — coming soon.

RESEARCH & PUBLICATIONS: Co-authored research on Audiovisual Fake Face (AVFF) Detection for Urdu-language media — the first deepfake detection system targeting Urdu (70M+ speakers). Achieved 94.3% accuracy and 0.984 ROC-AUC using a multimodal deep learning approach (EfficientNet-B4 for video, a 2D-CNN for audio/MFCCs, and cross-modal attention). The paper is currently being prepared for publication and should be published soon.

EXPERIENCE: Backend AI Engineer at FlyRank AI, Chicago (2024–Present); Freelance AI/ML Engineer with 2+ years across multiple AI projects and e-commerce sites (real estate project coming soon); Android Development Intern at Tech Hub Institute.

AVAILABILITY: Available for freelance projects and full-time roles.
PRICING: Market-competitive but negotiable — depends on project scope.

RULES:
- Be concise, warm, and professional. Max 3-4 sentences.
- If asked about price/cost/rate, say pricing is market-competitive but negotiable depending on project scope, and suggest contacting via WhatsApp for a quote.
- If asked how to hire, share email and WhatsApp contact.
- If asked whether projects are available or how to see them, say yes and tell them to check the Projects section (or the /projects page) on this site and click any project card for full details and demo videos — do NOT share email or WhatsApp contact in that reply.
- If asked about research or publications, describe the Urdu deepfake detection work and mention the paper is being prepared and will be published soon.
- If asked about experience, mention 2+ years, multiple AI-based projects, live e-commerce development sites, and that a real estate project is coming soon.
- If asked something totally unrelated, politely redirect to Noor's portfolio topics.`

const WELCOME = "Hi! 👋 I'm Noor's AI assistant. Ask me anything about her skills, projects, availability, or how to work with her!"

const QUICK_OPTIONS = [
  { label: '🧠 Skills', query: 'What are your skills?' },
  { label: '🚀 Projects', query: 'What projects have you built?' },
  { label: '📄 Research & Publications', query: 'Tell me about your research and publications' },
  { label: '💼 Experience', query: 'Tell me about your experience' },
]

// Smart fallback — works without API key. Order matters: specific intents are
// checked before broad ones so a bare "project" mention can't get swallowed
// by the hire/contact branches.
function smartFallback(text) {
  const q = text.toLowerCase()

  if (/price|cost|rate|charg|fee|how much|budget|quote/.test(q))
    return "Noor's pricing is market-competitive but negotiable, depending on the project's scope and timeline. Reach out on WhatsApp at +923128315415 or email noor.fatima.082004@gmail.com for a custom quote! 😊"

  if (/research|publication|paper|deepfake|urdu/.test(q))
    return "Noor co-authored research on Audiovisual Fake Face (AVFF) Detection for Urdu-language media — the first deepfake detection system built for Urdu (70M+ speakers), achieving 94.3% accuracy and 0.984 ROC-AUC with a multimodal deep learning approach (EfficientNet + Wav2Vec). The paper is currently being prepared and should be published soon! 📄"

  if (/experience|flyrank|chicago|career|background/.test(q))
    return "Noor has 2+ years of hands-on experience building multiple AI-based projects and e-commerce development sites — several of which are already live. She's currently a Backend AI Engineer at FlyRank AI (Chicago, remote), and a real estate platform is currently in development, coming soon! 💼"

  if (/project/.test(q) && /avail|see|view|show|browse|check|demo|list/.test(q))
    return "Yes! Noor has several live projects on this site — head to the Projects section (or the /projects page) to browse all of them. Click any project card to see full details, tech stack, and demo videos. 🚀"

  if (/hire|work with|collab|freelanc/.test(q))
    return "Noor is available for freelance projects and full-time roles! 🚀 You can reach her at noor.fatima.082004@gmail.com or WhatsApp +923128315415. She's open to AI, full-stack, mobile, and chatbot projects."

  if (/dermalyze|skin|disease|medical/.test(q))
    return "Dermalyze is an AI-powered medical-tech app that classifies skin conditions from photos using ResNet50 deep learning. It's built with FastAPI, React.js, and Firebase — with AI-driven care recommendations. 🏥"

  if (/plantey|plant|android/.test(q))
    return "Plantey is an Android app that detects plant diseases in real-time using an on-device TensorFlow Lite model — no internet needed! Built with Java and Firebase. 🌿"

  if (/rpa|insurance|document classification/.test(q))
    return "The RPA Insurance project is an automated AI pipeline that eliminates manual document handling — multi-channel ingestion, OCR extraction, AI classification, and a real-time monitoring dashboard, cutting manual sorting time by 80%+. 📑"

  if (/air canvas|gesture|hand tracking|kalman/.test(q))
    return "AI Air Canvas is a touchless drawing system that turns hand movements into digital ink using OpenCV and MediaPipe hand tracking, stabilized with Kalman filtering — with OCR that converts mid-air handwriting into an exportable PDF. ✋"

  if (/plagiar|summar|paraphrase|rephrase/.test(q))
    return "Noor built an AI Content Toolkit that detects plagiarism, summarizes long documents, converts PDFs into editable Word files, and rephrases text to improve originality — delivered as a freelance project. 📝"

  if (/messenger|chat app|whatsapp|socket\.?io|real-?time messag/.test(q))
    return "Noor built a Real-Time Messenger — a WhatsApp-style chat app with Socket.io messaging, delivery ticks (sent/delivered/seen), live presence, typing indicators, and image/voice/document sharing, secured with a JWT-based REST API and token-verified WebSockets. Open to building custom chat features into your product too! 💬"

  if (/property|real estate|propertybazar/.test(q))
    return "A real estate platform is currently in development — coming soon! In the meantime, Noor has delivered multiple AI-based projects and e-commerce sites. Stay tuned. 🏠"

  if (/ecommerce|e-commerce|online store|shop/.test(q))
    return "Noor has built and delivered multiple e-commerce development sites for clients — covering everything from product catalogs to checkout flows and admin dashboards. 🛒"

  if (/project|built|made|portfolio|showcase/.test(q))
    return "Noor has built multiple AI-based projects — Dermalyze (skin disease detection), Plantey (plant disease Android app), an RPA insurance document classification system, AI Air Canvas, an AI content toolkit, and a real-time WhatsApp-style messenger app — plus several e-commerce development sites, with a real estate platform coming soon. Click any project card to explore details and demo videos! 🎬"

  if (/skill|know|tech|stack|language|tool|framework/.test(q))
    return "Noor works with Python, JavaScript, Java, Kotlin, TensorFlow, PyTorch, Keras, OpenCV, React.js, React Native, FastAPI, Firebase, Supabase, Cloudinary, MongoDB, OpenAI API, LangChain and more. She specialises in AI integrations and full-stack development! 🧠"

  if (/contact|reach|email|whatsapp|phone|message/.test(q))
    return "You can contact Noor at:\n📧 noor.fatima.082004@gmail.com\n📱 WhatsApp: +923128315415\n💼 linkedin.com/in/noor-fatima-747527319"

  if (/education|degree|numl|university|student|cgpa/.test(q))
    return "Noor is pursuing BS Artificial Intelligence at NUML, Faisalabad with a 3.85 CGPA. She's passionate about AI systems, chatbots, and full-stack development! 🎓"

  if (/chatbot|ai assistant|llm|openai|gemini/.test(q))
    return "Yes! Building intelligent chatbots and LLM-powered features is one of Noor's passions. She works with OpenAI API, Gemini API, LangChain, and RAG pipelines to create smart, context-aware AI systems. 🤖"

  if (/hello|hi|hey|salam|assalam/.test(q))
    return "Hello! 👋 I'm here to tell you all about Noor — her projects, skills, and how to work with her. What would you like to know?"

  if (/thank|shukriya|thanks/.test(q))
    return "You're welcome! 😊 Feel free to ask anything else, or reach out to Noor directly at noor.fatima.082004@gmail.com"

  return "Great question! I can share details about Noor's skills, projects, and work experience — just ask me about any of those. For more specific details about Noor herself, you'll need to reach her directly on WhatsApp at +923128315415 or email noor.fatima.082004@gmail.com. 😊"
}

async function askGemini(messages) {
  const contents = messages.map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }]
  }))

  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents
    })
  })
  if (!res.ok) return null
  const data = await res.json()
  return data.text || null
}

function Bubble({ msg }) {
  const isBot = msg.role === 'assistant'
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-3`}>
      {isBot && (
        <div className="w-7 h-7 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center mr-2 shrink-0 mt-0.5">
          <Bot size={14} className="text-accent" />
        </div>
      )}
      <div
        className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
          isBot
            ? 'bg-bg-elevated border border-border text-text rounded-tl-sm'
            : 'bg-accent text-bg font-medium rounded-tr-sm'
        }`}
      >
        {msg.content}
      </div>
    </div>
  )
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: 'assistant', content: WELCOME }])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300)
  }, [open])

  const sendMessage = async (text) => {
    if (!text || loading) return
    setInput('')

    const updated = [...messages, { role: 'user', content: text }]
    setMessages(updated)
    setLoading(true)

    try {
      // Try real AI first, fallback to smart responses
      const aiReply = await askGemini(updated)
      const reply = aiReply || smartFallback(text)
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: smartFallback(text) }])
    } finally {
      setLoading(false)
    }
  }

  const send = () => sendMessage(input.trim())

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() }
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-lg glow-accent hover:scale-110 transition-transform"
        whileTap={{ scale: 0.95 }}
        title="Chat with Noor's AI assistant"
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><X size={22} className="text-bg" /></motion.span>
            : <motion.span key="chat" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}><MessageCircle size={24} className="text-bg" /></motion.span>
          }
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-40 w-[340px] sm:w-[380px] rounded-2xl bg-bg-card border border-border shadow-2xl flex flex-col overflow-hidden"
            style={{ height: 'min(480px, calc(100vh - 140px))' }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-bg-elevated">
              <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
                <Bot size={16} className="text-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold">Noor's AI Assistant</p>
                <p className="text-[10px] text-accent flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow inline-block" />
                  Online — ask me anything
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4">
              {messages.map((m, i) => <Bubble key={i} msg={m} />)}
              {loading && (
                <div className="flex justify-start mb-3">
                  <div className="w-7 h-7 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center mr-2 shrink-0">
                    <Bot size={14} className="text-accent" />
                  </div>
                  <div className="px-3.5 py-3 rounded-2xl rounded-tl-sm bg-bg-elevated border border-border flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Footer: quick options + input */}
            <div className="border-t border-border bg-bg-elevated">
              <div className="px-3 pt-2.5 flex flex-wrap gap-1.5">
                {QUICK_OPTIONS.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => sendMessage(opt.query)}
                    disabled={loading}
                    className="px-2.5 py-1 text-[11px] rounded-full bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              <div className="p-3 flex gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Ask about skills, projects, hiring…"
                  disabled={loading}
                  className="flex-1 px-3 py-2 text-sm rounded-xl bg-bg border border-border focus:border-accent/50 focus:outline-none transition-colors disabled:opacity-50"
                />
                <button
                  onClick={send}
                  disabled={!input.trim() || loading}
                  className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center hover:bg-accent-dim transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                >
                  {loading
                    ? <Loader2 size={16} className="text-bg animate-spin" />
                    : <Send size={15} className="text-bg" />
                  }
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
