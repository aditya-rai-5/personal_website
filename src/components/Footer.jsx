import { motion } from 'framer-motion';
import './Footer.css';

export default function Footer() {
  return (
    <footer id="contact" className="wrap">
      <motion.div 
        className="contact-card panel"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="corner tl"></div><div className="corner tr"></div><div className="corner bl"></div><div className="corner br"></div>
        <h2>Let's build something.</h2>
        <p>Open to internships, research collaborations, and interesting engineering problems — RAG systems, backend architecture, or applied math. Send word any time.</p>
        <div className="contact-links">
          <a className="btn primary" href="mailto:aditya5748rai@gmail.com">aditya5748rai@gmail.com</a>
          <a className="btn ghost" href="tel:+918817373250">+91 88173 73250</a>
          <a className="btn ghost" href="https://github.com/aditya-rai-5" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="btn ghost" href="https://linkedin.com/in/aditya-rai-685339344" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </motion.div>
      <p className="foot-note">ADITYA RAI · IIT INDORE · FORGED WITH REACT THREE FIBER</p>
    </footer>
  );
}
