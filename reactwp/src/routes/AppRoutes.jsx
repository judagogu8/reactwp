import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importa las rutas de react-router-dom
import LandingScreen from './LandingScreen'; // Tu pantalla principal
import NotFound from './NotFound'; // Página 404 opcional
import Studies from './Studies';
import Experience from './Experience';
import Contact from './Contact';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingScreen />} />
      <Route path="/studies" element={<Studies />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} /> {/* Ruta para páginas no encontradas */}
    </Routes>
  );
}

export default AppRoutes;