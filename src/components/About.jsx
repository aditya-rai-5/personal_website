import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  const revealVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="about" className="wrap" style={{ position: 'relative' }}>
      {/* Elden Ring Background Logo - Shows up when scrolling into Origins */}
      <img src="/er-ring.png" alt="" className="er-bg-watermark" />
      
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <motion.h2 variants={revealVariants} className="heading">Origins</motion.h2>
        
        <div className="about-grid">
          <motion.div variants={revealVariants}>
            <p>I am a B.Tech student in Mathematics and Computing at IIT Indore, with a strong interest in software engineering, applied mathematics, and artificial intelligence. My focus is on building scalable systems and robust AI applications.</p>
            <p>Outside coursework, I compete on Codeforces, CodeChef, and LeetCode, and I make quantitative alphas on WorldQuant. My primary focus is on backend software engineering and AI/ML, where I build scalable projects that integrate robust system architecture with intelligent machine learning models.</p>
            <p>In my studies, I explore Linear Algebra, Probability, Numerical Methods, Complex Analysis, Automata Theory, and Measure Theory alongside core computer science subjects like DSA and DBMS — this mathematical foundation shows up directly in how I approach ranking, search, and optimization.</p>
          </motion.div>
          
          <motion.div variants={revealVariants} className="panel">
            <div className="edu-row">
              <div className="degree">B.Tech, Mathematics &amp; Computing</div>
              <div className="score">7.35 CGPA</div>
              <div className="inst">Indian Institute of Technology Indore</div>
              <div className="year">2024 – Present</div>
            </div>
            <div className="edu-row">
              <div className="degree">Senior Secondary</div>
              <div className="score">93.2%</div>
              <div className="inst">CBSE Board</div>
              <div className="year">2023</div>
            </div>
            <div className="edu-row">
              <div className="degree">Secondary</div>
              <div className="score">88.0%</div>
              <div className="inst">CBSE Board</div>
              <div className="year">2021</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
