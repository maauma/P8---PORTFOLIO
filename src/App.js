import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Portfolio from './components/Portfolio'; 
import ProjectDetail from './components/ProjectDetail';  // Importez le composant de détail du projet
import Footer from './components/Footer';
import './components/global.scss';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<Portfolio />} /> 
        <Route path="/project/:id" element={<ProjectDetail />} />  // Ajoutez une nouvelle route pour le détail du projet
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
