import React from 'react';
import './AboutPage.scss';

const AboutPage = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>À propos de moi</h1>
      </div>
      <div className="about-intro">
        <h2>La personne derrière les pixels</h2>
        <p>Bonjour! Je suis [Votre nom], un développeur web basé à [Votre lieu de résidence]. Passionné par le code, j'aime créer des sites web élégants, réactifs et axés sur l'utilisateur.</p>
      </div>
      <div className="about-education">
        <h2>Éducation</h2>
        <p>J'ai obtenu mon diplôme en [Votre diplôme] de [Votre université] en [Année]. Pendant mes études, j'ai acquis une solide compréhension des principes de la programmation et j'ai développé une passion pour le développement web.</p>
      </div>
      <div className="about-experience">
        <h2>Expérience</h2>
        <p>J'ai travaillé comme développeur web pour [Nom de l'entreprise] pendant [Durée], où j'ai acquis une expérience pratique en travaillant sur divers projets et en apprenant de nouvelles technologies.</p>
      </div>
      <div className="about-skills">
        <h2>Compétences</h2>
        <p>Je suis compétent en HTML, CSS, JavaScript et React, avec une connaissance de base des bases de données SQL et NoSQL. J'aime apprendre de nouvelles technologies et je suis toujours prêt à relever de nouveaux défis.</p>
      </div>
      <div className="about-contact">
        <h2>Contactez-moi</h2>
        <p>Si vous avez des questions, des commentaires ou des opportunités de travail intéressantes, n'hésitez pas à me contacter à [Votre email].</p>
      </div>
    </div>
  );
};

export default AboutPage;
