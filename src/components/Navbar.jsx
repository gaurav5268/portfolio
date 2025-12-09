import React, { useState } from "react";
import "../styles/Navbar.css";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">Gravity</div>

      {/* Hamburger only shows on mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li onClick={() => scrollTo("home")}>Home</li>
        <li onClick={() => scrollTo("about")}>About</li>
        <li onClick={() => scrollTo("skills")}>Skills</li>

        <li>
          <NavLink to="/gallery" className="nav-link" onClick={() => setMenuOpen(false)}>
            Gallery
          </NavLink>
        </li>

        <li>
          <NavLink to="/resume" className="nav-link" onClick={() => setMenuOpen(false)}>
            Resume
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
