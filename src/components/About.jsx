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
        <motion.h2 variants={revealVariants} className="heading">About</motion.h2>
        
        <div className="about-grid">
          <motion.div variants={revealVariants}>
            <p>I am a Mathematics & Computing student at IIT Indore, passionate about software engineering and artificial intelligence. My focus lies in architecting robust backend systems and developing intelligent, scalable ML applications.</p>
            <p>Beyond academics, I actively engage in competitive programming on Codeforces and LeetCode, and develop quantitative alphas on WorldQuant. My strong mathematical foundation directly informs how I approach complex algorithmic challenges, system optimization, and AI.</p>
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
