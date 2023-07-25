// HomePage.js
import './HomePage.scss';
import React, { useState, useEffect } from 'react';
import SkillsSection from './SkillsSection';
import Portfolio from './Portfolio';
import ContactPage from "./ContactPage";
import { Link, Element } from 'react-scroll';

const words = ['Créer...', 'Détruire...', 'Imaginer...', 'Développer...'];

const HomePage = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);
  const [blinkCount, setBlinkCount] = useState(0);

  // typing effect
  useEffect(() => {
    if (index === words.length) {
      setIndex(0);
    }

    if (!reverse && subIndex === words[index].length) {
      setReverse(true);
      setBlinkCount(0);
      return;
    }

    if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
    }, reverse ? 150 : 500); // Use a smaller delay (150ms) for reverse (effacement), and 500ms for typing speed.

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, blinkCount]);

  // blinker effect
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
      if (subIndex === 0 && reverse && !blink) { // if at the start of a word and reversing and cursor is off
        setBlinkCount((prevCount) => prevCount + 1); // increment blink count
      }
    }, 300);
    return () => clearTimeout(timeout2);
  }, [blink, subIndex, reverse]);

  return (
    <div>
      <Element name="home">
        {/* Section 1: Infos */}
        <div className="landing-page">
          <div className='bloc1'>
            <div className='menu1'>
              <h1>Développeur web</h1>
              <ul>
                <li>SEO</li>
                <li>Webdesign</li>
                <li>CSS</li>
                <li>REACT</li>
                <li>JavaScript</li>
                <li>HTML5</li>
              </ul>
            </div>
          <div className='blocNom'>
          <p>MATÉO PAÏTA</p>
          </div>
          </div>
          <div className='bloc2'>
          <h2>{`${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`}</h2>
          <img src="../images/signatureblack.png" alt="Signature de Matéo PAÏTA" />

          </div>
        </div>
        <div className="separator" />
      </Element>

      <Element name="skills">
        {/* Section 2: Compétences */}
        <SkillsSection />
        <div className="separator" />
      </Element>

      <Element name="portfolio">
        <Portfolio />
        <div className="separator" />
      </Element>

      <Element name="contact">
        <ContactPage />
      </Element>

      
    </div>
  );
};

export default HomePage;
