import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './Projects.css';

const ProjectCard = ({ project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="project-card panel"
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="corner tl"></div><div className="corner tr"></div><div className="corner bl"></div><div className="corner br"></div>
      
      <div className="card-left">
        <div className="scope" style={{ transform: "translateZ(30px)" }}>
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < project.complexity ? "filled" : ""}></span>
          ))}
        </div>
        
        <div className="glyph-container" style={{ transform: "translateZ(40px)" }}>
          {project.icon}
        </div>
        
        <h3 style={{ transform: "translateZ(30px)" }}>{project.title}</h3>
        <p className="ptag" style={{ transform: "translateZ(20px)" }}>{project.subtitle}</p>
        
        <div className="chip-row" style={{ transform: "translateZ(25px)" }}>
          {project.tags.map(tag => <span key={tag} className="chip">{tag}</span>)}
        </div>
      </div>

      <div className="card-right">
        <ul style={{ transform: "translateZ(20px)" }}>
          {project.details.map((detail, i) => <li key={i}>{detail}</li>)}
        </ul>
        
        <a className="cta" href={project.link} target="_blank" rel="noopener noreferrer" style={{ transform: "translateZ(35px)" }}>
          View repository <ExternalLink size={14} />
        </a>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const projects = [
    {
      title: "Learn Ai",
      subtitle: "AI-powered engineering learning platform — 2026",
      complexity: 4,
      tags: ["React", "Express", "pgvector", "Prisma", "Docker"],
      details: [
        <><strong>RAG AI tutor.</strong> Built a Retrieval-Augmented Generation tutor on Node.js/Express. Course text and video transcripts are chunked (1,500 characters with 200 overlap) and embedded locally with all-MiniLM-L6-v2 (384 dimensions). The embeddings are stored in PostgreSQL with pgvector, and the tutor answers using cosine-similarity search and Groq's Llama 3.3 70B, with chat history saved per user.</>,
        <><strong>Secure media and payments.</strong> Implemented private video and PDF uploads to AWS S3 using multer-s3 (500 MB video and 20 MB PDF limits, MIME filtering) and 1-hour pre-signed URLs for playback. Integrated Razorpay with HMAC-SHA256 payment signature verification and an automated 80/20 instructor revenue split with a payout-request flow.</>,
        <><strong>API design, security and testing.</strong> Designed a modular REST API with about 20 domain modules, Prisma migrations, JWT auth with role-based access (Student/Instructor/Admin), and Helmet. It uses express-rate-limit (100 requests per 15 minutes globally, 10 per 15 minutes on login/register). It has about 65 Vitest/Supertest tests and is Dockerized (Postgres, backend, frontend via Docker Compose).</>
      ],
      link: "https://github.com/aditya-rai-5/learning_ai",
      icon: (
        <svg className="glyph" viewBox="0 0 44 44" fill="none">
          <circle cx="10" cy="10" r="4" stroke="#caa14b" strokeWidth="1.6"/>
          <circle cx="34" cy="12" r="4" stroke="#caa14b" strokeWidth="1.6"/>
          <circle cx="22" cy="32" r="4" stroke="#9c3a2b" strokeWidth="1.6"/>
          <line x1="13" y1="12" x2="20" y2="29" stroke="#caa14b" strokeWidth="1.2" opacity="0.6"/>
          <line x1="31" y1="14" x2="24" y2="29" stroke="#9c3a2b" strokeWidth="1.2" opacity="0.6"/>
          <line x1="14" y1="10" x2="30" y2="12" stroke="#ece1c8" strokeWidth="1.2" opacity="0.35"/>
        </svg>
      )
    },
    {
      title: "IITIbot",
      subtitle: "Intelligent RAG chatbot — 2025",
      complexity: 3,
      tags: ["FastAPI", "Pathway", "Groq/Llama", "Docker"],
      details: [
        "Built a Retrieval-Augmented Generation chatbot for IIT Indore using Pathway, Groq (Llama-4-Scout) and all-MiniLM-L6-v2 embeddings. It answers questions from about 2,800 scraped institute pages and PDFs.",
        "Implemented a CRAG-style pipeline: LLM multi-query expansion, cosine KNN retrieval, LLM-based relevance reranking, and automatic Tavily web-search fallback when no chunk passes. This reduces unanswered queries and hallucination.",
        "Developed a multithreaded scraper (BeautifulSoup, Camelot, PyPDF2; retry with backoff, per-domain rate limiting) for HTML and PDF tables, with a weekly GitHub Actions refresh.",
        "Built a FastAPI backend with JWT auth, bcrypt, SendGrid OTP email verification and MongoDB-backed chat history, deployed with Docker Compose alongside a React frontend."
      ],
      link: "https://github.com/KK-Singh333/IITI_BOT",
      icon: (
        <svg className="glyph" viewBox="0 0 44 44" fill="none">
          <rect x="6" y="14" width="10" height="10" rx="2" stroke="#9c3a2b" strokeWidth="1.6"/>
          <rect x="28" y="14" width="10" height="10" rx="2" stroke="#caa14b" strokeWidth="1.6"/>
          <path d="M16 19h12" stroke="#ece1c8" strokeWidth="1.4" opacity="0.5"/>
          <path d="M22 8v6M22 30v-6" stroke="#ece1c8" strokeWidth="1.2" opacity="0.35"/>
        </svg>
      )
    },
    {
      title: "HashBandits",
      subtitle: "On-chain DAO governance system — 2026",
      complexity: 5,
      tags: ["Solidity", "Next.js", "MetaMask", "IPFS"],
      details: [
        "Ethereum DAO on Sepolia where token holders propose and vote via ERC20 snapshots, executing on-chain after a 30-second timelock",
        "Snapshot voting prevents last-minute token manipulation during governance votes",
        "Cut deployment gas by 48.1% through struct packing and custom errors; Next.js + MetaMask frontend with IPFS-pinned contract source for pre-vote auditing"
      ],
      link: "https://github.com/KK-Singh333/HashBandits",
      icon: (
        <svg className="glyph" viewBox="0 0 44 44" fill="none">
          <circle cx="12" cy="12" r="5" stroke="#caa14b" strokeWidth="1.6"/>
          <circle cx="12" cy="32" r="5" stroke="#caa14b" strokeWidth="1.6"/>
          <circle cx="32" cy="22" r="5" stroke="#9c3a2b" strokeWidth="1.6"/>
          <path d="M15 15l14 5M15 29l14-5" stroke="#ece1c8" strokeWidth="1.3" opacity="0.4"/>
        </svg>
      )
    }
  ];

  return (
    <section id="projects" className="wrap">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="heading"
      >
        My Projects
      </motion.h2>
      
      <div className="projects">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}
