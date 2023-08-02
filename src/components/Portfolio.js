import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.scss';
import './mobile.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Portfolio = () => {
  // Exemple de données pour les projets
  const projects = [
    {
      id: 1,
      title: 'Kasa',
      description: 'Un site web de location immobilière codé avec react et scss.',
      logo:  `${process.env.PUBLIC_URL}/images/react.png`,
      logo2: `${process.env.PUBLIC_URL}/images/js.png`,
      image: `${process.env.PUBLIC_URL}/images/kasa.png`,
    },
    {
      id: 2,
      title: 'Booki',
      description: 'trouver des hébergements et des activités dans la ville de leur choix.',
      logo: `${process.env.PUBLIC_URL}/images/js.png`,
      image: `${process.env.PUBLIC_URL}/images/BOOKI/ilubooki.jpeg`,
      logo2: null
    },

    {
      id: 3,
      title: 'Nina Carducci',
      description: 'Debugage et optimisation SEO',
      logo: `${process.env.PUBLIC_URL}/images/google.png`, 
      image: `${process.env.PUBLIC_URL}/images/NINA/nina.png`,
    },
    
    {
      id: 4,
      title: 'Sophie Bluel',
      description: 'Décoratrice d’intérieur',
      logo: `${process.env.PUBLIC_URL}/images/js.png`, 
      logo2: `${process.env.PUBLIC_URL}/images/html.png`,
      image: `${process.env.PUBLIC_URL}/images/BLUEL/sophie.png`,
    },
    
    {
      id: 5,
      title: 'Grimoire',
      description: 'Backend pour un site de notation de livres',
      logo: `${process.env.PUBLIC_URL}/images/mongodb.png`, 
      logo2: `${process.env.PUBLIC_URL}/images/node.png`,
      image: `${process.env.PUBLIC_URL}/images/GRIMOIRE/ilugrim.avif`,
    },
    
    {
      id: 6,
      title: 'Menu Maker',
      description: 'Description du projet 6',
      logo: `${process.env.PUBLIC_URL}/images/notion.png`, 
      image: `${process.env.PUBLIC_URL}/images/MENU/menuilu.jpg`,
    }
    
  ];

  return (
    <div className="portfolio-section">
      <div className="portfolio" data-aos="fade-up">
        <div className="portfolio-infos">
          <h3>Portfolio</h3>
          <h4>Explorez mon univers de pixels</h4>
          <p>
            Découvrez mon <strong>univers de pixels</strong>, une galerie de projets que j'ai
            réalisés avec <strong>passion et précision</strong>. De la conception de{' '}
            <strong>sites web attrayants</strong> à l'élaboration de{' '}
            <strong>stratégies SEO efficaces</strong>, chaque projet illustre ma dévotion à créer
            des <strong>solutions numériques qui transforment les idées en réalités</strong> visibles
            et tangibles.
          </p>
        </div>
        <div className="project-cards">
          {projects.map((project) => (
            <Link key={project.id} to={`/project/${project.id}`}>
              <div className="project-card" data-aos="fade-up">
                <div className="blocPortfolio">
                  <div className="blocInfos">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                  </div>
                  <div className="blocLogo">
                    {/* Afficher le logo1 */}
                    <img className="logo" src={project.logo} alt={`${project.title} logo`} />
                    {/* Condition pour afficher le logo2 seulement s'il existe */}
                    {project.logo2 && (
                      <img className="logo" src={project.logo2} alt={`${project.title} logo2`} />
                    )}
                  </div>
                </div>
                <div className="blocPhoto">
                  <img src={project.image} alt={`${project.title}`} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;