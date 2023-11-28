import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2em',
    marginBottom: '10px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'blue',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>PÁGINA NO ENCONTRADA</h1>
      <p style={{ fontSize: '1.5em' }}>ERROR 404</p>
      <p style={{ marginBottom: '20px' }}>
        <Link to="/" style={linkStyle}>
          Volver al inicio
        </Link>
      </p>
    </div>
  );
};

export default Error404;
