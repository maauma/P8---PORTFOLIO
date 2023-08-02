import './mobile.scss';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SkillsSection.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faReact, faJsSquare, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faBrush } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const skillsData = [
  {
    id : 1,
    title: 'HTML',
    description: "Maitriser la base de la structure web avec HTML, pour donner vie à vos idées en ligne",
    icon: faHtml5,
    additional: "Expert en HTML5, je crée des structures web solides avec des balises sémantiques pour une accessibilité optimale et un bon référencement.",
  },
  {
    id : 2,
    title: 'CSS',
    description: "Donner vie à la créativité grâce à des styles élégants et dynamiques avec CSS.",
    icon: faCss3Alt,
    additional: "Spécialiste de CSS3, je donne vie à des interfaces dynamiques grâce à des mises en page réactives, des animations et des préprocesseurs tels que SASS.",
  },
  {
    id : 3,
    title: 'REACT',
    description: "Construire des interfaces interactives et réactives, pour une expérience utilisateur fluide et immersive",
    icon: faReact,
    additional: "Maîtrisant React.js, je développe des applications interactives avec des composants réutilisables et une gestion efficace de l'état via Redux.",
  },
  {
    id : 4,
    title: 'JavaScript',
    description: "Programmer des fonctionnalités avancées et des interactions client-side avec JavaScript, le langage essentiel du web.",
    icon: faJsSquare,
    additional: "Fort de mon expertise en JavaScript, je crée des sites web interactifs en utilisant le DOM, les API, les Promises et des solutions créatives.",
  },
  {
    id : 5,
    title: 'WebDesign',
    description: "Faire ressortir la personnalité de votre projet grâce à un design moderne, intuitif et captivant.",
    icon: faBrush,
    additional: "Mon approche du webdesign allie esthétique et convivialité pour créer des interfaces modernes et intuitives qui reflètent l'essence du projet.",
  },
  {
    id : 6,
    title: 'SEO',
    description: "Optimiser votre présence en ligne en mettant en œuvre des stratégies SEO pour augmenter votre visibilité et votre impact.",
    icon: faGoogle,
    additional: 'Informations supplémentaires sur SEO...',
  },
];

const SkillCard = ({ skill }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`skill-card gradient-${skill.id}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-aos="fade-up"
    >
      {hover ? (
        <p>{skill.additional}</p>
      ) : (
        <>
          <FontAwesomeIcon className="skill-logo" icon={skill.icon} />
          <h3>{skill.title}</h3>
          <p>{skill.description}</p>
        </>
      )}
    </div>
  );
};

const SkillsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="skills-section">
      <div className='blocinfo' data-aos="fade-up">
        <h2>Compétences</h2>
        <h3>Pour donner vie à votre vision</h3>
        <p>Mon rôle de <strong>développeur web</strong>, c'est d'apporter <strong>votre vision</strong> à la vie numérique.<br></br> Grâce à mon expertise en HTML5, CSS, JavaScript et React, je suis capable de transformer vos<strong> idées en sites web interactifs et dynamiques.</strong> En tant qu'ancien designer graphique, je conçois des <strong>interfaces utilisateur attrayantes</strong> qui améliorent <strong>l'expérience utilisateur</strong> et encouragent <strong>l'engagement</strong>. De plus, grâce à ma maîtrise du SEO, je peux<strong> optimiser la visibilité de votre site </strong> sur les moteurs de recherche, pour que votre vision atteigne un <strong>public plus large</strong>.</p>
      </div>
      <div className='bloc-skills'>
        <div className="skill-cards">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;