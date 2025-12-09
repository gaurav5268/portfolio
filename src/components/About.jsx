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
        whileHover={{
          scale: 1.02,
          boxShadow: "0 0 25px rgba(0,255,200,0.15)",
        }}
        transition={{ duration: 0.3 }}
        style={{
          background: "rgba(255,255,255,0.05)",
          borderRadius: "14px",
          padding: "1rem 1.5rem",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 0 15px rgba(0,255,200,0.05)",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "2.2rem",
        }}
      >
        
        <div style={{ textAlign: "left" }}>
          <h4
            style={{
              color: "var(--accent)",
              marginBottom: "0.25rem",
              fontSize: "1.15rem",
              fontWeight: 600,
            }}
          >
            Bachelor's in Technology
          </h4>

          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              marginBottom: "0.18rem",
              fontSize: "0.95rem",
            }}
          >
            M.J.P. Rohilkhand University — Bareilly, Uttar Pradesh
          </p>

          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              marginBottom: "0.12rem",
              fontSize: "0.9rem",
            }}
          >
           Computer Science & Information Technology
          </p>

          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.88rem",
            }}
          >
            2021 – 2025
          </p>
        </div>
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <p>
          Hi! I'm Gaurav Chauhan, a passionate Software Engineer 
          with a strong interest in building intelligent, scalable, 
          and real-world software solutions. I love working with data, 
          designing backend systems, and creating applications that 
          solve meaningful problems.
        </p>

        <p>
          My journey in technology started with Web Development 
          and soon expanded into Machine Learning, Deep Learning, NLP, 
          Generative AI, and Cloud Computing. Over time, I’ve built 
          projects involving RAG Chatbots, vector databases (FAISS), 
          LLM integration, Flask APIs, Streamlit apps, and 
          data engineering pipelines.
        </p>

        <p>
          I enjoy exploring new technologies, optimizing systems, 
          and continuously improving my skills. Whether it's solving DSA 
          problems, building automation, experimenting with AI models, 
          or deploying solutions on the cloud, I always strive to learn 
          and grow every day.
        </p>

        <p>
          Outside coding, I love contributing to open-source ideas, 
          experimenting with creative tech workflows, and collaborating 
          with like-minded people on exciting projects. I'm always open 
          to new opportunities, innovations, and impactful work!
        </p>
      </motion.div>

      
    </section>
  );
}
