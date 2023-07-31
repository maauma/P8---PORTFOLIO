import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap,
  faBriefcase,
  faTools,
} from '@fortawesome/free-solid-svg-icons';
import './AboutPage.scss';
import './ContactPage.scss';
import './mobile.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <div className="about">
      <div className="about-header" data-aos="fade-up">
        <img src={process.env.PUBLIC_URL + '/images/profile.jpeg'} alt="Votre nom" />
        <p>
          Bonjour! Je suis <strong>Matéo Païta</strong>, un <strong>développeur web basé à Lyon</strong>.<br />Passionné par le code,
          j'aime créer des sites web élégants, réactifs et axés sur l'utilisateur.
        </p>
      </div>

      <section className="bloc-about">
        <div className="info-section" data-aos="fade-up">
          <h2>
            <FontAwesomeIcon icon={faGraduationCap} /> Ma formation
          </h2>
          <p>
            J'ai obtenu mon diplôme en [Votre diplôme] de [Votre université] en [Année]. Pendant mes études, j'ai acquis
            une solide compréhension des principes de la programmation et j'ai développé une passion pour le développement web.
          </p>
        </div>

        <div className="info-section" data-aos="fade-up">
          <h2>
            <FontAwesomeIcon icon={faBriefcase} /> Mon expérience
          </h2>
          <p>
            J'ai travaillé comme développeur web pour [Nom de l'entreprise] pendant [Durée], où j'ai acquis une expérience
            pratique en travaillant sur divers projets et en apprenant de nouvelles technologies.
          </p>
        </div>

        <div className="info-section" data-aos="fade-up">
          <h2>
            <FontAwesomeIcon icon={faTools} /> Mes compétences
          </h2>
          <p>
            Je suis compétent en HTML, CSS, JavaScript et React, avec une connaissance de base des bases de données SQL et NoSQL.
            J'aime apprendre de nouvelles technologies et je suis toujours prêt à relever de nouveaux défis.
          </p>
        </div>

        <img className='signature' src={process.env.PUBLIC_URL + '/images/signatureblack.png'} alt="Votre nom" data-aos="fade-up"/>
      </section>
    </div>
  );
};

export default AboutPage;
