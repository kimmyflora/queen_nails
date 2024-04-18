import React from 'react';
import "./FeedPage.css";

export default function FeedPage() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/pictures">Pictures</a></li>
        </ul>
      </nav>
      <div className="hero-section">
        <h1 className="hero-title">Welcome to Queen's Nails Salon</h1>
        <p className="hero-description">Discover the latest trends in nail art and pamper yourself with our luxurious nail services.</p>
        <a href="/menu" className="cta-btn">Explore the available services</a>
      </div>
    </div>
  );
}
