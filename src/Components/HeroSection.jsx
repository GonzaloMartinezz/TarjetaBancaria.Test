// src/components/HeroSection/HeroSection.js
import React from 'react';
import '../Styles/HeroSection.css'; // Estilos para la sección

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Hacete GMTC gratis</h1> {/* Cambiado a GMTC */}
        <p>Tenés beneficios, tarjetas de crédito, tarjetas de débito y Cajas de ahorro 24/7 ¡y más!</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Hacete GMTC</button> {/* Cambiado a GMTC */}
          <button className="btn btn-secondary">Conocer propuesta</button>
        </div>
      </div>
      <div className="hero-image-placeholder">
        {/* Este div actúa como el placeholder verde para la imagen de las personas */}
      </div>
    </section>
  );
};

export default HeroSection;