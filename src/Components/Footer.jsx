// src/components/Footer/Footer.js
import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content-wrapper">
        <div className="footer-column">
          <h3>Sobre Nosotros</h3>
          <p>
            En GMTC creemos que el rendimiento necesita ser validado en cada etapa del ciclo de vida del desarrollo de software. Plataforma escalable de código abierto masivo que hace que una realidad.
          </p>
        </div>
        <div className="footer-column">
          <h3>Contactanos</h3>
          <p>Dirección: 2390 El Camino Real</p>
          <p>Teléfono: +440 123456</p> {/* Mantengo el número de ejemplo */}
          <p>Email: demo@blazemeter.com</p>
        </div>
        <div className="footer-column">
          {/* Aquí puedes poner un logo o más enlaces */}
          <span className="footer-logo">GMTC BANK</span>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright © Product Store 2025</p> {/* Actualizado el año */}
      </div>
    </footer>
  );
};

export default Footer;