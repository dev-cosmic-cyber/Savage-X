import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">UltraElite | Savage</div>
      <div className="navbar-links">
        <Link to="/">Bio</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/web">My Web</Link>
        <Link to="/video">Video</Link>
        <Link to="/music">Music</Link>
        <Link to="/MyApp">My App</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/Upcoming"></Link>
      </div>
    </nav>
  );
}