import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validaciones básicas
    setFormErrors({
      ...formErrors,
      [name]: name === "email" ? (validateEmail(value) ? "" : "Correo electrónico no válido") : "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones antes de enviar
    const { name, email, message } = formData;
    if (!name || !email || !message || !validateEmail(email)) {
      setFormErrors({
        name: !name ? "El nombre es requerido" : "",
        email: !email ? "El correo electrónico es requerido" : !validateEmail(email) ? "Correo electrónico no válido" : "",
        message: !message ? "El mensaje es requerido" : "",
      });
      setSuccessMessage('');
      return;
    }

  
    console.log("Formulario enviado:", formData);

    setSuccessMessage('¡Formulario enviado con éxito!');
 
    setFormData({ name: "", email: "", message: "" });
    setFormErrors({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Nombre*:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={formErrors.name ? "error" : ""}
        />
        {formErrors.name && <span className="error-message">{formErrors.name}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo Electrónico*:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={formErrors.email ? "error" : ""}
        />
        {formErrors.email && <span className="error-message">{formErrors.email}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={formErrors.message ? "error" : ""}
        ></textarea>
        {formErrors.message && <span className="error-message">{formErrors.message}</span>}
      </div>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
