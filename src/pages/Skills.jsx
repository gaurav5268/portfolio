import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    name: "Python",
    level: 90,
    icon: "🐍",
    category: "Programming"
  },
  {
    name: "JavaScript",
    level: 85,
    icon: "💛",
    category: "Programming"
  },
  {
    name: "React",
    level: 80,
    icon: "⚛️",
    category: "Frontend"
  },
   
  {
    name: "Node.js",
    level: 75,
    icon: "🟢",
    category: "Backend"
  },
  {
    name: "SQL",
    level: 80,
    icon: "🗃️",
    category: "Database"
  },
  {
    name: "Machine Learning",
    level: 75,
    icon: "🤖",
    category: "AI/ML"
  },
  {
    name: "Artificial Intelligence",
    level: 70,
    icon: "🧠",
    category: "AI/ML"
  },
  {
    name: "AWS",
    level: 85,
    icon: "📦",
    category: "Cloud"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export default function Skills() {
  return (
    <section id="skills" className="skills-section section-panel">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Technologies and tools I work with
      </motion.p>

      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
            <span className="skill-category">{skill.category}</span>
            <div className="skill-bar-container">
              <motion.div
                className="skill-bar"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
              />
            </div>
            <span className="skill-level">{skill.level}%</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}