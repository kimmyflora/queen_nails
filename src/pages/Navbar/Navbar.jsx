import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-brand">Queen Nails</div>
        <ul className={`nav-links ${isNavOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={toggleNav}>Home</Link></li>
          <li><Link to="/about" onClick={toggleNav}>About</Link></li>
          <li><Link to="/menu" onClick={toggleNav}>Menu</Link></li>
          <li><Link to="/team" onClick={toggleNav}>Teams</Link></li>
          <li><Link to="/book" onClick={toggleNav}>Booking</Link></li>
          <li><Link to="/review" onClick={toggleNav}>Reviews</Link></li>
        </ul>
        <button className="nav-toggle" onClick={toggleNav}>
          {isNavOpen ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}