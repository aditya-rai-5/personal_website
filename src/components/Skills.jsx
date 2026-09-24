import { motion } from 'framer-motion';
import './Skills.css';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const skillsData = [
    { title: "Languages", items: ["C++", "JavaScript", "Python", "SQL", "HTML/CSS"] },
    { title: "Frameworks & libraries", items: ["Node.js", "Express.js", "PyTorch", "Pandas", "NumPy", "React"] },
    { title: "Databases", items: ["PostgreSQL", "MongoDB", "Prisma ORM"] },
    { title: "Tools & concepts", items: ["Docker", "DSA", "OOP", "RAG", "AI/ML"] }
  ];

  return (
    <section id="skills" className="wrap">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="heading"
      >
        Skills
      </motion.h2>
      
      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillsData.map((block, idx) => (
          <motion.div key={idx} variants={itemVariants} className="skill-block panel">
            <div className="corner tl"></div><div className="corner br"></div>
            <h4>{block.title}</h4>
            <div className="skill-chips">
              {block.items.map(item => (
                <span key={item} className="chip">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
