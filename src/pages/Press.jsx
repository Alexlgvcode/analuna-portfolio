import React from 'react';
import '../styles/Press.css';
import img1 from '../assets/2FD9F09D-8F49-40E2-A4B4-94350D76B64E.jpeg';
import img2 from '../assets/31DFDBE8-5FFD-4683-9BC0-9EF9DC3FDAA1.jpeg';
import img3 from '../assets/6C2542EB-6178-4252-B5B5-34BDF964EAD2.jpeg';
import img4 from '../assets/6ED6E226-338B-43EC-BCE5-CFC0BE6F5818.jpeg';
import img5 from '../assets/764D0E70-A6D3-45D6-A259-5A3DA6ADDE03.jpeg';
import img6 from '../assets/C397EE3F-B542-4909-9C78-7E54459632A1.png';
import babyPhoto from '../assets/babyPhoto.jpeg';
import daddysEmpire from '../assets/Daddy\'s Empire Cover.PNG';
import canWePretend from '../assets/CANWECOVER - FINAL.png';
import bleedingPen from '../assets/BleedingPenCover-1.png';
import danceInATrance from '../assets/Cover .png';
import taintedSilhouettes from '../assets/Ana Luna - Tainted Silhouettes.png';

function Press() {
  const availableImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    babyPhoto,
    daddysEmpire,
    canWePretend,
    bleedingPen,
    danceInATrance,
    taintedSilhouettes,
  ];

  const pressItems = [
    {
      publication: "ENTERTAINMENT FLAIR",
      title: "Ana Luna Breaks Down the Symbolism and Process Behind 'Dance in a Trance'",
      url: "https://ronrockycoloma.com/2025/06/22/ana-luna-breaks-down-the-symbolism-and-process-behind-dance-in-a-trance/",
    },
    {
      publication: "MARVIN",
      title: "Ana Luna Is Done Holding Back: The Genre-Defying Artist on Heartbreak, Identity, and the Hypnotic Power of 'Dance in a Trance'",
      url: "https://marvin.la/ana-luna-is-done-holding-back-the-genre-defying-artist-on-heartbreak-identity-and-the-hypnotic-power-of-dance-in-a-trance/",
    },
    {
      publication: "OUTNOW MAGAZINE",
      title: "Ana Luna Unveils Emotionally Stirring New Single 'Daddy's Empire'",
      url: "https://outnowmagazine.com/ana-luna-daddys-empire/",
    },
    {
      publication: "PRELUDE PRESS",
      title: "Ana Luna Reveals New Single, 'Daddy's Empire'",
      url: "https://preludepress.com/news/2025/07/11/ana-luna-daddys-empire/",
    },
    {
      publication: "EUPHONIC",
      title: "NEW MUSIC: Ana Luna's 'Can We Pretend We Just Met At A Bar'",
      url: "https://www.euphonicmagazine.com/news/newmusic-analuna",
    },
    {
      publication: "MELODIC MAGAZINE",
      title: "Ana Luna describes the emotional complexity of letting go on 'Can We Pretend We Just Met at a Bar?'",
      url: "https://www.melodicmag.com/news/ana-luna-describes-the-emotional-complexity-of-letting-go-on-can-we-pretend-we-just-met-at-a-bar/",
    },
    {
      publication: "PRELUDE PRESS",
      title: "Ana Luna Shares New Single, 'Bleeding Pen'",
      url: "https://preludepress.com/news/2025/09/18/ana-luna-bleeding-pen/",
    },
    {
      publication: "FIFTEEN MINUTES OF FAME",
      title: "Single Review of Bleeding Pen by Ana Luna",
      url: "https://fmofmusicentertainment.com/2025/10/03/189-single-review-of-bleeding-pen-by-ana-luna/?fbclid=PARlRTSAOIsIhleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQIY2FsbHNpdGUBMgABp1k7q0dNwbMhtms_hU8VCTSC3HRBgICt-5-XZl0yZOKwgHwfv8CI0iP0KqRi_aem_1K7_rw2oU6iARi3voU53MA",
    },
    {
      publication: "OFF THE RECORD PRESS",
      title: "Ana Luna on her Debut Album, Tainted Silhouettes",
      url: "https://offtherecordpress.com/interviews/2025/11/9/gkkj7pnd3fxnj2hd3ji8evhes3x1dd",
    },
    {
      publication: "THE CONCERT CHRONICLES",
      title: "Ana Luna: inside Tainted Silhouettes, her cinematic debut",
      url: "https://theconcertchronicles.com/2025/11/17/ana-luna-inside-tainted-silhouettes-her-cinematic-debut/",
    },
    {
      publication: "STARFREAK",
      title: "Ana Luna – Tainted Silhouettes Album Review",
      url: "https://starfreakmag.com/ana-luna-album-review/",
    }
  ];

  const itemsWithImages = pressItems.map((item, index) => ({
    ...item,
    image: availableImages[index % availableImages.length]
  }));

  return (
    <div className="press-page">
      <div className="press-container">
        <h1>Press</h1>
        <div className="press-list">
          {itemsWithImages.map((item, index) => (
            <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="press-item">
              <div className="press-image">
                <img src={item.image} alt={item.publication} />
              </div>
              <div className="press-text">
                <h3>{item.publication}</h3>
                <p>{item.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Press;