import React from 'react';
import CreditCard from '../Components/CreditCard'; // Importa tu componente de tarjeta
import '../Styles/HomePage.css'; // Para estilos de la página de inicio

const HomePage = () => {
    return (
        <div className="home-page-container">
            {/* Sección de cabecera inspirada en Galicia */}
            <header className="home-header">
                <div className="header-content">
                    <h1>Hacete GMTC gratis</h1>
                    <p>Tenés beneficios, Tarjetas de crédito , Tarjetas de debito y Cajas de ahorro 24/7 ¡y más!</p>
                    <div className="header-buttons">
                        <button className="btn primary-btn">Hacete GMTC</button>
                        <button className="btn secondary-btn">Conocer propuesta</button>
                    </div>
                </div>
                {/* Aquí renderizamos el componente de la tarjeta de crédito */}
                <div className="card-display-area">
                     {/* Puedes pasarle props reales o de ejemplo */}
                   {/*  <CreditCard {...cardData} /> */}
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
                     <div className="feature-item">
                        {/* Icono */}
                        <h3>Conocer Beneficios</h3>
                    </div>
                     <div className="feature-item">
                        {/* Icono */}
                        <h3>Conocer Propuestas</h3>
                    </div>
                     <div className="feature-item">
                        {/* Icono */}
                        <h3>Conocer App</h3>
                    </div>
                     <div className="feature-item">
                        {/* Icono */}
                        <h3>Hacete GMTC</h3>
                    </div>
                     <div className="feature-item">
                        {/* Icono */}
                        <h3>Sacar un seguro</h3>
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