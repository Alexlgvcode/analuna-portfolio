import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/allogo.png';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" aria-label="Ana Luna Home">
          <img src={logo} alt="Ana Luna logo" className="logo-large" />
        </Link>
      </div>
      <button
        type="button"
        className="navbar-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span className="navbar-toggle-bar" />
        <span className="navbar-toggle-bar" />
        <span className="navbar-toggle-bar" />
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/music" onClick={closeMenu}>Music</Link></li>
        <li><Link to="/shows" onClick={closeMenu}>Shows</Link></li>
        <li><Link to="/support" onClick={closeMenu}>Merch / Support Me</Link></li>
        <li><Link to="/archive" onClick={closeMenu}>Archive</Link></li>
        <li><Link to="/press" onClick={closeMenu}>Press</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;