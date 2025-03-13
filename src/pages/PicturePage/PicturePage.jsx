import "./PicturePage.css";
import React from "react";

export default function PicturePage() {
  return (
    <div className="picture-container">
      <h1>Our Work</h1>
      <p>Explore our beautiful nail art and services captured in these albums.</p>

      {/* Album Sections */}
      <div className="album-grid">
        <div className="album">
          <h2>Album 1</h2>
          <div className="image-grid">
            <img src="/images/nail1.jpg" alt="Nail Art 1" />
            <img src="/images/nail2.jpg" alt="Nail Art 2" />
            <img src="/images/nail3.jpg" alt="Nail Art 3" />
          </div>
        </div>

        <div className="album">
          <h2>Album 2</h2>
          <div className="image-grid">
            <img src="/images/nail4.jpg" alt="Nail Art 4" />
            <img src="/images/nail5.jpg" alt="Nail Art 5" />
            <img src="/images/nail6.jpg" alt="Nail Art 6" />
          </div>
        </div>

        <div className="album">
          <h2>Album 3</h2>
          <div className="image-grid">
            <img src="/images/nail7.jpg" alt="Nail Art 7" />
            <img src="/images/nail8.jpg" alt="Nail Art 8" />
            <img src="/images/nail9.jpg" alt="Nail Art 9" />
          </div>
        </div>
      </div>
    </div>
  );
}
