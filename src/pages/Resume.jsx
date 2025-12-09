import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Resume() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <section className="resume-section">

      {/* MAIN TITLE */}
      <motion.h1
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Resume
      </motion.h1>

      {/* ------------------------------- */}
      {/* PDF VIEWER MODE */}
      {/* ------------------------------- */}
      {showPdf ? (
        <motion.div
          className="resume-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="heading">Resume Preview</h2>

          <iframe
            src="/gauravcv.pdf"
            className="pdf-frame"
            title="Gaurav Resume"
          ></iframe>

          <button className="cta-btn secondary" onClick={() => setShowPdf(false)}>
            Close Resume
          </button>
        </motion.div>
      ) : (
        <>
          {/* --------------------------------------------------------- */}
          {/* MERGED FULL RESUME OVERVIEW BOX */}
          {/* --------------------------------------------------------- */}
          <motion.div
            className="resume-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
           <motion.div
  className="resume-preview"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5, duration: 0.6 }}
>

  <h3 className="resume-heading">Quick Overview</h3>

  {/* PROFILE */}
  <div className="profile-merged">
    <p><strong>GAURAV CHAUHAN</strong></p>
    <p>📍 India</p>
    <p>✉️ gauravchau0@gmail.com</p>
  </div>

  {/* QUICK INFO GRID */}
  <div className="resume-quick-info">

    <div className="info-item">
      <span className="info-icon">💼</span>
      <div>
        <strong>Role</strong>
        <p>Software Engineer/Python Developer</p>
      </div>
    </div>

    <div className="info-item">
      <span className="info-icon">🧠</span>
      <div>
        <strong>Experience</strong>
        <p>
          • ML Research Intern — IIT BHU  
          • Python Developer
        </p>
      </div>
    </div>

    <div className="info-item">
      <span className="info-icon">🎓</span>
      <div>
        <strong>Education</strong>
        <p>
          Bachelor's in Technology(CS & IT) — MJP Rohilkhand University  
        </p>
      </div>
    </div>
  </div>

  {/* SUMMARY */}
  <div className="section-block">
    <h4>Professional Summary</h4>
    <p>
      Python Developer and Machine Learning Engineer with hands-on experience 
      in RAG pipelines, LLM-based chatbots, LangChain, SQL automation, and cloud 
      technologies. Skilled in research-driven ML model development, backend API 
      design (Flask), vector databases, and AI-powered decision systems.
    </p>
  </div>

  {/* PROJECTS */}
  <div className="section-block">
    <h4>Projects</h4>
    <ul>
      <li>
        💊 <strong>Medical Assistance Chatbot</strong> — RAG, LangChain, Gemini, AI Agents
      </li>
      <li>
        🗄️ <strong>SQL Database Chatbot</strong> — Natural Language → SQL + Data Visualization
      </li>
      <li>
        ☀️ <strong>Solar Panel Fault Detection</strong> — VGG16 + Transfer Learning
      </li>
      <li>
        📱 <strong>QR-Based Smart Attendance System</strong> — Flask, GPS, QR Tech
      </li>
    </ul>
  </div>

  {/* SKILLS */}
  <div className="section-block">
    <h4>Skills</h4>
    <p>
      Python, C++, JavaScript, Flask, React, MySQL, MongoDB, AWS, PowerBI,  
      NumPy, Pandas, Scikit-learn, HuggingFace, LangChain, RAG, GenAI,  
      SQL, OOP, Data Structures, SDLC
    </p>
  </div>

  {/* CERTIFICATIONS */}
  <div className="section-block">
    <h4>Certifications</h4>
    <ul>
      <li>Data Science Using Python — SWAYAM</li>
      <li>Oracle Cloud Infrastructure AI Foundations</li>
      <li>SQL (Intermediate) — HackerRank</li>
      <li>Generative AI Training Programme</li>
      <li>Deloitte Data Analytics Virtual Internship</li>
    </ul>
  </div>

  {/* LINKS — FULLY UPDATED */}
  <div className="section-block">
    <h4>My Profiles</h4>
    <ul>
      <li><a target="_blank" href="https://www.linkedin.com/in/gaurav-chauhan-277085228/">🔗 LinkedIn</a></li>
      <li><a target="_blank" href="https://github.com/gaurav5268">💻 GitHub</a></li>
      <li><a target="_blank" href="https://leetcode.com/u/gauravchau0/">🏆 LeetCode</a></li>
      <li><a target="_blank" href="https://www.codechef.com/users/gaurav5268">🍜 CodeChef</a></li>
    </ul>
  </div>

  {/* CONTACT BUTTON */}
  <div className="contact-btn-box">
    <a href="/contact" className="cta-btn primary">Contact Me</a>
  </div>

</motion.div>


              
          </motion.div>

          {/* BUTTON TO OPEN PDF */}
          <button className="cta-btn primary pdf-btn" onClick={() => setShowPdf(true)}>
            View Full Resume (PDF)
          </button>
        </>
      )}
    </section>
  );
}
