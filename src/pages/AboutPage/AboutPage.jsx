import React from 'react';
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="container">
      <div className="about-section">
        <h1>About Queen's Nails</h1>
        <p>Welcome to Queen Nails Salon, your premier destination for exquisite nail care and pampering services. At Queen's Nails, we strive to provide our clients with the ultimate nail salon experience, combining top-quality products, skilled technicians, and a relaxing atmosphere.</p>
      </div>

      <div className="spacer"></div> {/* Spacer div */}

      <div className="history-section">
        <h2>Our History</h2>
        <p>At Queen Nails, a cozy nail salon nestled in the heart of downtown, the family-run business is a labor of love. Husband and wife duo, work alongside their daughter Kimmy to create a warm, inviting atmosphere where clients can escape the stresses of everyday life. With a keen eye for detail and a passion for their craft, this tight-knit team takes pride in providing personalized services that leave every customer feeling pampered and beautiful.</p>
      </div>

      <div className="spacer"></div> {/* Spacer div */}

      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>At Queen's Nails, our mission is to exceed our clients' expectations by delivering exceptional nail care services in a warm and inviting environment. We are committed to providing personalized attention, innovative techniques, and impeccable sanitation practices to ensure the health and satisfaction of every client.</p>
      </div>

      <div className="spacer"></div> {/* Spacer div */}

      <div className="team-section">
        <h2>Meet Our Team</h2>
        <p>Our team of skilled nail technicians are dedicated to providing you with the highest level of care and expertise. With years of experience and a passion for creativity, our team members will help you achieve the perfect manicure and pedicure tailored to your unique style and preferences.</p>
        <table>
          <thead>
            <tr>
              <th>Team Member</th>
              <th>Specialty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Amy, Cindy, Leena, Kimmy, Tio</td>
              <td>Acrylic</td>
            </tr>
            <tr>
              <td>Tammy, Kelly, John, Kathy, Mimi, Jenny</td>
              <td>Pedicures</td>
            </tr>
            <tr>
              <td>Helen</td>
              <td>Waxing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="spacer"></div> {/* Spacer div */}

      <div className="social-links">
        <h2>Follow Us</h2>
        <ul>
          <li><a href="https://www.instagram.com/queen_nails240/">Instagram</a></li>
          <li><a href="https://www.facebook.com/queennails240">Facebook</a></li>
          <li><a href="https://www.yelp.com/biz/queen-nails-anaheim-4">Yelp</a></li>
        </ul>
      </div>

    </div>
  );
}
