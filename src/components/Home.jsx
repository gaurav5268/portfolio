import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" className="home-section">

      {/* Parent container → Image Left + Text Right */}
      <motion.div
        className="home-wrapper"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "7rem",
          flexWrap: "wrap",
        }}
      >

        {/* ================= IMAGE LEFT ================= */}
        <motion.div
          className="profile-image-container"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
        >
          <div className="profile-image">
            <img
              src="/mecart.jpg"
              alt="profile"
              style={{
                width: "260px",
                height: "380px",
                borderRadius: "50%",       // oval shape
                objectFit: "cover",
                boxShadow: "0 0 20px rgba(0,255,200,0.15)"
              }}
            />
          </div>
        </motion.div>

        {/* ================= TEXT RIGHT ================= */}
        <motion.div
          className="home-content-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={{ textAlign: "left", maxWidth: "450px" }}
        >
          <h1 className="home-name">Gaurav Chauhan</h1>

          <h2 className="home-title">Software Engineer</h2>

          <p className="home-tagline">
            Building digital experiences with code and creativity.
          </p>

          <div
            className="home-cta"
            style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}
          >
            <a href="#about" className="cta-btn primary">Learn More</a>
            <a href="/contact" className="cta-btn secondary">Get In Touch</a>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
