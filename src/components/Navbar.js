// Navbar.js
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.scss';
import './mobile.scss';

const Navbar = () => {
  return (
    <nav>
      {/* Remplacez le texte "Accueil" par l'image */}
      <ScrollLink to="home" smooth={true} duration={500} offset={-80}>
        <img src={process.env.PUBLIC_URL + '/images/signature.svg'} alt="Signature de Matéo PAÏTA" />
      </ScrollLink>

      <ul>
        <li>
          <ScrollLink to="about" smooth={true} duration={500} offset={-80}>À propos</ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-80}>Contact</ScrollLink>
        </li>
        <li>
          <ScrollLink to="portfolio" smooth={true} duration={500} offset={-80}>Portfolio</ScrollLink>
        </li>

        <li>
          <ScrollLink to="skills" smooth={true} duration={500} offset={-80}>Skills</ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
