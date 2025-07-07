import React from 'react';
import HomePage from './Components/HomePage'; // Importa tu componente HomePage
import './App.css'; // Estilos globales de la aplicación
import Inicio from './Components/Inicio';

function App() {
  return (
    <div className="App">
      <Inicio />
      <HomePage />
      <Login />
    </div>
  );
}

export default App;