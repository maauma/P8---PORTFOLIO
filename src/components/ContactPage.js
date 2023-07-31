import React, { useEffect } from 'react';
import AOS from 'aos';
import './ContactPage.scss';
import './mobile.scss';
import 'aos/dist/aos.css';

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <div className="contact" data-aos="fade-up">
      <div className='contenu' data-aos="fade-up">
        <img src={process.env.PUBLIC_URL + '/images/signatureblack.png'} alt="Votre nom" />

        <h1>Contactez-moi</h1>
        <p>Besoin d'un développeur web pour réaliser votre projet ? Avec une expertise en HTML, CSS, JavaScript et React, je suis là pour donner vie à vos idées ! <a href="mailto:paitamateo@icloud.com">Contactez-moi</a> dès maintenant pour discuter de votre projet web.</p>
        <h4><i className="fas fa-map-marker-alt"></i> Lyon - France</h4>
        <p><i className="fas fa-envelope"></i> <a href="mailto:paitamateo@icloud.com">paitamateo@icloud.com</a></p>
      </div>
    </div>
  );
};

export default ContactPage;
