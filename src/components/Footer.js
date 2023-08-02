import React from 'react';
import './Footer.scss';
import './mobile.scss';
import './mobile.scss';

const Footer = () => {
  return (
    <footer>
    <img src= {process.env.PUBLIC_URL + '/images/signature.svg'} alt="Signature de Matéo PAÏTA" />      <p>Tous droits réservés Matéo PAÏTA</p>
    </footer>
  );
};

export default Footer;
