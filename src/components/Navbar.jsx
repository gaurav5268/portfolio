import React from "react";
import "../styles/Navbar.css";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const scrollTo = (id) => {
    // If you are already on home page
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // If you're on another route → go to home first
      window.location.href = `/#${id}`;
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">Gravity</div>

      <ul>
        {/* Scroll items */}
        <li onClick={() => scrollTo("home")}>Home</li>
        <li onClick={() => scrollTo("about")}>About</li>
        <li onClick={() => scrollTo("skills")}>Skills</li>
        <li onClick={() => scrollTo("artworks")}>Gallery</li>

        {/* Route items */}
        <li>
          <NavLink to="/resume" className="nav-link">Resume</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
