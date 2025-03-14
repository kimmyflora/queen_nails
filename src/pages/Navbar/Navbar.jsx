import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/team">Teams</Link></li>
     
      </ul>
    </nav>
  );
}
