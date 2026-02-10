import React from 'react';
import '../styles/About.css';
import aboutPhoto from '../assets/babyPhoto.jpeg';

function About() {

  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About Ana Luna</h1>
        <div className="about-content">
          <div className="about-photo">
            <img src={aboutPhoto} alt="Ana Luna" className="profile-image" />
          </div>
          <div className="about-text">
            <p>
              I was born in Ukraine and raised in Paris, France. A natural-born storyteller, I found my voice through acting and singing. The art of drama shapes my music, sharpening my craftsmanship and deepening my self-expression.
            </p>
            <p>
              My sound defies borders in genre, shifting between dream pop and alt rock with the atmosphere of cinema. It’s airy, celestial, sultry, and introspective.
            </p>
            <p>
              My music guides listeners through the tender and psychological, exploring the roots of emotion and the layers beneath it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;