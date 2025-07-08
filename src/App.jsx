// src/App.js
import React from 'react';
import HeroSection from './Components/HeroSection';
import FeaturesGrid from './Components/FeacturesGrid';
import Footer from './Components/Footer';
import './App.css';
import PromotionsSection from './Components/PromotionsSection';
import HeroStartPage from './pages/HeroStartPage';
import HomeStartPage from './pages/HomeStartPage';

function App() {
  return (
    <div className="App">
      <HeroStartPage />
      <HomeStartPage />
      <HeroSection />
      <FeaturesGrid />
      <PromotionsSection />
      <Footer />
    </div>
  );
}

export default App;