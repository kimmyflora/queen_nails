import React from "react";
import "./TeamPage.css";

export default function TeamPage() {
  return (
    <div className="team-section">
      <h2>Meet Our Team</h2>
      <p>
        Our team of skilled nail technicians are dedicated to providing you
        with the highest level of care and expertise. With years of experience
        and a passion for creativity, our team members will help you achieve
        the perfect manicure and pedicure tailored to your unique style and
        preferences.
      </p>
      <div className="team-cards">
        <div className="team-card">
          <h3>Amy</h3>
          <p className="specialty">Acrylic, Gel X, Hard Gel</p>
        </div>
        <div className="team-card">
          <h3>Cindy</h3>
          <p className="specialty">Acrylic, Gel X, Hard Gel</p>
        </div>
        <div className="team-card">
          <h3>Helen</h3>
          <p className="specialty">Waxing, Facial, Gel Manicure</p>
        </div>
        <div className="team-card">
          <h3>Jenny</h3>
          <p className="specialty">Acrylic</p>
        </div>
        <div className="team-card">
          <h3>John</h3>
          <p className="specialty">Pedicure</p>
        </div>
        <div className="team-card">
          <h3>Kimmy</h3>
          <p className="specialty">Acrylic, Hard Gel</p>
        </div>
        <div className="team-card">
          <h3>Kathy</h3>
          <p className="specialty">Pedicure</p>
        </div>
        <div className="team-card">
          <h3>Kelly</h3>
          <p className="specialty">Pedicure</p>
        </div>
        <div className="team-card">
          <h3>Leena</h3>
          <p className="specialty">Acrylic, Gel X, Hard Gel</p>
        </div>
        <div className="team-card">
          <h3>Mimi</h3>
          <p className="specialty">Pedicure</p>
        </div>
        <div className="team-card">
          <h3>Tio</h3>
          <p className="specialty">Acrylic, Gel X, Hard Gel</p>
        </div>
      </div>
    </div>
  );
}
