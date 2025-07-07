// src/App.js
import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import FeaturesGrid from './Components/FeacturesGrid';
import Footer from './Components/Footer';
import './App.css'; // Estilos generales de la App si los tienes

function App() {
  return (
    <div className="App">
      <Navbar /> {/* El Navbar en la parte superior */}
      <main className="main-content"> {/* Un contenedor para el contenido principal */}
        <HeroSection /> {/* La sección principal con el título y la imagen */}
        <FeaturesGrid /> {/* La cuadrícula de servicios */}
        {/* Aquí podrías añadir más secciones si tuvieras */}
      </main>
      <Footer /> {/* El pie de página */}
    </div>
  );
}

export default App;