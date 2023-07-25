// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
            <img src="../images/signature.png" alt="Signature de Matéo PAÏTA" />

      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active-link">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link">À propos</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" activeClassName="active-link">Portfolio</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
