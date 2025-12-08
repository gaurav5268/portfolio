import React from "react";
import "../styles/Navbar.css";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const scrollTo = (id) => {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
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

        {/* ⭐ NEW: Gallery opens its own page */}
        <li>
          <NavLink to="/gallery" className="nav-link">
            Gallery
          </NavLink>
        </li>

        {/* Resume page */}
        <li>
          <NavLink to="/resume" className="nav-link">
            Resume
          </NavLink>
        </li>

        {/* Contact page */}
        <li>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
