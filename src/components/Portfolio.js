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
      logo: 'images/react.png', // Ajoutez le chemin vers le logo ici
      image: 'images/kasa.png',
    },
    {
      id: 2,
      title: 'Booki',
      description: 'trouver des hébergements et des activités dans la ville de leur choix.',
      logo: 'images/js.png', // Ajoutez le chemin vers le logo ici
      image: 'images/BOOKI/ilubooki.jpeg',
    },

    {
      id: 3,
      title: 'Nina Carducci',
      description: 'Debugage et optimisation SEO',
      logo: 'images/ol.png', // Ajoutez le chemin vers le logo ici
      image: 'images/NINA/nina.png',
    },

    {
      id: 4,
      title: 'Sophie Bluel',
      description: 'Décoratrice dintérieur',
      logo: 'images/ol.png', // Ajoutez le chemin vers le logo ici
      image: 'images/BLUEL/sophie.png',
    },
    {
      id: 5,
      title: 'Grimoire',
      description: 'Backend pour un site de notation de livres',
      logo: 'images/ol.png', // Ajoutez le chemin vers le logo ici
      image: 'images/GRIMOIRE/ilugrim.avif',
    },

    {
      id: 6,
      title: 'Menu Maker by Qwenta',
      description: 'Description du projet 6',
      logo: 'images/ol.png', // Ajoutez le chemin vers le logo ici
      image: 'images/MENU/menuilu.jpg',
    },
  ];

  return (
    <div className="portfolio-section">
      <div className='portfolio' data-aos="fade-up">
        <div className='portfolio-infos'>
          <h3>Portfolio</h3>
          <p>Explorez mon univers de pixels</p>
        </div>
        <div className="project-cards">
          {projects.map((project) => (
            <Link key={project.id} to={`/project/${project.id}`}>
              <div className="project-card" data-aos="fade-up">
                <div className='blocPortfolio'>
                <div className='blocInfos'>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                </div>
                <div className='blocLogo'>
                <img src={project.logo} alt={`${project.title} logo`} /> {/* Affichez le logo ici */}
                </div>
                </div>
                <div className='blocPhoto'>
                  <img src={project.image} alt={`${project.title}`} /> {/* Affichez l'image ici */}
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