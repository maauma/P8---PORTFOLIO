import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import './ContactPage.scss';
import './mobile.scss';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';




const ContactPage = () => {
  const [form, setForm] = useState({name: '', email: '', message: ''});

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  
    fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch((error) => console.error('Error:', error));
  };
  

  return (
    <div className="contact" data-aos="fade-up">
      <div className='contenu' data-aos="fade-up">
        < div className='prescontact'>
        <div className='blocontactphoto'>
          <img src= {process.env.PUBLIC_URL + '/images/contactilu.png'} alt='illu moi'></img>
        </div>
        <div className='blocontact'>
          <h1>Contact</h1>
          <p><button className="contact-button" onClick={() => window.location = 'mailto:paitamateo@icloud.com'}>paitamateo@icloud.com</button> </p>
        </div>

        </div>
        <div className="contact-content">
            <p><a href="mailto:paitamateo@icloud.com">Contactez-moi</a> dès maintenant pour discuter de votre projet web. Que ce soit pour un nouveau site web, une refonte de design ou une optimisation SEO, je suis là pour aider à transformer vos idées en une réalité tangible.<br></br></p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
