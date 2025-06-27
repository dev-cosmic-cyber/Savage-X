import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">UltraElite | Savage</div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Bio</Link>
        <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link to="/web" onClick={() => setMenuOpen(false)}>My Web</Link>
        <Link to="/video" onClick={() => setMenuOpen(false)}>Video</Link>
        <Link to="/music" onClick={() => setMenuOpen(false)}>Music</Link>
        <Link to="/MyApp" onClick={() => setMenuOpen(false)}>My App</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link to="/Upcoming" onClick={() => setMenuOpen(false)}></Link>
      </div>
    </nav>
  );
}
