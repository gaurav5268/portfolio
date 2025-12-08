import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const artworks = [
  // ----- PROJECTS (1, 2, 3) -----
{
  id: 1,
  title: "🩺 Medical Assistance App",
  description:
    "A medical support system offering health recommendations, symptom analysis, and guided assistance using Python automation and rule-based logic.",
  ss: "project1.png", // replace with actual image
  tech: ["Python", "RAG", "LLM", "Triage-Based System"],
  live: "#",
  code: "https://github.com/gaurav5268/Medical_Assistance",
  category: "Projects",
},
{
  id: 2,
  title: "📊 SQL Database Insight",
  description:
    "An intelligent SQL database analysis tool providing insights, query optimization, schema understanding, and automated reporting.",
  ss: "project2.png", // replace with actual image
  tech: ["SQL", "Python", "Data Analysis", "Visualization"],
  live: "#",
  code: "https://github.com/gaurav5268/SQLDatabase-Insight-",
  category: "Projects",
},
{
  id: 3,
  title: "🔆 Solar Panel Fault Analysis",
  description:
    "A fault detection system for solar panels using machine learning to analyze performance anomalies and predict faults in real time.",
  ss: "project3.png", // replace with actual image
  tech: ["Machine Learning", "Python", "Pandas", "Scikit-Learn"],
  live: "#",
  code: "https://github.com/gaurav5268/Solar-Panel-Fault-Analysis",
  category: "Projects",
},

  // ----- ARTWORKS (4,5,6) -----
  {
    id: 4,
    title: "Portraits",
    image: "art1.jpg",
    category: "Artworks",
  },
  {
    id: 5,
    title: "Sketches",
    image: "art2.png",
    category: "Artworks",
  },
  {
    id: 6,
    title: "Animations",
    image: "art3.png",
    category: "Artworks",
  },

  // ----- PHOTOGRAPHS (7,8,9) -----
  {
    id: 7,
    title: "Photograph 1",
    image: null,
    category: "Photographs",
  },
  {
    id: 8,
    title: "Photograph 2",
    image: null,
    category: "Photographs",
  },
  {
    id: 9,
    title: "Photograph 3",
    image: null,
    category: "Photographs",
  },
];

// NO "All"
const categories = ["Projects", "Artworks", "Photographs"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Projects");
  const [selectedArt, setSelectedArt] = useState(null);

  const filteredArtworks = artworks.filter(
    (art) => art.category === selectedCategory
  );

  return (
    <section id="artworks" className="gallery-section section-panel">
      {/* Title */}
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Gallery
      </motion.h2>

      {/* CATEGORY FILTERS */}
      <motion.div className="gallery-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* GALLERY GRID */}
      <motion.div className="gallery-grid" layout>
        <AnimatePresence>
          {filteredArtworks.map((art, index) => (
            <motion.div
              key={art.id}
              layout
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ duration: 0.35 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedArt(art)}
              style={{
                borderRadius: 14,
                padding: art.category === "Projects" ? 16 : 0,
                overflow: "hidden",
                background:
                  art.category === "Projects"
                    ? "linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))"
                    : "rgba(255,255,255,0.03)",
                border:
                  art.category === "Projects"
                    ? "1px solid rgba(0,255,255,0.08)"
                    : "1px solid rgba(255,255,255,0.06)",
                boxShadow:
                  art.category === "Projects"
                    ? "0 0 20px rgba(0,255,255,0.08)"
                    : "none",
              }}
            >
              {/* ================= PROJECT CARD UI ================= */}
              {art.category === "Projects" ? (
                <>
                  <div style={{ borderRadius: 12, overflow: "hidden" }}>
                    <img
                      src={art.ss}
                      alt={art.title}
                      style={{
                        width: "100%",
                        height: 200,
                        objectFit: "cover",
                        borderRadius: 12,
                      }}
                    />
                  </div>

                  <h3 style={{ color: "#0ea5e9", marginTop: 10 }}>
                    {art.title}
                  </h3>

                  <p style={{ color: "#bbb", marginTop: 6, fontSize: 14 }}>
                    {art.description}
                  </p>

                  <div
                    style={{
                      marginTop: 10,
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                    }}
                  >
                    {art.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          background: "rgba(0,255,255,0.05)",
                          border: "1px solid rgba(0,255,255,0.1)",
                          padding: "3px 8px",
                          borderRadius: 6,
                          fontSize: 12,
                          color: "#aaf",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: 12,
                      gap: 8,
                    }}
                  >
                    <a
                      href={art.code}
                      target="_blank"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                        padding: "6px 12px",
                        borderRadius: 8,
                        color: "#0ea5e9",
                        border: "1px solid rgba(0,255,255,0.1)",
                      }}
                    >
                      <Github size={14} /> Code
                    </a>

                    <a
                      href={art.live}
                      target="_blank"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                        padding: "6px 12px",
                        borderRadius: 8,
                        background:
                          "linear-gradient(90deg,#06b6d4,#0891b2)",
                        color: "#fff",
                      }}
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  </div>
                </>
              ) : (
                /* ================= ARTWORKS + PHOTOS ================= */
                <>
                  <div className="gallery-image-placeholder">
                    {art.image ? (
                      <img src={art.image} alt={art.title} />
                    ) : (
                      <div className="placeholder-content">
                        <span className="placeholder-icon">🎨</span>
                        <span className="placeholder-text">No Image</span>
                      </div>
                    )}
                  </div>

                  <div className="gallery-item-info">
                    <h3>{art.title}</h3>

                    {/* Instagram for artworks */}
                    {art.category === "Artworks" && (
                      <a
                        href="https://instagram.com/gravity_pixels_"
                        target="_blank"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 6,
                          marginTop: 4,
                        }}
                      >
                        <img
                          src="/insta.png"
                          alt="Instagram"
                          style={{ width: 20 }}
                        />
                        <span>@gravity_pixels_</span>
                      </a>
                    )}
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal (unchanged) */}
      <AnimatePresence>
        {selectedArt && (
          <motion.div
            className="gallery-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArt(null)}
          >
            <motion.div
              className="gallery-modal"
              initial={{ scale: 0.75, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.75, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedArt(null)}
              >
                ×
              </button>

              <div className="modal-image">
                <img
                  src={selectedArt.image || selectedArt.ss}
                  alt={selectedArt.title}
                />
              </div>

              <div className="modal-info">
                <h3>{selectedArt.title}</h3>

                {/* Project modal */}
                {selectedArt.category === "Projects" && (
                  <>
                    <p>{selectedArt.description}</p>

                    <a
                      href={selectedArt.code}
                      target="_blank"
                      style={{
                        color: "#0ea5e9",
                        display: "inline-flex",
                        marginTop: 10,
                        gap: 8,
                        alignItems: "center",
                      }}
                    >
                      <Github size={16} /> View Code
                    </a>
                  </>
                )}

                {/* Artwork modal */}
                {selectedArt.category === "Artworks" && (
                  <div style={{ marginTop: 8 }}>
                    <p>Visit this Instagram page for more artworks:</p>

                    <a
                      href="https://instagram.com/gravity_pixels_"
                      target="_blank"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        marginTop: 4,
                      }}
                    >
                      <img
                        src="/insta.png"
                        style={{ width: 22 }}
                      />
                      <span>@gravity_pixels_</span>
                    </a>
                  </div>
                )}

                {/* Photograph modal */}
                {selectedArt.category === "Photographs" && (
                  <p>More photographs coming soon 📸</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
