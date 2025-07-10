import React from 'react';
import CreditCard from '../Components/CreditCard';
import '../Styles/HomePage.css'; 
import imgtarjeta from '../imgs/KP001.png';

const HomePage = () => {
    return (
        <div className="home-page-container">
            <header className="home-header">
                <div className="header-content">
                    <h1>Hacete GMTC</h1>
                    <p>Tenés beneficios, Tarjetas de crédito , Tarjetas de debito y Cajas de ahorro 24/7 ¡y más!</p>
                    <div className="header-buttons">
                        <button className="btn secondary-btn">Hacete GMTC</button>
                        <button className="btn secondary-btn">Conocer propuesta</button>
                    </div>  
                </div>
                 <div className="header-image1" >
                        <img src={imgtarjeta} alt="img-tarjeta" />
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