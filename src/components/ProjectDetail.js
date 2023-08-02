import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './ProjectDetail.scss';
import './mobile.scss';

const ProjectDetail = () => {
  const [project, setProject] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const { id } = useParams();

  const projects = [
    {
      logoProjet: '/images/kasa.png',
      id: 1,
      title: 'Kasa',
      description: "Rendre l'hébergement accessible à tous avec KASA",
      logo: '/images/react.png',
      images: ['/images/paysage.webp', '/images/ol.png', '/images/paysage.webp'],
      details: "Découvrez mon projet d'intégration pour le site KASA, une plateforme d'hébergement qui vise à rendre les séjours touristiques plus accessibles à tous. J'ai collaboré étroitement avec l'équipe de développement pour transformer les maquettes en un site web fonctionnel et attrayant. En utilisant HTML et CSS, j'ai donné vie à l'interface utilisateur pour offrir une expérience fluide et intuitive aux visiteurs. Grâce à une approche responsive, le site s'adapte à tous les appareils, des ordinateurs de bureau aux smartphones. Explorez le monde avec KASA en trouvant facilement des hébergements de qualité et des activités passionnantes !"
    },
    {
      logoProjet: '/images/logoBooki.png',
      id: 2,
      title: 'Booki',
      description: 'Description du projet 2',
      logo: '/images/js.png', // Ajoutez le chemin vers le logo ici
      images: ['/images/paysage.webp', '/images/ol.png', '/images/paysage.webp'],
      details: "Suspendisse potenti. Duis in dictum eros, eget consequat nisl. Morbi a ante sit amet urna laoreet maximus ac ac ante. Nam eget mollis elit, in cursus orci. Phasellus non pellentesque dolor. Curabitur et viverra dui. Donec varius eget mi nec ultricies. Cras luctus sapien eget dolor ultricies tincidunt."
    },
    {
      id: 3,
      title: 'Nina Carducci',
      description: "Gagnez en visibilité pour vos potentiels clients !",
      logo: '/images/js.png', // Ajoutez le chemin vers le logo ici
      images: ['/images/paysage.webp', '/images/ol.png', '/images/paysage.webp'],
      details: "Je suis heureux de vous présenter mon projet d'optimisation SEO pour le site de Nina Carducci, une talentueuse photographe. Ayant remarqué quelques problèmes de performances sur son site, je lui ai proposé mes services pour améliorer son référencement et attirer plus de visiteurs. Après une discussion fructueuse avec Nina, j'ai défini les objectifs suivants : optimiser les images du site, améliorer le code et sa structure, mettre en place le référencement local avec Schema.org, et ajouter des metas pour les réseaux sociaux. Je vais également corriger des bugs dans le code pour améliorer l'expérience utilisateur. Je suis ravi de vous présenter les résultats de cette intervention et de vous expliquer comment nous avons optimisé le site de Nina pour répondre aux exigences du SEO.",
    },

    {
      id: 4,
      title: 'Sophie Bluel',
      description: "Développer la page web dynamique du portfolio d'une architecte d'intérieur",
      logo: '/images/js.png', // Ajoutez le chemin vers le logo ici
      images: ['/images/paysage.webp', '/images/ol.png', '/images/paysage.webp'],
      details: "En tant que développeur front-end en renfort pour l'agence ArchiWebos, je suis ravi de travailler sur la conception du site portfolio de l'architecte d'intérieur. Mon principal objectif est de développer la page de présentation des travaux de l'architecte en utilisant le design fourni par Figma. En parallèle, je vais créer la page de connexion de l'administrateur du site et la modale permettant d'uploader de nouveaux médias. Je m'appuierai sur le code front-end d'origine pour intégrer les nouvelles fonctionnalités et utiliserai le code back-end pour persister les données et tester les fonctionnalités. Je suis enthousiaste à l'idée de participer à ce nouveau défi et de travailler en équipe pour livrer un site portfolio dynamique et fonctionnel.",
    },

    {
      id: 5,
      title: 'Grimoire',
      description: " Mettez en place l'API pour permettre la notation de livres sur le site Mon Vieux Grimoire !",
      logo: '/images/js.png', // Ajoutez le chemin vers le logo ici
      images: ['/images/paysage.webp', '/images/ol.png', '/images/paysage.webp'],
      details: "En tant que développeur back-end en freelance, je suis enthousiaste à l'idée de travailler avec Kévin sur le projet Mon Vieux Grimoire. Mon objectif est de mettre en place l'API pour permettre aux utilisateurs de noter des livres sur le site de notation de livres. Kévin a déjà développé le front-end en React, et je vais maintenant créer l'API en utilisant Node.js et Express.js. Je vais m'assurer que l'ensemble du site fonctionne correctement en intégrant les spécifications techniques de l'API fournies par Kévin. De plus, je prendrai en compte les bonnes pratiques du Green Code en optimisant les images envoyées par les utilisateurs dans le back-end. Je suis ravi de participer à ce projet collaboratif et de rencontrer les spécifications fonctionnelles du client Le Vieux Grimoire.",
    },

    {
      id: 6,
      title: 'Menu Maker by Qwenta',
      description: "Faciliter la création de menus pour les restaurateurs",
      logo: '/images/js.png', // Ajoutez le chemin vers le logo ici
      images: ['/images/paysage.webp', '/images/ol.png', '/images/paysage.webp'],
      details: "Je suis ravi de vous présenter mon projet de développement du Menu Maker pour notre client Qwenta. Ce site a pour objectif d'aider les restaurateurs à afficher et mettre en page leurs menus simplement et rapidement. En collaboration avec l'équipe, j'ai mis en place une méthodologie de travail agile et travaillé avec Soufiane, notre Product Owner. J'ai développé un système de veille pour trouver des idées pour le projet, défini les spécifications techniques du Menu Maker et organisé la gestion du projet. J'ai préparé une présentation visuelle pour Soufiane et John, mettant en avant les spécifications techniques et le plan de communication. Je suis impatient de vous montrer le résultat final et de vous expliquer les choix techniques que nous avons faits pour répondre aux besoins de Qwenta.",
      conclusion: "Ce projet m'a permis de mettre en place une méthodologie agile et de collaborer avec l'équipe pour développer le Menu Maker pour Qwenta. J'ai présenté les principales étapes, y compris la création d'un système de veille, la définition des spécifications techniques et la planification du projet. La présentation est concise et met l'accent sur l'approche visuelle pour expliquer la solution technique à John, sans utiliser des termes techniques complexes. Cette présentation permettra aux clients de comprendre facilement notre approche et les résultats obtenus pour le Menu Maker."
    },



  ];

  useEffect(() => {
    const projectData = projects.find((project) => project.id === parseInt(id));
    setProject(projectData);
  }, [id]);

  if (!project) return <div>Chargement...</div>;

  const handlePrevClick = () => {
    setImageIndex((oldIndex) => (oldIndex === 0 ? project.images.length - 1 : oldIndex - 1));
  };

  const handleNextClick = () => {
    setImageIndex((oldIndex) => (oldIndex === project.images.length - 1 ? 0 : oldIndex + 1));
  };

  const handleImageClick = () => {
    setIsFullScreen(true);
  };

  const handleExitFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <div className="section-projet">
      <img src={project.logo} alt={`${project.title} logo`} />
      <img className="logo-projet" src={project.logoProjet} alt={`${project.title} logo-projet`} />

      <p>{project.description}</p>
      <p>{project.details}</p>
      <hr />
      <p>{project.conclusion}</p>

      <div className="gallery">
        <button onClick={handlePrevClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        {isFullScreen ? (
          <div className="full-screen-overlay" onClick={handleExitFullScreen}>
            <img src={project.images[imageIndex]} alt={`${project.title} image`} />
          </div>
        ) : (
          <img
            src={project.images[imageIndex]}
            alt={`${project.title} image`}
            onClick={handleImageClick}
          />
        )}
        <button onClick={handleNextClick}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default ProjectDetail;
