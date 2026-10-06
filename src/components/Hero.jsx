import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="hero wrap" style={{ position: 'relative' }}>
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <motion.p variants={itemVariants} className="kicker mono">
          ◆ mathematics &amp; computing — iit indore ◆
        </motion.p>
        
        <motion.h1 variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
          Aditya Rai
          <a 
            href="https://github.com/aditya-rai-5" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: 'var(--gold-bright)', display: 'flex', opacity: 0.8, transition: 'opacity 0.2s ease' }}
            onMouseOver={(e) => e.currentTarget.style.opacity = 1}
            onMouseOut={(e) => e.currentTarget.style.opacity = 0.8}
            aria-label="GitHub"
          >
            <Github size={42} strokeWidth={2.5} />
          </a>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="lede">
          Software engineer passionate about building robust web applications, intelligent systems, and solving complex algorithmic problems.
        </motion.p>
        
        <motion.div variants={itemVariants} className="actions">
          <a className="btn primary" href="#projects">My Projects</a>
          <a className="btn ghost" href="mailto:aditya5748rai@gmail.com">Mailto</a>
        </motion.div>
        
        <motion.div variants={itemVariants} className="stat-strip">
          <a href="https://codeforces.com/profile/aditya-rai-5" target="_blank" rel="noopener noreferrer" className="stat" style={{ textDecoration: 'none' }}>
            <span className="num">1992</span>
            <span className="label">CODEFORCES <br/> CANDIDATE MASTER</span>
          </a>
          <a href="https://leetcode.com/u/aditya_rai_5" target="_blank" rel="noopener noreferrer" className="stat" style={{ textDecoration: 'none' }}>
            <span className="num">1900+</span>
            <span className="label">LEETCODE <br/> KNIGHT</span>
          </a>
          <div className="stat">
            <span className="num">50+</span>
            <span className="label">ALPHAS <br/> WORLDQUANT</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
