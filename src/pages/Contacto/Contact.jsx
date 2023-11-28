import React from 'react';
import './Contact.css';
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div>
      <h2>Contacto</h2>
      <p>
        ¡Nos encantaría saber de ti! Completa el formulario a continuación para
        ponerte en contacto.
      </p>
      <ContactForm />
    </div>
  );
};

export default Contact;


