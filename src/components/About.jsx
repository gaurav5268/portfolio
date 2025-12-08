import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="about-section section-panel">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <p>
  Hi! I'm Gaurav Chauhan, a passionate Software Engineer 
  with a strong interest in building intelligent, scalable, and real-world 
  software solutions. I love working with data, designing backend systems, 
  and creating applications that solve meaningful problems.
</p>

<p>
  My journey in technology started with Web Development and soon expanded 
  into Machine Learning, Deep Learning, NLP, Generative AI, and Cloud 
  Computing. Over time, I’ve built projects involving RAG Chatbots, 
  vector databases (FAISS), LLM integration, Flask APIs, Streamlit apps, 
  and data engineering pipelines.
</p>

<p>
  I enjoy exploring new technologies, optimizing systems, and continuously 
  improving my skills. Whether it's solving DSA problems, building automation, 
  experimenting with AI models, or deploying solutions on the cloud, I always 
  strive to learn and grow every day.
</p>

<p>
  Outside coding, I love contributing to open-source ideas, experimenting with 
  creative tech workflows, and collaborating with like-minded people on exciting 
  projects. I'm always open to new opportunities, innovations, and impactful work!
</p>

      </motion.div>

      <motion.div
        className="about-highlights"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="highlight-item">
          <span className="highlight-number">22</span>
          <span className="highlight-label">Age</span>
        </div>
        <div className="highlight-item">
          <span className="highlight-number">10+</span>
          <span className="highlight-label">Projects Completed</span>
        </div>
        <div className="highlight-item">
          <span className="highlight-number">5+</span>
          <span className="highlight-label">Technologies</span>
        </div>
      </motion.div>
    </section>
  );
}