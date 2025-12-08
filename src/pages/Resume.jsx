import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Resume() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <section className="resume-section">
      <motion.h1
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Resume
      </motion.h1>

      {/* ------------------------------------ */}
      {/*   SHOW PDF VIEWER IN PLACE OF SECTION */}
      {/* ------------------------------------ */}
      {showPdf ? (
        <motion.div
          className="resume-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h2>Resume Preview</h2>

          <iframe
            src="/gauravcv.pdf"
            className="pdf-frame"
            title="Gaurav Resume"
          ></iframe>

          <button
            className="cta-btn secondary"
            onClick={() => setShowPdf(false)}
          >
            Close Resume
          </button>
        </motion.div>
      ) : (
        <>
          {/* ------------------------------------ */}
          {/* DEFAULT RESUME SECTION (HIDDEN ON VIEW) */}
          {/* ------------------------------------ */}

          <motion.div
            className="resume-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="resume-placeholder">
              <motion.div
                className="resume-icon"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                📄
              </motion.div>

              <h2>View My Resume</h2>
              <p>You can preview the resume directly on the website.</p>

              {/* VIEW RESUME BUTTON */}
              <button className="cta-btn primary" onClick={() => setShowPdf(true)}>
                View Resume
              </button>
            </div>

            <motion.div
              className="resume-preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h3>Quick Overview</h3>

              <div className="resume-quick-info">
                <div className="info-item">
                  <span className="info-icon">👨‍💻</span>
                  <div>
                    <strong>Role</strong>
                    <p>Python Developer / Data Engineer</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">🎓</span>
                  <div>
                    <strong>Education</strong>
                    <p>Bachelor of Computer Science & Information Technology</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">💼</span>
                  <div>
                    <strong>Experience</strong>
                    <p>Python Developer Intern • Data Engineering Projects</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">🌍</span>
                  <div>
                    <strong>Location</strong>
                    <p>India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="resume-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <a href="/contact" className="cta-btn primary">Contact Me</a>
          </motion.div>
        </>
      )}
    </section>
  );
}
