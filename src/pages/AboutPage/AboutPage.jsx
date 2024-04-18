import React from 'react';
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-section">
        <h1>About Queen's Nails </h1>
        <p>Welcome to Queen's Nails Salon, your premier destination for exquisite nail care and pampering services. At Queen's Nails, we strive to provide our clients with the ultimate nail salon experience, combining top-quality products, skilled technicians, and a relaxing atmosphere.</p>
      </div>
      <div className="history-section">
        <h2>Our History</h2>
        <p>Founded in [year], Queen's Nails Salon has been serving the [city/area] community for [number] years. We have built a reputation for excellence and professionalism, earning the trust and loyalty of our valued clients.</p>
      </div>
      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>At Queen's Nails, our mission is to exceed our clients' expectations by delivering exceptional nail care services in a warm and inviting environment. We are committed to providing personalized attention, innovative techniques, and impeccable sanitation practices to ensure the health and satisfaction of every client.</p>
      </div>
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <p>Our team of skilled nail technicians are dedicated to providing you with the highest level of care and expertise. With years of experience and a passion for creativity, our team members will help you achieve the perfect manicure and pedicure tailored to your unique style and preferences.</p>
      </div>
      <div className="social-links">
        <h2>Follow Us</h2>
        <ul>
          <li><a href="https://www.instagram.com/queensnailssalon/">Instagram</a></li>
          <li><a href="https://www.facebook.com/queensnailssalon/">Facebook</a></li>
        </ul>
      </div>
    </div>
  );
}
