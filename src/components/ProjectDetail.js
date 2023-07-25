import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.scss';

const ProjectDetail = () => {
  const [project, setProject] = useState(null); // State pour le projet actuel
  const { id } = useParams(); // Récupère l'ID du projet depuis l'URL

  // Exemple de données pour les projets
  const projects = [
    {
      id: 1,
      title: 'Kasa',
      description: 'Un site web de location immobilière codé avec react et scss.',
      logo: '/images/react.png', // Ajoutez le chemin vers le logo ici
      image: '/images/paysage.webp',
      
    },
    // ... autres projets ici
  ];

  // Effect hook pour définir le projet actuel lorsque l'ID du projet change
  useEffect(() => {
    // Trouve le projet correspondant à l'ID du projet et le définit comme le projet actuel
    const projectData = projects.find((project) => project.id === parseInt(id));
    setProject(projectData);
  }, [id]);

  // Si le projet n'est pas encore chargé, affiche un message de chargement
  if (!project) return <div>Chargement...</div>;

  return (
    <div className='section-projet'>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <img src={project.logo} alt={`${project.title} logo`} />
      <img src={project.image} alt={`${project.title} image`} />

    </div>
  );
};

export default ProjectDetail;
