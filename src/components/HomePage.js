import './HomePage.scss';
import React, { useState, useEffect } from 'react';
import SkillsSection from './SkillsSection';
import Portfolio from './Portfolio';
import AboutPage from './AboutPage';
import ContactPage from "./ContactPage";
import './mobile.scss';
import { Link as ScrollLink, Element } from 'react-scroll';
import { Link } from 'react-router-dom';

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
        <section className="landing-page">
          <div className='section1' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/wallpaper.jpg)` }}>
            <div className='bloc1'>
              <div className='menu1'>
                <h1>Développeur web</h1>
                <hr />
                <ul>
                  <li><ScrollLink to="skills" smooth={true} duration={500}>SEO</ScrollLink></li>
                  <li><ScrollLink to="skills" smooth={true} duration={500}>Webdesign</ScrollLink></li>
                  <li><ScrollLink to="skills" smooth={true} duration={500}>CSS</ScrollLink></li>
                  <li><ScrollLink to="skills" smooth={true} duration={500}>REACT</ScrollLink></li>
                  <li><ScrollLink to="skills" smooth={true} duration={500}>JavaScript</ScrollLink></li>
                  <li><ScrollLink to="skills" smooth={true} duration={500}>HTML5</ScrollLink></li>
                </ul>
              </div>

              <div className='blocNom'>
                <img className='sign-mobile' src={process.env.PUBLIC_URL + '/images/signatureblack.svg'} alt="Signature de Matéo PAÏTA" />

                <h3>MATÉO PAÏTA</h3>
                <hr />
                <p>LYON <strong>FRANCE</strong></p>
                <h4>Développeur web</h4>
                <ul className='liste-mobile'>
                  <li><ScrollLink to="skills" smooth={true} duration={500}>SEO</ScrollLink></li>
                  <li><ScrollLink to="skills" smooth={true} duration={500}>Webdesign</ScrollLink></li>
                  <li><ScrollLink to="skills" smooth={true} duration={500}>CSS</ScrollLink></li>
                  <li><ScrollLink to="skills" smooth={true} duration={500}>REACT</ScrollLink></li>
                  <li><ScrollLink to="skills" smooth={true} duration={500}>JavaScript</ScrollLink></li>
                  <li><ScrollLink to="skills" smooth={true} duration={500}>HTML5</ScrollLink></li>
                </ul>
                <div className='sign-desktop'>
                  <img src={process.env.PUBLIC_URL + '/images/signatureblack.svg'} alt="Signature de Matéo PAÏTA" />
                </div>
              </div>
            </div>
            <div className='bloc2'>
              <h2>{`${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`}</h2>
            </div>
          </div>
        </section>
        <hr />
      </Element>

      <Element name="skills">
        {/* Section 2: Compétences */}
        <SkillsSection />
      </Element>
      <hr />

      <Element name="portfolio">
        <Portfolio />
      </Element>
      <hr />

      <Element name="about-page">
        <AboutPage />
      </Element>
      <hr />

      <Element name="contact">
        <ContactPage />
      </Element>
    </div>
  );
};

export default HomePage;
