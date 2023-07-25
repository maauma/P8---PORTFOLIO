// ContactPage.js
import React, { useState } from 'react';
import './ContactPage.scss';

const ContactPage = () => {
  // State pour stocker les valeurs des champs du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Gestionnaire de changement pour les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données du formulaire soumises :', formData);
    // Réinitialisation des valeurs du formulaire après soumission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="contact">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Adresse e-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Objet de la demande</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default ContactPage;
