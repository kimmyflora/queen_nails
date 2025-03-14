import React from 'react';
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>About Queen's Nails</h1>
        <p>Your trusted salon for luxury nail care and beauty services.</p>
      </div>

      {/* About Content */}
      <div className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            At Queen's Nails, we believe that beauty is about self-care and confidence.
            Our family-run salon is a labor of love, operated by a dedicated team
            that strives to create a warm and inviting atmosphere for all our clients.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our goal is to provide the highest quality nail services while maintaining
          a relaxing and enjoyable experience for our clients.
        </p>
      </div>

      {/* Social Media */}
      <div className="social-section">
        <h2>Follow Us</h2>
        <div className="social-links">
          <a href="https://www.instagram.com/queen_nails240/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/queennails240/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.yelp.com/biz/queen-nails-anaheim-4" target="_blank" rel="noopener noreferrer">Yelp</a>
        </div>
      </div>
    </div>
  );
}
