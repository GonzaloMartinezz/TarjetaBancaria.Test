// src/components/PromotionsSection/PromotionsSection.js
import React from 'react';
import '../Styles/PromotionsSellection.css'; // Estilos para la sección


// Importa las imágenes de las tarjetas de promoción
// Asegúrate de que estas imágenes estén en la carpeta src/components/PromotionsSection/
import promoSupermarket from '../imgs/LOGO.PNG'; // Icono de carrito/bolsa
import promoClothing from '../imgs/LOGO.PNG';     // Icono de percha
import promoFood from '../imgs/LOGO.PNG';             // Icono de cubiertos/comida

const PromotionCard = ({ imageSrc, title, description }) => {
  return (
    <div className="promotion-card">
      <div className="promo-image-wrapper">
        <img src={imageSrc} alt={title} className="promo-card-image" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="btn promo-btn-link">Conocer promos</button>
    </div>
  );
};

const PromotionsSection = () => {
  const promotions = [
    {
      imageSrc: promoSupermarket,
      title: "Promos épicas en supermercados",
      description: "Elegí bien el día y ahorrá como nunca."
    },
    {
      imageSrc: promoClothing,
      title: "Gastá menos en indumentaria",
      description: "Hay cuotas sin interés para renovar la pilchita."
    },
    {
      imageSrc: promoFood,
      title: "En tu comida favorita, tenés promos",
      description: "El placer real de pagar menos por un gustito."
    }
  ];

  return (
    <section className="promotions-section">
      <p className="section-subtitle">Pagá. Ahorrá. Brilá</p>
      <h2>Una nueva era de promociones</h2>
      <div className="promotions-grid">
        {promotions.map((promo, index) => (
          <PromotionCard
            key={index}
            imageSrc={promo.imageSrc}
            title={promo.title}
            description={promo.description}
          />
        ))}
      </div>
    </section>
  );
};

export default PromotionsSection;