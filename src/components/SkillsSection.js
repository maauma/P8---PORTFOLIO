// SkillsSection.js

import React, { useState } from 'react';
import './SkillsSection.scss';
import Modal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faReact, faJsSquare, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faBrush } from '@fortawesome/free-solid-svg-icons';
const skillsData = [
  {
    title: 'HTML',
    description: 'Langage de balisage utilisé pour structurer le contenu du web.',
    additionalInfo: 'Je suis expert dans l\'utilisation des balises sémantiques pour optimiser l\'accessibilité.',
    icon: faHtml5,
  },
  {
    title: 'CSS',
    description: 'Langage de style utilisé pour mettre en forme les éléments HTML.',
    additionalInfo: 'Je maîtrise les animations CSS et les techniques de mise en page flexbox et grid.',
    icon: faCss3Alt,
  },
  {
    title: 'REACT',
    description: 'Bibliothèque JavaScript pour construire des interfaces utilisateur interactives.',
    additionalInfo: 'Je suis capable de créer des composants réutilisables et de gérer l\'état de l\'application avec React Hooks.',
    icon: faReact,
  },
  {
    title: 'JavaScript',
    description: 'Langage de programmation pour rendre les sites web interactifs.',
    additionalInfo: 'Je suis à l\'aise avec les nouvelles fonctionnalités ECMAScript et les concepts de programmation fonctionnelle.',
    icon: faJsSquare,
  },
  {
    title: 'WebDesign',
    description: 'Conception graphique et mise en page des sites web.',
    additionalInfo: 'Je peux créer des maquettes attrayantes en utilisant des outils de design tels que Figma ou Adobe XD.',
    icon: faBrush,
  },
  {
    title: 'SEO',
    description: 'Optimisation pour les moteurs de recherche pour améliorer la visibilité des sites web.',
    additionalInfo: 'Je connais les bonnes pratiques de référencement et comment améliorer le classement dans les moteurs de recherche.',
    icon: faGoogle,
  },
];

const SkillCard = ({ skill }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="skill-card"
      onClick={() => setShowModal(true)}
    >
      <FontAwesomeIcon className="skill-logo" icon={skill.icon} />

      <h3>{skill.title}</h3>
      <p>{skill.description}</p>
      <p className="additional-info">{skill.additionalInfo}</p>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2>{skill.title}</h2>
        <p>{skill.additionalInfo}</p>
      </Modal>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <div className="skills-section">
      <div className='blocinfo'>
        <h2>Mes compétences</h2>
        <h3>Pour donner vie à votre vision</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est justo, suscipit quis mauris id, ultrices viverra dui. Phasellus laoreet imperdiet molestie. Vestibulum aliquam mauris venenatis sollicitudin placerat. Maecenas ut dui arcu. Proin eros neque, dignissim sed velit et, volutpat semper est. Nunc et libero ut odio rhoncus varius nec vitae neque. Nulla tincidunt nulla quis purus bibendum, vitae pulvinar felis vehicula. Integer id eros ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vitae rhoncus velit. Nulla posuere mauris neque, a sodales mi hendrerit at.</p>
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
