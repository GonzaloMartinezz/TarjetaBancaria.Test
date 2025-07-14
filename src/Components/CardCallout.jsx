// src/components/CardCallout/CardCallout.js
import React from 'react';
import '../Styles/CardCallout.css';

// Puedes usar una imagen aquí si tienes el SVG del personaje o dejarlo en CSS
// import characterImage from './character.svg'; 

const CardCallout = () => {
  return (
    <div className="card-callout-container">
      <div className="callout-image">
        {/* Si tienes una imagen del personaje, úsala aquí.
            De lo contrario, puedes recrear el fondo con CSS o usar un placeholder. */}
        {/* <img src={characterImage} alt="Personaje" /> */}
      </div>
      <div className="callout-content">
        <h3>¿Venís de GMTC Más?</h3> {/* Cambiado a GMTC */}
        <p>Te contamos lo que tenés que saber.</p>
      </div>
      <button className="btn callout-btn">Conocer más</button>
    </div>
  );
};

export default CardCallout;