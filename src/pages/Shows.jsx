import React from 'react';
import '../styles/Shows.css';
import showPhoto from '../assets/showPhoto.PNG';

function Shows() {

  return (
    <div className="shows-page">
      <div className="shows-container">
        <h1>Upcoming Shows</h1>
        <p className="shows-subtitle">Catch Ana Luna live!</p>
        
        <div className="show-featured">
          <img src={showPhoto} alt="Ana Luna Live Show" className="show-image" />
          <div className="show-details">
            <h2>Breaking Sound LA at Rudolph's Bar and Tea</h2>
            <p className="show-date">February 26, 2026</p>
            <a 
              href="https://www.tixr.com/groups/breakingsoundla/events/breaking-sound-la-at-rudolph-s-bar-and-tea-02-26-171898" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-tickets"
            >
              Get Tickets
            </a>
          </div>
        </div>
        
        <div className="bandsintown-section">
          <h2>Stay Updated</h2>
          <p>Follow Ana Luna on Bandsintown to get notified about upcoming shows and new tour dates.</p>
          <a 
            href="https://www.bandsintown.com/a/15626526-ana-luna" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-bandsintown"
          >
            Follow on Bandsintown
          </a>
        </div>
      </div>
    </div>
  );
}

export default Shows;
