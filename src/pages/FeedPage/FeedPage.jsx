import React from 'react';
import "./FeedPage.css";

export default function FeedPage() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to Queen's Nails </h1>
        <p className="hero-description">Discover the latest trends in nail art and pamper yourself with our luxurious nail services.</p>
        <h3><a href="/menu" className="cta-btn">Explore the available services</a></h3>
      </div>
    </div>
  );
}
