import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const artworks = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of your project",
    image: null,
    category: "Projects"
  },
  {
    id: 2,
    title: "Artwork 1",
    description: "Description of your artwork",
    image: null,
    category: "Artworks"
  },
  {
    id: 3,
    title: "Project 2",
    description: "Description of your project",
    image: null,
    category: "Projects"
  },
  {
    id: 4,
    title: "Photograph 1",
    description: "Description of your photograph",
    image: null,
    category: "Photographs"
  },
  {
    id: 5,
    title: "Artwork 2",
    description: "Description of your artwork",
    image: null,
    category: "Artworks"
  },
  {
    id: 6,
    title: "Photograph 2",
    description: "Description of your photograph",
    image: null,
    category: "Photographs"
  }
];

const categories = ["All", ...new Set(artworks.map(art => art.category))];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedArt, setSelectedArt] = useState(null);

  const filteredArtworks =
    selectedCategory === "All"
      ? artworks
      : artworks.filter(art => art.category === selectedCategory);

  return (
    <section id="artworks" className="gallery-section section-panel">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Gallery
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Explore my Projects, Artworks, and Photographs
      </motion.p>

      <motion.div
        className="gallery-filters"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {categories.map(category => (
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

      <motion.div className="gallery-grid" layout>
        <AnimatePresence>
          {filteredArtworks.map((art, index) => (
            <motion.div
              key={art.id}
              className="gallery-item"
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={() => setSelectedArt(art)}
            >
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
                <span className="gallery-category">{art.category}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

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
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedArt(null)}
              >
                ×
              </button>

              <div className="modal-image">
                {selectedArt.image ? (
                  <img src={selectedArt.image} alt={selectedArt.title} />
                ) : (
                  <div className="placeholder-content large">
                    <span className="placeholder-icon">🎨</span>
                    <span className="placeholder-text">Image Coming Soon</span>
                  </div>
                )}
              </div>

              <div className="modal-info">
                <h3>{selectedArt.title}</h3>
                <span className="gallery-category">
                  {selectedArt.category}
                </span>
                <p>{selectedArt.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
