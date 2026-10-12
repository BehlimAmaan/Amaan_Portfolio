export const siteConfig = {
  name: 'Amaan Behlim',
  title: 'AI/ML Engineer',
  subtitle: 'Generative AI · LLM · RAG · Machine Learning',
  description:
    'AI/ML Engineer with 2+ years of experience building practical solutions in machine learning, deep learning, NLP, and generative AI. Experienced in LLMs, RAG, AI agents, and intelligent automation using Python and modern AI frameworks, from model development and optimization through deployment.',
  url: 'https://amaan-portfolio-blond.vercel.app',
  location: 'Dubai, UAE',
  phone: '+971 55 941 4490',
  email: 'itzamaanbehlim45@gmail.com',
  availability: 'Open to AI/ML opportunities',
  github: 'https://github.com/BehlimAmaan',
  linkedin: 'https://www.linkedin.com/in/amaanbehlim/',
}

export const socialLinks = [
  { label: 'GitHub', href: siteConfig.github, type: 'github' },
  { label: 'LinkedIn', href: siteConfig.linkedin, type: 'linkedin' },
]

export const workLocations = [
  { lat: 19.076, lng: 72.8777, src: '/profile_pic.jpeg', label: 'Mumbai, India' },
]

export const achievements = [
  { title: 'Computer vision', description: 'Built AI identity and liveness verification for smart attendance, reaching 89% accuracy with a MiniFASNetV2 anti-spoofing model.' },
  { title: 'AI exam proctoring', description: 'Developed real-time face, multiple-person, phone/object, and head-movement monitoring with 92% detection accuracy.' },
  { title: 'Grounded document answers', description: 'Created a document RAG pipeline with recursive chunking, Sentence Transformers embeddings, ChromaDB retrieval, and Gemini responses.' },
  { title: 'Applied ML experience', description: 'Worked across predictive modeling, NLP, deep learning, generative AI, and recommendation systems.' },
]

export const experience = [
  {
    company: 'MAK {Byte}', link: 'https://www.makbyte.io/', title: 'AI/ML Engineer · Full Time', location: 'India', projects: 'Smart Attendance · Document RAG · AI Exam Proctoring',
    logo: '/images/makbyte.jpeg',
    start: 'Jun 2024', end: 'Present', highlights: [
      'Developed a smart attendance system with Python, Django REST Framework, PostgreSQL, OpenCV, and a PyTorch MiniFASNetV2 anti-spoofing CNN; identity and liveness verification reached 89% accuracy.',
      'Built a business-document RAG system with LangChain, Gemini, Sentence Transformers, and ChromaDB for context-aware question answering.',
      'Implemented document ingestion, recursive chunking, semantic embeddings, vector search, and grounded LLM responses.',
      'Developed a real-time AI exam proctoring system with YOLO, OpenCV, MediaPipe, and CNN vision techniques, reaching 92% detection accuracy.',
    ],
  },
  {
    company: 'Wow Infobiz', link: 'https://wowinfobiz.com/', title: 'Machine Learning Engineer · Internship', location: 'India', projects: 'Machine Learning · NLP · Generative AI · RAG',
    logo: '/images/wowInfobiz.jpeg',
    start: 'Jan 2024', end: 'May 2024', highlights: [
      'Contributed to machine learning, deep learning, NLP, generative AI, and RAG applications, including an LLM-powered career coach and recommendation systems.',
      'Implemented regression, tree-based, ensemble, CNN, and RNN models for prediction and classification tasks.',
      'Performed data preprocessing, feature engineering, model training, evaluation, and optimization using Python and ML frameworks.',
    ],
  },
]

export const projects = [
  {
    name: 'Multi-Agent Research Assistant',
    description: 'A multi-agent research assistant that automates web research, information retrieval, analysis, and report generation. Uses a RAG pipeline to answer with context from retrieved information.',
    link: { href: 'https://github.com/BehlimAmaan/An-AI-powered-research-assistant-', label: 'View on GitHub' },
    tags: ['Python', 'LangGraph', 'LangChain', 'Gemini', 'RAG', 'ChromaDB', 'Hugging Face'],
  },
  {
    name: 'AI Video RAG Chatbot',
    description: 'An AI video assistant that transcribes audio/video with Whisper and lets users query the transcript in a conversational RAG interface, with summarization and key information extraction.',
    link: { href: 'https://github.com/BehlimAmaan/AI-Video-Chat-Bot-using-RAG', label: 'View on GitHub' },
    tags: ['Python', 'Whisper', 'LangChain', 'ChromaDB', 'Hugging Face', 'RAG', 'Streamlit'],
  },
  {
    name: 'AI Movie Recommendation System',
    description: 'A content-based movie recommender built from a dataset of 45,000+ movies. Applies TF-IDF and cosine similarity to movie metadata to find similar titles and generate recommendations.',
    link: { href: 'https://moviemind-ai.streamlit.app/', label: 'Open app' },
    tags: ['Python', 'Pandas', 'Scikit-learn', 'NLP', 'TF-IDF', 'Cosine Similarity', 'Streamlit'],
  },
  {
    name: 'Smart Attendance System',
    description: 'An AI-powered attendance system with identity and liveness verification. Uses OpenCV and a PyTorch MiniFASNetV2 anti-spoofing CNN to help prevent unauthorized attendance.',
    link: { href: '#', label: 'Professional project' },
    tags: ['Python', 'Django REST Framework', 'PostgreSQL', 'OpenCV', 'PyTorch', 'CNN'],
  },
  {
    name: 'AI Exam Proctoring System',
    description: 'A real-time computer vision proctoring system that detects faces, multiple people, phones and objects, and head movement to monitor examination sessions automatically.',
    link: { href: '#', label: 'Professional project' },
    tags: ['Python', 'YOLO', 'OpenCV', 'MediaPipe', 'CNN', 'Computer Vision'],
  },
  {
    name: 'RAG Document Retrieval System',
    description: 'A context-aware question-answering system for business documents, combining document ingestion and chunking with semantic embeddings, vector search, and Gemini response generation.',
    link: { href: '#', label: 'Professional project' },
    tags: ['Python', 'LangChain', 'Gemini', 'Sentence Transformers', 'ChromaDB', 'RAG'],
  },
]

export const skillCategories = [
  { id: 'ai', label: 'AI // GENERATIVE AI & LLM', color: 'indigo', items: [
    { id: 1, name: 'Generative AI', designation: 'LLM applications', shortName: 'GEN AI' },
    { id: 2, name: 'LLMs', designation: 'Prompt engineering', shortName: 'LLM' },
    { id: 3, name: 'RAG', designation: 'Retrieval pipelines', shortName: 'RAG' },
    { id: 4, name: 'LangChain', designation: 'LLM orchestration', iconKey: 'langchain' },
    { id: 5, name: 'LangGraph', designation: 'Multi-agent workflows', iconKey: 'langgraph' },
    { id: 6, name: 'Hugging Face', designation: 'Transformers & models', iconKey: 'huggingface' },
    { id: 7, name: 'Gemini', designation: 'Generative models', iconKey: 'gemini' },
    { id: 8, name: 'ChromaDB & FAISS', designation: 'Vector retrieval', shortName: 'VECTOR DB' },
  ] },
  { id: 'ml', label: 'ML // MACHINE & DEEP LEARNING', color: 'violet', items: [
    { id: 9, name: 'Scikit-learn', designation: 'Model development', iconKey: 'scikitlearn' },
    { id: 10, name: 'TensorFlow', designation: 'Deep learning', iconKey: 'tensorflow' },
    { id: 11, name: 'PyTorch', designation: 'Deep learning', iconKey: 'pytorch' },
    { id: 12, name: 'XGBoost', designation: 'Gradient boosting', shortName: 'XGBoost' },
    { id: 13, name: 'OpenCV', designation: 'Computer vision', iconKey: 'opencv' },
    { id: 30, name: 'YOLO', designation: 'Object detection', iconKey: 'yolo' },
    { id: 31, name: 'MediaPipe', designation: 'Vision pipelines', iconKey: 'mediapipe' },
    { id: 14, name: 'spaCy', designation: 'NLP', iconKey: 'spacy' },
    { id: 15, name: 'Model Evaluation', designation: 'Tuning & validation', shortName: 'EVAL' },
  ] },
  { id: 'data', label: 'DATA // PYTHON & ANALYTICS', color: 'sky', items: [
    { id: 16, name: 'Python', designation: 'Primary language', iconKey: 'python' },
    { id: 17, name: 'MySQL', designation: 'Relational database', iconKey: 'mysql' },
    { id: 32, name: 'PostgreSQL', designation: 'Relational database', iconKey: 'postgresql' },
    { id: 33, name: 'SQL Server', designation: 'Relational database', shortName: 'SQL SERVER' },
    { id: 18, name: 'NumPy', designation: 'Numerical computing', iconKey: 'numpy' },
    { id: 29, name: 'Pandas', designation: 'Data analysis', iconKey: 'pandas' },
    { id: 19, name: 'Matplotlib & Seaborn', designation: 'Data visualization', shortName: 'PLOTS' },
    { id: 20, name: 'Feature Engineering', designation: 'Data preparation', shortName: 'FEATURES' },
    { id: 21, name: 'TF-IDF', designation: 'Text representation', shortName: 'TF-IDF' },
  ] },
  { id: 'deployment', label: 'BUILD // APIs & DEPLOYMENT', color: 'fuchsia', items: [
    { id: 22, name: 'FastAPI', designation: 'Model serving', iconKey: 'fastapi' },
    { id: 23, name: 'Django REST', designation: 'Backend APIs', iconKey: 'django' },
    { id: 24, name: 'Docker', designation: 'Containerization', iconKey: 'docker' },
    { id: 25, name: 'AWS', designation: 'Cloud deployment', iconKey: 'cloud' },
    { id: 26, name: 'MLflow', designation: 'Experiment tracking', iconKey: 'mlflow' },
    { id: 27, name: 'Streamlit', designation: 'ML applications', iconKey: 'streamlit' },
    { id: 28, name: 'Git & GitHub', designation: 'Version control', iconKey: 'github' },
    { id: 34, name: 'Jupyter Notebook', designation: 'ML experimentation', iconKey: 'jupyter' },
  ] },
]

export const usesCategories = {
  engineering: { label: '01 // WORKBENCH', title: 'Development Environment', tools: [
    { title: 'Visual Studio Code', code: 'IDE-VSC', iconKey: 'vscode', desc: 'Primary code editor for Python, machine learning, and AI application development.' },
    { title: 'Git & GitHub', code: 'VCS-GIT', iconKey: 'github', desc: 'Version control and repository hosting for collaborative development.' },
    { title: 'Jupyter Notebook', code: 'IDE-JPY', iconKey: 'jupyter', desc: 'Interactive environment for experiments, data analysis, and model evaluation.' },
    { title: 'Python', code: 'LANG-PY', iconKey: 'python', desc: 'Primary language for data preparation, machine learning, deep learning, and AI services.' },
  ] },
  cloud: { label: '02 // ALGORITHMS', title: 'Algorithms & Modeling', tools: [
    { title: 'Regression & Classification', code: 'ML-SUP', shortName: 'REG / CLS', desc: 'Supervised learning approaches used for prediction and classification tasks.' },
    { title: 'Clustering', code: 'ML-UNSUP', shortName: 'CLUSTER', desc: 'Unsupervised learning methods for grouping data and finding patterns.' },
    { title: 'Random Forest · XGBoost · SVM', code: 'ML-ALG', shortName: 'RF · XGB · SVM', desc: 'Tree ensembles, gradient boosting, and support vector machines for predictive modeling.' },
    { title: 'CNN · ANN · RNN · LSTM', code: 'DL-ARCH', shortName: 'DEEP NETS', desc: 'Neural network architectures used across computer vision and sequence tasks.' },
    { title: 'Feature Engineering', code: 'DATA-FE', shortName: 'FEATURES', desc: 'Preparing and transforming input data to support effective model training.' },
    { title: 'Evaluation & Tuning', code: 'ML-EVAL', shortName: 'EVALUATE', desc: 'Model evaluation and hyperparameter tuning to improve model performance.' },
  ] },
  design: { label: '03 // GEN_AI', title: 'LLMs & Retrieval', tools: [
    { title: 'LangChain', code: 'LLM-LC', iconKey: 'langchain', desc: 'Framework used to build LLM applications and retrieval-augmented generation pipelines.' },
    { title: 'LangGraph', code: 'AGENT-LG', iconKey: 'langgraph', desc: 'Orchestration for multi-agent workflows and stateful AI applications.' },
    { title: 'Hugging Face', code: 'NLP-HF', iconKey: 'huggingface', desc: 'Transformer models and Sentence Transformers for embeddings and NLP.' },
    { title: 'Gemini', code: 'LLM-GEM', iconKey: 'gemini', desc: 'Generative model integrated into context-aware document question answering.' },
    { title: 'ChromaDB & FAISS', code: 'VEC-DB', shortName: 'VECTOR DB', desc: 'Vector storage and similarity search for semantic document retrieval.' },
  ] },
  deployment: { label: '04 // DEPLOY', title: 'Serving, Data & Deployment', tools: [
    { title: 'FastAPI', code: 'API-FAST', iconKey: 'fastapi', desc: 'Python API framework for serving model functionality.' },
    { title: 'Django REST Framework', code: 'API-DRF', iconKey: 'django', desc: 'Backend API framework used in the smart attendance system.' },
    { title: 'Docker & AWS', code: 'CLOUD-01', shortName: 'DOCKER · AWS', desc: 'Containerization and cloud deployment tools listed in the CV.' },
    { title: 'MLflow', code: 'MLOPS-01', iconKey: 'mlflow', desc: 'Model tracking and experiment management.' },
    { title: 'Streamlit', code: 'APP-ML', iconKey: 'streamlit', desc: 'Interactive deployment for machine learning applications and demos.' },
    { title: 'PostgreSQL & MySQL', code: 'DATA-SQL', shortName: 'SQL DATA', desc: 'Relational databases used for application data and machine learning workflows.' },
  ] },
}

export const education = [
  { degree: 'Bachelor of Engineering in Computer Science and Engineering (AI/ML), Honours in Data Science', school: 'University of Mumbai', period: 'Jun 2022 – May 2026', location: 'India' },
]
