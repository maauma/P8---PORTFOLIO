// ProjectPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './mobile.scss';

// Importer les données des projets
import { projects } from './Portfolio';

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.find(project => project.id === Number(id));

  // Vérifiez si le projet a été trouvé. Si ce n'est pas le cas, retournez une erreur ou une autre page.
  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div className="project-page">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {/* Vous pouvez ajouter plus de détails ici si vous le souhaitez */}
      <img src={project.image} alt={`${project.title}`} />
      <img src={project.logo} alt={`${project.title} logo`} />
    </div>
  );
};

export default ProjectPage;
