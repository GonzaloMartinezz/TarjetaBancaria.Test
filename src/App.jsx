// src/App.js
import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import FeaturesGrid from './Components/FeacturesGrid';
import Footer from './Components/Footer';
import './App.css'; // Estilos generales de la App si los tienes
import PromotionsSection from './Components/PromotionsSection';
import Inicio from './Components/Inicio';
import HeroStartPage from './pages/HeroStartPage';

function App() {
  return (
    <div className="App-container">
    <HeroStartPage />
    <div className="App-Navbar">
    <Navbar />
    </div>
      <main className="main-content"> {/* Un contenedor para el contenido principal */}
       <HeroSection />  {/* La sección principal con el título y la imagen */}
       <div className="App-Features"> 
        <FeaturesGrid /> {/* La cuadrícula de servicios */}
       </div>
        {/* Aquí podrías añadir más secciones si tuvieras */}
        <div className="App-Promotions"></div>
        <PromotionsSection /> {/* La nueva sección de promociones */}
      </main>
      <footer>
         <Footer /> {/* El pie de página */}
      </footer>
      {/* <Footer /> */} {/* El pie de página */}
    </div>
  );
}

export default App;