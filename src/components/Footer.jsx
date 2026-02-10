import React from 'react';
import {
  FaInstagram,
  FaSpotify,
  FaApple,
  FaTiktok,
  FaYoutube,
  FaXTwitter
} from 'react-icons/fa6';
import LayloEmbed from './LayloEmbed';
import '../styles/Footer.css';

function Footer() {
  const socials = [
    { name: "Instagram", url: "https://www.instagram.com/analunaofficial?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr", icon: FaInstagram },
    { name: "Spotify", url: "https://open.spotify.com/artist/356MULq9To4hBDwlggJdTP?si=26ZauxPDSJCn_owapjk2Rg&nd=1&dlsi=bcd162ed04c648bc", icon: FaSpotify },
    { name: "Apple Music", url: "https://music.apple.com/fr/artist/ana-luna/1637616300?l=en-GB", icon: FaApple },
    { name: "TikTok", url: "https://www.tiktok.com/@officialanaluna?_t=ZP-8vkipFTSS7j&_r=1", icon: FaTiktok },
    { name: "YouTube", url: "https://www.youtube.com/@officialanaluna", icon: FaYoutube },
    { name: "Twitter/X", url: "https://x.com/officialanaluna", icon: FaXTwitter }
  ];

  return (
    <footer className="footer">

      <div className="footer-container">
        <div className="laylo-section">
          <h3>Subscribe</h3>
          <LayloEmbed />
        </div>

        {/* Social Media Icons */}
        <div className="footer-socials">
          {socials.map((social, index) => (
            <a 
              key={index} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-icon" 
              aria-label={social.name}
            >
              <social.icon />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>© 2026 Ana Luna | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
