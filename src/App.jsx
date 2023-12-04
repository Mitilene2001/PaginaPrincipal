import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import PaginaPrincipal from './components/PaginaPrincipal';
import Promociones from './components/Promociones';
import Servicios from './components/Servicios';
import Ubicación from './components/Ubicación';
import Contacto from './components/Contacto';
import ServiciosFacial from './components/ServiciosFacial';
import './App.css';
import ServiciosCorporal from './components/ServiciosCorporal';
import ServiciosBelleza from './components/ServiciosBelleza';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/Promociones" element={<Promociones />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/Ubicación" element={<Ubicación />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/ServiciosFacial" element={<ServiciosFacial />} />
          <Route path="/ServiciosCorporal" element={<ServiciosCorporal />} />
          <Route path="/ServiciosBelleza" element={<ServiciosBelleza />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
