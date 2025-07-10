import React from 'react';
import '../Styles/Navbar.css'; 
import logo from '../imgs/LOGO11.PNG'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-item-link active">
          <span className="navbar-link-text">Tenés GMTC</span>
        </div>
        <a href="#servicios" className="navbar-item-link">Servicios</a>
        <a href="#personas" className="navbar-item-link">Personas</a>
        <a href="#empresas" className="navbar-item-link">Empresas</a>
        <a href="#ayuda" className="navbar-item-link">Ayuda</a>
      </div>
      <div className="navbar-right">
        <button className="navbar-btn outline">Office Banking</button>
        <button className="navbar-btn primary">Online Banking</button>
        <button className="navbar-search-btn">
          <img src={logo} alt="Logo" className="navbar-logo-gmtc" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;