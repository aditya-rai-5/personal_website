import { motion } from 'framer-motion';
import './Navbar.css';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="panel navbar"
    >
      <span className="brand">ADITYA RAI</span>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#achievements">Achievements</a>
      <a href="#contact">Contact</a>
    </motion.nav>
  );
}
