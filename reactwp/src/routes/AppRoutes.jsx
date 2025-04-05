import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importa las rutas de react-router-dom
import LandingScreen from './LandingScreen'; // Tu pantalla principal
import NotFound from './NotFound'; // Página 404 opcional
import Content from './Content';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingScreen />} />
      <Route path="/content" element={<Content />} />
      <Route path="*" element={<NotFound />} /> {/* Ruta para páginas no encontradas */}
    </Routes>
  );
}

export default AppRoutes;