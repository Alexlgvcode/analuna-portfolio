import React from 'react';
import '../styles/Support.css';

function Support() {
  return (
    <div className="support-page">
      <div className="support-container">
        <h1>Merch / Support Me</h1>
        <p className="support-subtitle">Merch out soon, but for now…</p>
        
        <div className="support-section">
          <h2>Bandcamp</h2>
          <p className="support-text">
            Buy a digital copy of my music!
          </p>
          
          <div className="support-buttons">
            <a 
              href="https://analunamusic.bandcamp.com/album/tainted-silhouettes" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-bandcamp"
            >
              Buy on Bandcamp
            </a>
          </div>
        </div>

        <div className="merch-section">
          <h2>Support My Music</h2>
          <p className="support-text">
            Every dime goes towards creating my music. From recordings, to creating epic visuals, to musicians in my band. Thank you for your support!
          </p>
          <a
            href="https://gofund.me/f15300672"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gofundme"
          >
            Support on GoFundMe
          </a>
        </div>
      </div>
    </div>
  );
}

export default Support;
