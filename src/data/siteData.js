export const headshots = [
  '/images/headshot-1.jpg',
  '/images/headshot-2.jpg',
  '/images/headshot-3.jpg',
]

export const stats = [
  { value: '12+', label: 'Projects Completed' },
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
    image: '/images/project-1.svg',
    video: '/videos/dermalyze.mp4',
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
    image: '/images/project-2.svg',
    video: '/videos/deepfake-demo.mp4',
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
    id: 3,
    title: 'Predictive Analytics Dashboard',
    description: 'ML-powered analytics dashboard with forecasting models and interactive data visualizations.',
    tags: ['Python', 'TensorFlow', 'D3.js'],
    image: '/images/project-3.svg',
    featured: true,
  },
  {
    id: 4,
    title: 'E-Commerce AI Engine',
    description: 'Recommendation engine and personalization system for e-commerce with A/B testing integration.',
    tags: ['Node.js', 'MongoDB', 'React'],
    image: '/images/project-4.svg',
    featured: true,
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
  bio: 'BS Artificial Intelligence student passionate about building smart, full-stack applications — from intelligent chatbots to AI-driven features that solve real problems elegantly.',
  aboutHeading: 'Building the future with AI & Full Stack Development.',
  aboutText: 'I am a BS Artificial Intelligence student at NUML, Pakistan, with 2+ years of hands-on experience building AI-powered systems and full-stack applications. I have a deep passion for creating intelligent solutions — whether that is an AI chatbot, a smart recommendation engine, an ML-powered mobile app, or any system where I can think through what it could be and engineer the best way to make it real. I love the intersection of AI and software engineering, and I thrive when turning ideas into production-ready products.',
  email: 'noor.fatima.082004@gmail.com',
  phone: '+923128315415',
  location: 'Pakistan, Punjab',
  linkedin: 'https://www.linkedin.com/in/noor-fatima-747527319',
  github: 'https://github.com/noorfatima082004-coder',
  availability: 'Available for Freelance & Full-time',
  quote: 'I don\'t just write code — I engineer intelligence.',
  cvPath: '/cv/noor-fatima-cv.html',
}
