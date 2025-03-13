import React from "react";
import "./FooterPage.css"; 
import { FaInstagram, FaYelp, FaFacebook } from "react-icons/fa"; 

export default function FooterPage() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p><strong>Queen Nails</strong></p>
        <p>📍 240 W Lincoln Ave, Anaheim, CA 92805 | 📞 <a href="tel:+17145351019">(714) 535-1019</a> </p>

        <div className="social-links">
          <a href="https://www.instagram.com/YOUR_INSTAGRAM" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.yelp.com/biz/YOUR_YELP" target="_blank" rel="noopener noreferrer">
            <FaYelp />
          </a>
          <a href="https://www.facebook.com/YOUR_FACEBOOK" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}
