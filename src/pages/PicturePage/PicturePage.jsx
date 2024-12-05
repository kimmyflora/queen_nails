import React from 'react';
import "./PicturePage.css";


export default function PicturePage() {
  return (
    <div className="picture-container">
      
      <h1>Nail Pictures</h1>
      <div className="picture-gallery">
        <div className="album">
          <h2>Album 1</h2>
          {/* Content for Album 1 */}
        </div>
        <div className="album">
          <h2>Album 2</h2>
          {/* Content for Album 2 */}
        </div>
        <div className="album">
          <h2>Album 3</h2>
          {/* Content for Album 3 */}
        </div>
      </div>
    </div>
  );
}
