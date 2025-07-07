import React from 'react';
import CreditCard from '../Components/CreditCard'; // Importa tu componente de tarjeta
import '../Styles/HomePage.css'; // Para estilos de la página de inicio

const HomePage = () => {
    const cardData = {
        cardNumber: '1234 5678 9012 3456',
        cardHolder: 'JUAN PEREZ',
        expiryDate: '12/27',
        cardType: 'Visa', // 'Visa' o 'Mastercard'
        bankName: 'Banco Galicia'
    };

    return (
        <div className="home-page-container">
            {/* Sección de cabecera inspirada en Galicia */}
            <header className="home-header">
                <div className="header-content">
                    <h1>Hacete Galicia gratis</h1>
                    <p>Tenés beneficios, tarjetas de crédito, atención 24/7 ¡y más!</p>
                    <div className="header-buttons">
                        <button className="btn primary-btn">Hacete Galicia</button>
                        <button className="btn secondary-btn">Conocer propuesta</button>
                    </div>
                </div>
                {/* Aquí renderizamos el componente de la tarjeta de crédito */}
                <div className="card-display-area">
                     {/* Puedes pasarle props reales o de ejemplo */}
                    <CreditCard {...cardData} />
                </div>
            </header>

            {/* Otra sección si la necesitas, similar a la de "servicios" en la imagen */}
            <section className="features-section">
                <h2>Explorá nuestros servicios</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        {/* Icono */}
                        <h3>Buscar promociones</h3>
                    </div>
                    <div className="feature-item">
                        {/* Icono */}
                        <h3>Ir a cuentas Galicia</h3>
                    </div>
                    <div className="feature-item">
                        {/* Icono */}
                        <h3>Pedir un préstamo</h3>
                    </div>
                    <div className="feature-item">
                        {/* Icono */}
                        <h3>Conocer tarjetas</h3>
                    </div>
                    <div className="feature-item">
                        {/* Icono */}
                        <h3>Descubrir inversiones</h3>
                    </div>
                    <div className="feature-item">
                        {/* Icono */}
                        <h3>Sacar un seguro</h3>
                    </div>
                </div>
            </section>

            {/* Pie de página básico o importar un componente de footer global */}
            <footer className="home-footer">
                <p>&copy; 2025 Banco Galicia. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default HomePage;