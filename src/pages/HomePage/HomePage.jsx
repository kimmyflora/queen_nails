import "./HomePage.css";
import React from "react";
import { FaHandSparkles, FaSpa, FaPalette } from "react-icons/fa";
import MapImage from "/src/assets/map.png"; // Ensure this matches your file

export default function HomePage() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Queen's Nails</h1>
          <p>Your beauty, our passion. Experience luxury nail care today.</p>
          <a href="/menu" className="cta-btn">Explore Our Services</a>
        </div>
      </div>

      {/* Featured Services Section */}
      <div className="services-section">
        <h2>Our Signature Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <FaHandSparkles className="service-icon" />
            <h3>Manicures</h3>
            <p>Pamper your hands with our expert nail treatments.</p>
          </div>
          <div className="service-card">
            <FaSpa className="service-icon" />
            <h3>Pedicures</h3>
            <p>Relax and refresh with our luxurious pedicure services.</p>
          </div>
          <div className="service-card">
            <FaPalette className="service-icon" />
            <h3>Nail Art</h3>
            <p>Express your style with unique and custom nail designs.</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2>Visit Us</h2>
        <div className="contact-details">
          <div className="contact-info">
            <p>📍 240 W Lincoln Ave, Anaheim, CA 92805</p>
            <p>📞 <a href="tel:+17145351019">(714) 535-1019</a></p>
          </div>
          <div className="map-link">
            <a
              href="https://www.google.com/maps/place/240+W+Lincoln+Ave,+Anaheim,+CA+92805"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={MapImage}
                alt="Map of Queen's Nails"
                className="map-image"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}