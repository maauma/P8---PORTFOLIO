import React, { useState, useEffect } from 'react';
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
import { Collapse } from 'react-collapse';

const AboutPage = () => {
  const [isOpenFormation, setIsOpenFormation] = useState(false);
  const [isOpenExperience, setIsOpenExperience] = useState(false);
  const [isOpenSkills, setIsOpenSkills] = useState(false);

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
        Salut ! Moi c'est <strong>Matéo Païta</strong>, un <strong>développeur web</strong> en freelance passionné, basé à <strong>Lyon</strong>. <br></br>
        Après avoir exploré le <strong>monde de la science</strong> et exercé en tant que <strong>designer graphique</strong>, je me suis tourné vers le <strong>développement web</strong>, cherchant à combiner ma <strong>passion pour la technologie et ma créativité</strong>.Mon objectif est de créer des solutions numériques <strong>intuitives et attrayantes</strong> qui répondent à vos besoins tout en offrant une <strong>expérience utilisateur exceptionnelle</strong>.
        </p>
      </div>

      <section className="bloc-about">
        <div className="info-section" data-aos="fade-up">
          <h2 onClick={() => setIsOpenFormation(!isOpenFormation)}>
            <FontAwesomeIcon icon={faGraduationCap} /> Formation
          </h2>
          <Collapse isOpened={isOpenFormation}>
            <p>
            Mon parcours académique est <strong>diversifié</strong>. Après avoir obtenu mon <strong>Bac S</strong>, j'ai entrepris des études en Médecine et Biologie, avant de réaliser que ma <strong>véritable passion</strong> résidait dans le <strong>domaine du numérique</strong>. J'ai ensuite obtenu une qualification en design graphique, où j'ai développé mon <strong>sens esthétique</strong> et ma compréhension des <strong>besoins des utilisateurs</strong>. En 2023, j'ai décidé d'approfondir mes compétences techniques en suivant une <strong>formation de développeur web chez OpenClassrooms</strong>, renforçant ainsi ma capacité à créer des <strong>solutions web complètes</strong>.
            </p>
          </Collapse>
        </div>

        <div className="info-section" data-aos="fade-up">
          <h2 onClick={() => setIsOpenExperience(!isOpenExperience)}>
            <FontAwesomeIcon icon={faBriefcase} /> Expérience
          </h2>
          <Collapse isOpened={isOpenExperience}>
            <p>
            Au cours de ma formation, j'ai eu l'opportunité de travailler sur une variété de projets, allant de la <strong>création de sites web dynamiques</strong> à <strong>l'optimisation SEO</strong> en passant par le <strong>développement backend</strong>. Chaque expérience m'a permis de renforcer mes <strong>compétences techniques</strong> et d'aiguiser ma <strong>sensibilité au design</strong>. J'aborde chaque nouveau projet avec enthousiasme, en cherchant constamment à <strong>repousser les limites de ce que je peux créer</strong> avec les outils numériques à ma disposition.
            </p>
          </Collapse>
        </div>

        <div className="info-section" data-aos="fade-up">
          <h2 onClick={() => setIsOpenSkills(!isOpenSkills)}>
            <FontAwesomeIcon icon={faTools} /> Compétences
          </h2>
          <Collapse isOpened={isOpenSkills}>
            <p>
            En tant que <strong>développeur web</strong>, je suis compétent en HTML5, CSS, JavaScript et React. Ces outils me permettent de développer des <strong>sites web réactifs et attrayants</strong>. De plus, grâce à mon expérience en tant que <strong>designer graphique</strong>, je suis capable de créer des designs web qui non seulement sont <strong>visuellement plaisants</strong>, mais aussi <strong>faciles à utiliser</strong>. Et avec ma formation en SEO, je peux vous aider à <strong>optimiser la visibilité</strong> de votre site web et à attirer plus de trafic.
            </p>
          </Collapse>
        </div>

        <img className='signature' src={process.env.PUBLIC_URL + '/images/signatureblack.svg'} alt="Votre nom" data-aos="fade-up"/>
      </section>
    </div>
  );
};

export default AboutPage;
