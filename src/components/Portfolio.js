import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.scss'


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
      title: 'Projet 2',
      description: 'Description du projet 2',
      logo: 'images/js.png', // Ajoutez le chemin vers le logo ici
      image: 'images/paysage.webp',
    },

    {
      id: 3,
      title: 'Projet 3',
      description: 'Description du projet 3',
      logo: 'images/ol.png', // Ajoutez le chemin vers le logo ici
      image: 'images/paysage.webp',
    },

    {
      id: 4,
      title: 'Projet 4',
      description: 'Description du projet 4',
      logo: 'images/ol.png', // Ajoutez le chemin vers le logo ici
      image: 'images/paysage.webp',
    },
    {
      id: 5,
      title: 'Projet 5',
      description: 'Description du projet 5',
      logo: 'images/ol.png', // Ajoutez le chemin vers le logo ici
      image: 'images/paysage.webp',
    },

    {
      id: 6,
      title: 'Projet 6',
      description: 'Description du projet 6',
      logo: 'images/ol.png', // Ajoutez le chemin vers le logo ici
      image: 'images/paysage.webp',
    },
  ];

  return (
    <div className="portfolio-section">
      <div className='portfolio'>
        <div className='portfolio-infos'>
          <h3>Portfolio</h3>
          <p>Explorez mon univers de pixels</p>
        </div>
        <div className="project-cards">
          {projects.map((project) => (
            <Link key={project.id} to={`/project/${project.id}`}>
              <div className="project-card">
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