export const headshots = [
  '/images/headshot-1.jpg',
  '/images/headshot-2.jpg',
]

export const stats = [
  { value: '15+', label: 'Projects Completed' },
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Happy Clients' },
  { value: '5+', label: 'ML Models Deployed' },
]

export const techStack = [
  { name: 'Python', color: '#3776AB' },
  { name: 'TensorFlow', color: '#FF6F00' },
  { name: 'PyTorch', color: '#EE4C2C' },
  { name: 'React', color: '#61DAFB' },
  { name: 'FastAPI', color: '#009688' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'Keras', color: '#D00000' },
  { name: 'Supabase', color: '#3ECF8E' },
  { name: 'OpenCV', color: '#5C3EE8' },
  { name: 'Firebase', color: '#FFCA28' },
]

export const aboutFeatures = [
  {
    title: 'AI Systems Builder',
    description: 'I love building AI-powered systems — from intelligent chatbots to full-stack apps with smart features baked in.',
  },
  {
    title: 'Creative Problem Solver',
    description: 'I think through what a system could be, then engineer the best solution to make it real.',
  },
  {
    title: 'Full Stack + AI',
    description: 'I bridge the gap between ML models and production-ready interfaces — backend, frontend, and everything in between.',
  },
]

export const skills = [
  {
    category: 'AI & Machine Learning',
    icon: 'brain',
    tools: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'OpenCV', 'Whisper', 'Wav2Vec', 'MediaPipe'],
  },
  {
    category: 'AI Integrations',
    icon: 'brain',
    tools: ['OpenAI API', 'Gemini API', 'LangChain', 'AI Chatbots', 'RAG Pipelines', 'FastAPI Inference'],
  },
  {
    category: 'Languages',
    icon: 'wrench',
    tools: ['Python', 'JavaScript', 'C', 'C++', 'Java', 'Kotlin'],
  },
  {
    category: 'Web & Full Stack',
    icon: 'globe',
    tools: ['React.js', 'Node.js', 'FastAPI', 'Django', 'REST APIs'],
  },
  {
    category: 'Mobile Development',
    icon: 'smartphone',
    tools: ['Flutter', 'React Native', 'Kotlin (Android)'],
  },
  {
    category: 'Cloud & Storage',
    icon: 'cloud',
    tools: ['Firebase', 'Supabase', 'Cloudinary', 'AWS S3'],
  },
  {
    category: 'Databases',
    icon: 'database',
    tools: ['MongoDB', 'PostgreSQL', 'Firebase Firestore', 'MySQL'],
  },
  {
    category: 'Tools & Libraries',
    icon: 'wrench',
    tools: ['Git', 'Jupyter', 'Google Colab', 'Postman', 'VS Code', 'NumPy', 'Pandas', 'Matplotlib'],
  },
]

export const projects = [
  {
    id: 1,
    title: 'Dermalyze — Skin Disease Detection',
    description: 'Medical-tech system using Deep Learning to classify skin conditions from user-uploaded images with AI-driven care recommendations.',
    tags: ['ResNet50', 'FastAPI', 'React.js', 'Firebase'],
    image: '/images/dermalyze-thumbnail.jpg',
    youtube: 'https://www.youtube.com/embed/8UQml_qvUPo',
    featured: true,
    details: [
      'Overview: Built a medical-tech system using Deep Learning to classify skin conditions from user-uploaded images.',
      'Architecture: Leveraged ResNet50 for high-accuracy multi-class image analysis; deployed inference via a FastAPI backend with a React.js frontend.',
      'AI Integration: Integrated Firebase Authentication for secure access and generated AI-driven care recommendations based on prediction confidence scores.',
    ],
  },
  {
    id: 2,
    title: 'Deepfake Urdu Detection',
    description: 'Research project on audiovisual fake face (AVFF) detection for Urdu-language media using multimodal deep learning and facial analysis.',
    tags: ['Python', 'DeepFace', 'Wav2Vec', 'Multimodal'],
    image: '/images/deepfake-thumbnail.jpg',
    youtube: 'https://www.youtube.com/embed/s5ofqU761aI',
    featured: true,
    isResearch: true,
    details: [
      'Built the first deepfake detection system targeting Urdu — a language with 70M+ native speakers and zero prior detection research across 100 surveyed papers.',
      'Curated a novel 230-clip Urdu audio-visual dataset (120 real + 110 synthetic) using Whisper transcription, Edge TTS (4 Urdu voices), and Wav2Lip lip-sync generation.',
      'Adapted the AVFF architecture with a re-wired cross-modal attention mechanism (audio as query, visual as keys/values) using EfficientNet-B4 for video and a 4-block 2D-CNN for audio (MFCCs).',
      'Achieved 94.3% accuracy and 0.984 ROC-AUC on the held-out test set; cross-modal attention outperformed naive late-fusion by 26 percentage points.',
      'Deployed as a FastAPI inference service processing each clip in 18ms on a Tesla T4; rigorously evaluated with 5-fold cross-validation and bootstrap confidence intervals.',
    ],
    role: 'Co-author · National University of Modern Languages, Faisalabad · 2024–2025',
  },
  {
    id: 4,
    title: 'Plantey — Plant Leaf Disease Detection',
    description: 'Android app that detects plant leaf diseases in real time using an on-device ML model. Point your camera at any leaf and get an instant AI diagnosis with treatment recommendations.',
    tags: ['Java', 'Kotlin', 'Android', 'ML Model', 'Firebase', 'XML'],
    image: '/images/plantey/p1.png',
    images: [
      '/images/plantey/p1.png',
      '/images/plantey/p2.png',
      '/images/plantey/p3.png',
      '/images/plantey/p4.png',
      '/images/plantey/p5.png',
      '/images/plantey/p6.png',
      '/images/plantey/p7.png',
      '/images/plantey/p8.png',
      '/images/plantey/p9.png',
    ],
    featured: true,
    details: [
      'Platform: Native Android app built with Java and Kotlin; UI crafted in XML following Material Design guidelines for a clean, accessible experience.',
      'ML Integration: Deployed a trained multi-class image classification model on-device using TensorFlow Lite — enabling real-time disease recognition with zero latency, even offline.',
      'Detection Scope: Identifies a range of leaf diseases across common crops, returning a confidence score and specific treatment recommendations for each detected condition.',
      'Backend: Firebase Authentication manages user accounts; Firestore stores scan history and results so users can track plant health over time.',
      'Camera Pipeline: Built on Android CameraX API for smooth live preview with a real-time inference pipeline — tap to scan any leaf and get results in under a second.',
    ],
  },
  {
    id: 5,
    title: 'AI Air Canvas — Gesture-Controlled Virtual Drawing',
    description: 'A touchless drawing system that turns hand movements into digital ink using real-time computer vision, hand landmark detection, and gesture recognition — refined with Kalman filtering for jitter-free strokes, and extended with OCR and automatic PDF generation to turn mid-air handwriting into a shareable document. A hands-free take on human-computer interaction (HCI).',
    tags: ['Computer Vision', 'Hand Landmark Detection', 'Gesture Recognition', 'Kalman Filtering', 'OCR', 'PDF Generation', 'Real-time Image Processing', 'Human-Computer Interaction (HCI)'],
    image: '/images/air-canvas-thumbnail.jpg',
    youtube: 'https://www.youtube.com/embed/WRvCpZ7fHig',
    featured: true,
    details: [
      'Overview: A touchless, gesture-controlled drawing system that turns hand movements captured via webcam into smooth digital strokes — no mouse, stylus, or keyboard involved.',
      'Hand Tracking: Built on OpenCV and MediaPipe Hand Landmark detection for real-time fingertip tracking, refined with Kalman filtering and weighted moving-average smoothing to eliminate shaky, zig-zag lines.',
      'Gesture Controls: Distinct hand poses drive every tool switch — pinch-to-zoom on the canvas, a two-finger gesture to summon the color palette, an open flat palm to auto-activate the eraser, and a closed-fist hold to capture the canvas.',
      'OCR Pipeline: On capture, the canvas snapshot is preprocessed (grayscale conversion, thresholding, denoising) and passed through the Tesseract OCR engine via pytesseract to convert hand-drawn text into machine-readable output.',
      'Export: Automatically generates a PDF combining the OCR-extracted text with the canvas snapshot using Pillow and fpdf2 — turning mid-air handwriting into a shareable document in one gesture.',
    ],
  },
  {
    id: 3,
    title: 'RPA Insurance Policy Document Classification System',
    description: 'An automated AI pipeline that eliminates manual document handling in the insurance lifecycle — from multi-channel ingestion and OCR extraction to AI classification and real-time dashboard monitoring.',
    tags: ['RPA', 'OCR', 'AI Classification', 'React.js', 'FastAPI', 'Python'],
    image: '/images/rpa-insurance-thumbnail.jpg',
    youtube: 'https://www.youtube.com/embed/AvUUlnB4LZ0',
    featured: true,
    details: [
      'Ingestion: Captures documents from web portals and emails with initial validation — replacing error-prone manual sorting entirely.',
      'OCR + Classification: Advanced OCR converts scanned PDFs and images to machine-readable text; a core AI engine then classifies insurance products (Life, Health, Motor) with 90%+ accuracy.',
      'Orchestration: Jobs are auto-routed to department queues by confidence score; low-confidence documents are flagged for Human-in-the-Loop review to maintain audit-readiness.',
      'Monitoring: A React-based dashboard gives operations teams real-time visibility into throughput, queue volumes, and performance metrics.',
      'Impact: Modular architecture achieves 80%+ reduction in manual sorting time; decoupled frontend/backend ensures independent scalability as the organisation grows.',
    ],
  },
  {
    id: 6,
    title: 'AI Content Toolkit — Plagiarism, Summarization & Paraphrasing',
    description: 'An all-in-one AI writing assistant delivered for an Upwork client — detects plagiarism, summarizes long documents, converts PDFs into editable Word files, and rephrases text to improve originality, all from a single streamlined tool.',
    tags: ['Python', 'NLP', 'Plagiarism Detection', 'Text Summarization', 'PDF to DOCX', 'Paraphrasing'],
    image: '/images/ai-plagiarism-thumbnail.jpg',
    featured: true,
    details: [
      'Plagiarism Detection: Scans submitted text and flags duplicated or unoriginal content with a similarity score, helping writers verify originality before submission.',
      'Text Summarization: Condenses long-form documents into accurate, concise summaries using NLP-based extraction, saving reviewers time on lengthy content.',
      'PDF to Word Conversion: Converts PDF files into fully editable, correctly formatted Word (.docx) documents — no manual retyping required.',
      'Paraphrasing Engine: Rewrites input text to improve originality and readability while preserving the original meaning, ideal for reworking flagged content.',
      'Delivery: Built and delivered as a freelance solution on Upwork, packaged into a single, non-technical-friendly workflow covering the full document lifecycle.',
    ],
  },
  {
    id: 7,
    title: 'Real-Time Messenger — WhatsApp-Style Chat App',
    description: 'A full-stack real-time messaging application with WhatsApp-style delivery ticks, live presence, typing indicators, and media sharing — built with Socket.io and a JWT-secured REST API for secure, scalable one-to-one chat.',
    tags: ['Socket.io', 'Node.js', 'JWT Auth', 'WebSockets', 'REST API', 'Real-time Messaging'],
    image: '/images/messenger-thumbnail.jpg',
    youtube: 'https://www.youtube.com/embed/d9ttLvFYH4U',
    featured: true,
    details: [
      'Real-time Messaging: One-to-one chat powered by Socket.io with instant delivery, WhatsApp-style ticks (sent/delivered/seen), live online/offline presence with last-seen, and typing indicators.',
      'Media Sharing: Supports image, voice note, and document sharing, with message pin, edit, and delete controls governed by a time-window policy, plus full emoji support.',
      'Security: JWT-secured REST API with token-verified WebSocket connections, rate-limited endpoints, and file-type/size validation on every upload.',
      'Architecture: Clean separation between auth, data, and storage layers for a scalable, maintainable backend.',
      'UI: Fully responsive, mobile-first interface designed for a smooth chat experience across devices.',
    ],
  },
]

export const research = [
  {
    id: 1,
    title: 'Audiovisual Fake Face (AVFF) Detection for Urdu Language Media',
    abstract: 'A multimodal deep learning approach to detect deepfake videos in Urdu-language content by combining facial analysis (DeepFace), audio processing (Wav2Vec), and temporal inconsistency detection. The system achieves high accuracy on fabricated Urdu-language media and contributes to combating AI-generated misinformation in regional contexts.',
    tags: ['Deepfake Detection', 'Multimodal AI', 'NLP', 'Urdu', 'Computer Vision'],
    status: 'Research Project',
    year: '2024–2026',
    institution: 'NUML (National University of Modern Languages)',
    highlights: [
      'Multimodal fusion of audio and visual deepfake cues',
      'Urdu-language dataset collection and annotation',
      'Wav2Vec for speech-level artifact detection',
      'DeepFace for facial manipulation analysis',
      'AVFF framework adapted for regional media',
    ],
  },
]

export const testimonials = [
  {
    id: 1,
    quote: 'Noor delivered an exceptional AI solution that transformed our workflow. Her technical expertise and attention to detail exceeded our expectations.',
    name: 'David Johnson',
    role: 'CTO, TechVentures Inc.',
  },
  {
    id: 2,
    quote: 'Working with Noor was a game-changer. She built a scalable ML pipeline that reduced our processing time by 60%. Highly recommended!',
    name: 'Sarah Mitchell',
    role: 'Product Lead, DataFlow Systems',
  },
  {
    id: 3,
    quote: 'Outstanding developer with deep AI knowledge. Noor turned our vision into a production-ready platform ahead of schedule.',
    name: 'James Chen',
    role: 'Founder, InnovateAI Labs',
  },
]

export const experience = [
  {
    id: 1,
    role: 'Backend AI Engineer',
    company: 'FlyRank AI — Chicago, USA',
    period: '2024 — Present',
    description: 'Working remotely with a Chicago-based AI company on backend AI engineering — building and integrating intelligent systems, APIs, and AI-powered features into production pipelines.',
  },
  {
    id: 2,
    role: 'AI/ML Engineer (Freelance)',
    company: 'Self-Employed',
    period: '2024 — Present',
    description: 'Delivering AI-powered full-stack applications, ML models, and intelligent chatbots for clients — spanning React Native, FastAPI, Firebase, Supabase, and Cloudinary integrations.',
  },
  {
    id: 3,
    role: 'Android App Development Intern',
    company: 'Tech Hub Institute, Faisalabad',
    period: '2024 (3 months)',
    description: 'Built and deployed Android applications using Java and Kotlin with Firebase backend integration. Applied Material Design principles and collaborated on real client projects.',
  },
  {
    id: 4,
    role: 'BS Artificial Intelligence',
    company: 'NUML — National University of Modern Languages, Faisalabad',
    period: '2024 — Present',
    description: 'CGPA 3.85/4.0 across four semesters. Coursework: Deep Learning, NLP, Computer Vision, Database Systems, Data Structures. Co-authored research on cross-modal deepfake detection in Urdu.',
  },
]

export const blogPosts = [
  {
    id: 1,
    title: 'Deepfake Detection in Regional Languages: Challenges & Approaches',
    excerpt: 'Exploring multimodal techniques for detecting AI-generated fake content in Urdu and other low-resource languages.',
    date: 'Jun 15, 2026',
    readTime: '8 min read',
    tag: 'Research',
  },
  {
    id: 2,
    title: 'Building ML Detection Systems from Scratch',
    excerpt: 'A step-by-step guide to designing, training, and deploying machine learning detection pipelines for real-world use cases.',
    date: 'May 28, 2026',
    readTime: '6 min read',
    tag: 'ML',
  },
  {
    id: 3,
    title: 'From Jupyter to Production: Deploying ML Models with FastAPI',
    excerpt: 'How to wrap your trained model in a FastAPI service and deploy it reliably with proper versioning and monitoring.',
    date: 'May 10, 2026',
    readTime: '5 min read',
    tag: 'MLOps',
  },
]

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Research', path: '/research' },
  { name: 'Experience', path: '/experience' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

export const siteInfo = {
  name: 'NOOR FATIMA',
  title: 'AI-Powered Full Stack Developer',
  tagline: 'AI-Powered Full Stack Developer',
  headline: 'I build AI-powered systems that',
  headlineAccent: 'create impact.',
  bio: 'AI Engineer passionate about building smart, full-stack applications — from intelligent chatbots to AI-driven features that solve real problems elegantly.',
  aboutHeading: 'Building the future with AI & Full Stack Development.',
  aboutText: 'I am an AI Engineer at NUML, Pakistan, with 2+ years of hands-on experience building AI-powered systems and full-stack applications. I have a deep passion for creating intelligent solutions — whether that is an AI chatbot, a smart recommendation engine, an ML-powered mobile app, or any system where I can think through what it could be and engineer the best way to make it real. I love the intersection of AI and software engineering, and I thrive when turning ideas into production-ready products.',
  email: 'noor.fatima.082004@gmail.com',
  phone: '+923128315415',
  location: 'Pakistan, Punjab',
  linkedin: 'https://www.linkedin.com/in/noor-fatima-747527319',
  github: 'https://github.com/noorfatima082004-coder',
  fiverr: 'https://www.fiverr.com/s/KeAZG98',
  availability: 'Available for Freelance & Full-time',
  quote: 'I don\'t just write code — I engineer intelligence.',
  cvPath: '/cv/noor-fatima-cv.html',
}
