import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaSpotify,
  FaApple,
  FaTiktok,
  FaYoutube,
  FaXTwitter
} from 'react-icons/fa6';
import '../styles/Home.css';
import featuredAlbum from '../assets/ana-32.jpeg';
import taintedSilhouettes from '../assets/Ana Luna - Tainted Silhouettes.png';
import daddysEmpire from '../assets/Daddy\'s Empire Cover.PNG';
import danceInATrance from '../assets/Cover .png';
import canWePretend from '../assets/CANWECOVER - FINAL.png';
import bleedingPen from '../assets/BleedingPenCover-1.png';

function Home() {

  const socials = [
    { name: "Instagram", url: "https://www.instagram.com/analunaofficial?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr", icon: FaInstagram },
    { name: "Spotify", url: "https://open.spotify.com/artist/356MULq9To4hBDwlggJdTP?si=26ZauxPDSJCn_owapjk2Rg&nd=1&dlsi=bcd162ed04c648bc", icon: FaSpotify },
    { name: "Apple Music", url: "https://music.apple.com/fr/artist/ana-luna/1637616300?l=en-GB", icon: FaApple },
    { name: "TikTok", url: "https://www.tiktok.com/@officialanaluna?_t=ZP-8vkipFTSS7j&_r=1", icon: FaTiktok },
    { name: "YouTube", url: "https://www.youtube.com/@officialanaluna", icon: FaYoutube },
    { name: "Twitter/X", url: "https://x.com/officialanaluna", icon: FaXTwitter }
  ];

  return (
    <div className="home-page">
      <div className="hero-section" style={{ backgroundImage: `url(${featuredAlbum})` }}>
        <div className="hero-overlay">
          <div className="social-icons-hero">
            {socials.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="hero-social-icon" aria-label={social.name}>
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="albums-section">
        <h2>Latest Releases</h2>
        <div className="albums-grid">
          <Link to="/music" className="album-card">
            <img src={taintedSilhouettes} alt="Tainted Silhouettes" />
            <h3>Tainted Silhouettes</h3>
            <p className="listen-label">LISTEN HERE</p>
          </Link>
          <Link to="/music" className="album-card">
            <img src={daddysEmpire} alt="Daddy's Empire" />
            <h3>Daddy's Empire</h3>
            <p className="listen-label">LISTEN HERE</p>
          </Link>
          <Link to="/music" className="album-card">
            <img src={danceInATrance} alt="Dance In A Trance" />
            <h3>Dance In A Trance</h3>
            <p className="listen-label">LISTEN HERE</p>
          </Link>
          <Link to="/music" className="album-card">
            <img src={canWePretend} alt="Can We Pretend" />
            <h3>Can We Pretend We Just Met at a Bar?</h3>
            <p className="listen-label">LISTEN HERE</p>
          </Link>
          <Link to="/music" className="album-card">
            <img src={bleedingPen} alt="Bleeding Pen" />
            <h3>Bleeding Pen</h3>
            <p className="listen-label">LISTEN HERE</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;