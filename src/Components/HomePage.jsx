import React from 'react';
import CreditCard from '../Components/CreditCard';
import '../Styles/HomePage.css'; 

const HomePage = () => {
    return (
        <div className="home-page-container">
            <header className="home-header">
                <div className="header-content">
                    <h1>Hacete GMTC gratis</h1>
                    <p>Tenés beneficios, Tarjetas de crédito , Tarjetas de debito y Cajas de ahorro 24/7 ¡y más!</p>
                    <div className="header-buttons">
                        <button className="btn secondary-btn">Hacete GMTC</button>
                        <button className="btn secondary-btn">Conocer propuesta</button>
                    </div>
                    <div className="header-image-placeholder" >
                        {/* Este div actúa como el placeholder verde para la imagen de las personas */}
                    </div>
                </div>
                <div className="card-display-area">
                 <CreditCard {...cardData} />
                </div>
            </header>

           
            <section className="features-section">
                <h2>Explorá nuestros servicios</h2>
                <div className="features-grid">
                    <div className="feature-item">
                     
                        <h3>Buscar promociones</h3>
                    </div>
                    <div className="feature-item">
                     
                        <h3>Ir a cuentas Galicia</h3>
                    </div>
                    <div className="feature-item">
                    
                        <h3>Pedir un préstamo</h3>
                    </div>
                    <div className="feature-item">
                      
                        <h3>Conocer tarjetas</h3>
                    </div>
                    <div className="feature-item">
                        
                        <h3>Descubrir inversiones</h3>
                    </div>
                    <div className="feature-item">
                      
                        <h3>Sacar un seguro</h3>
                    </div>
                     <div className="feature-item">
                      
                        <h3>Conocer Beneficios</h3>
                    </div>
                     <div className="feature-item">
                      
                        <h3>Conocer Propuestas</h3>
                    </div>
                     <div className="feature-item">
                    
                        <h3>Conocer App</h3>
                    </div>
                     <div className="feature-item">
                 
                        <h3>Hacete GMTC</h3>
                    </div>
                     <div className="feature-item">
                        
                        <h3>Sacar un seguro</h3>
                    </div>
                     <div className="feature-item">
                    
                        <h3>Sacar un seguro</h3>
                    </div>
                    
                </div>
            </section>

            <footer className="home-footer">
                <p>&copy; 2025 Gonzalo Martinez. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default HomePage;