// src/components/FeaturesGrid/FeaturesGrid.js
import React from 'react';
import '../Styles/FeaturesGrid.css'; // Estilos para la cuadrícula

import SearchIcon from '../icons/SearchIcon';
import AccountsIcon from '../icons/AccountsIcon';
import LoanIcon from '../icons/LoanIcon';
import CardIcon from '../icons/CardIcon';
import InvestmentIcon from '../icons/InvestmentIcon';
import InsuranceIcon from '../icons/InsuraneIcon';

const FeatureItem = ({ icon: IconComponent, text }) => {
  return (
    <div className="feature-item">
      <div className="feature-icon-wrapper">
        {IconComponent && <IconComponent />} {/* Renderiza el componente del ícono */}
      </div>
      <h3>{text}</h3>
    </div>
  );
};

const FeaturesGrid = () => {
  const features = [
    { icon: SearchIcon, text: "Buscar promociones" },
    { icon: AccountsIcon, text: "Ir a cuentas Galicia" },
    { icon: LoanIcon, text: "Pedir un préstamo" },
    { icon: CardIcon, text: "Conocer tarjetas" },
    { icon: InvestmentIcon, text: "Descubrir inversiones" },
    { icon: InsuranceIcon, text: "Sacar un seguro" },
    { icon:  SearchIcon, text: "Conocer App" }, 
    { icon:  SearchIcon, text: "Hacete GMTC" },
    { icon:  SearchIcon, text: "Sacar un seguro" }, 
    { icon:  SearchIcon, text: "Conocer Beneficios" },
    { icon:  SearchIcon, text: "Conocer Propuestas" },
  ];

  return (
    <section className="features-section">
      <h2>Explorá nuestros servicios</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <FeatureItem key={index} icon={feature.icon} text={feature.text} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;