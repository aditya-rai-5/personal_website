import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal, Cpu, Activity, Users } from 'lucide-react';
import './Achievements.css';

export default function Achievements() {
  const achievements = [
    { title: "Codeforces Candidate Master", desc: "Peak rating of 1992", year: "2026", icon: <Trophy size={26} color="#caa14b" /> },
    { title: "Codeforces Round 1101 (Div. 2)", desc: "Ranked 110th globally", year: "2026", icon: <Trophy size={26} color="#caa14b" /> },
    { title: "CodeChef 3-Star", desc: "Peak rating of 1600+", year: "2026", icon: <Star size={26} color="#caa14b" /> },
    { title: "CodeChef Starters 238", desc: "Ranked 29th globally", year: "2026", icon: <Star size={26} color="#caa14b" /> },
    { title: "LeetCode Knight", desc: "Peak rating of 1900+", year: "2026", icon: <Award size={26} color="#caa14b" /> },
    { title: "National Semi-Finalist, ET Gen AI Hackathon", desc: "Economic Times Generative AI Hackathon", year: "2026", icon: <Activity size={26} color="#9c3a2b" /> },
    { title: "Semifinalist, NXP AIM Hackathon", desc: "National-level embedded/AI hackathon", year: "2025", icon: <Cpu size={26} color="#9c3a2b" /> },
    { title: "Research Consultant, WorldQuant", desc: "Built 50+ quantitative alphas", year: "2025", icon: <Medal size={26} color="#caa14b" /> },
    { title: "Member, GDG Club, IIT Indore", desc: "Position of responsibility", year: "Mar 2025 – present", icon: <Users size={26} color="#8a8172" /> }
  ];

  return (
    <section id="achievements" className="wrap">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="heading"
      >
        Achievements
      </motion.h2>
      
      <div className="panel ledger">
        <div className="corner tl"></div><div className="corner tr"></div><div className="corner bl"></div><div className="corner br"></div>
        
        {achievements.map((item, idx) => (
          <motion.div 
            key={idx}
            className="ledger-row"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="sweep-anim"></div>
            <div className="glyph-sm">{item.icon}</div>
            <div>
              <div className="title">{item.title}</div>
              <div className="desc">{item.desc}</div>
            </div>
            <div className="year">{item.year}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
