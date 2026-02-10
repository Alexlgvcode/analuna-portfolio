import React from 'react';
import '../styles/Music.css';
import taintedSilhouettes from '../assets/Ana Luna - Tainted Silhouettes.png';
import bleedingPen from '../assets/BleedingPenCover-1.png';
import canWePretend from '../assets/CANWECOVER - FINAL.png';
import daddysEmpire from '../assets/Daddy\'s Empire Cover.PNG';
import danceInATrance from '../assets/Cover .png';

function Music() {
  const musicItems = [
    {
      title: "Tainted Silhouettes (Album)",
      image: taintedSilhouettes,
      links: [
        { name: "Listen Here", url: "https://onerpm.link/277169347188?fbclid=PAZXh0bgNhZW0CMTEAAacy08qmx8BsDXZA1wSVBrN7XEM_kEEgS8NKE3EBXtqvcjrgtuDA-LAVFLo6vg_aem_wrv0EnRdg7o81aZ4X7oJaw" },
        { name: "Bandcamp", url: "https://analunamusic.bandcamp.com/album/tainted-silhouettes" }
      ]
    },
    {
      title: "Bleeding Pen",
      image: bleedingPen,
      links: [
        { name: "Listen Here", url: "https://onerpm.link/bleedingpen" }
      ]
    },
    {
      title: "Can We Pretend We Just Met at a Bar?",
      image: canWePretend,
      links: [
        { name: "Listen Here", url: "https://onerpm.link/metatabar" }
      ]
    },
    {
      title: "Daddy's Empire",
      image: daddysEmpire,
      links: [
        { name: "Listen Here", url: "https://onerpm.link/DaddysEmpire" }
      ]
    },
    {
      title: "Dance In A Trance",
      image: danceInATrance,
      links: [
        { name: "Listen Here", url: "https://ffm.to/danceinatrance" },
        { name: "Music Video", url: "https://youtu.be/LzPhpX-1AR8?si=NdfC4xT4IeEwm-8C" }
      ]
    }
  ];

  return (
    <div className="music-page">
      <div className="music-container">
        <h1>Listen Here</h1>
        <div className="spotify-section">
          <p>Stream on Spotify:</p>
          <a href="https://open.spotify.com/artist/356MULq9To4hBDwlggJdTP?si=FNoOZOGlRB6_KVaRyFOLlQ" className="spotify-link" target="_blank" rel="noopener noreferrer">
            Visit Spotify
          </a>
        </div>
        <div className="music-grid">
          {musicItems.map((item, index) => (
            <div key={index} className="music-item">
              <img src={item.image} alt={item.title} className="music-cover" />
              <h3>{item.title}</h3>
              <div className="music-links">
                {item.links.map((link, idx) => (
                  <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="music-link">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Music;