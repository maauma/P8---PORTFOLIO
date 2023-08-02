import React from 'react';
import { useParams } from 'react-router-dom';
import { skillsData } from './SkillsSection.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SkillDetail.scss';


const SkillDetail = () => {
  const { id } = useParams();
  const skill = skillsData.find(skill => skill.id === Number(id));

  // vérifiez si la compétence existe
  if (!skill) {
    return <h2>Compétence non trouvée</h2>;
  }

  return (
    <div className="skill-detail">
      <FontAwesomeIcon className="skill-detail-logo" icon={skill.icon} />
      <h2>{skill.title}</h2>
      <p>{skill.description}</p>
      <p>{skill.additional}</p>
      {/* Ici, vous pouvez ajouter plus de détails sur la compétence */}
    </div>
  );
};

export default SkillDetail;
