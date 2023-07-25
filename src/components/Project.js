import React from 'react';
import { useParams } from 'react-router-dom';

const Project = () => {
  const { id } = useParams();  // Récupérez l'identifiant du projet dans l'URL

  // Récupérez les détails du projet à l'aide de l'identifiant, par exemple à partir d'un appel API ou d'une base de données
  // Puis utilisez ces détails pour afficher la page du projet

  return (
    <div>
      <h2>Project {id}</h2>
      {/* Affichez les détails du projet ici */}
    </div>
  );
};

export default Project;
