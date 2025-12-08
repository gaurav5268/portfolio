import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" className="home-section">
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
  className="profile-image-container"
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
>
  <div className="profile-image">

    {/* FIXED ONLY THIS LINE */}
    <img 
      src="/mecart.jpg" 
      alt="profile" 
      className="profile-placeholder"
      style={{ width: "220px", height: "220px", borderRadius: "50%", objectFit: "cover" }}
    />

  </div>
</motion.div>

        <motion.h1
          className="home-name"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Gaurav Chauhan
        </motion.h1>

        <motion.h2
          className="home-title"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Software Engineer
        </motion.h2>

        <motion.p
          className="home-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Building digital experiences with code and creativity
        </motion.p>

        <motion.div
          className="home-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a href="#about" className="cta-btn primary">Learn More</a>
          <a href="/contact" className="cta-btn secondary">Get In Touch</a>
        </motion.div>
      </motion.div>
    </section>
  );
}
