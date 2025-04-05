import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/organisms/NavBar';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <NavBar />
      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
          <p className="text-2xl font-semibold text-gray-800 mb-2">
            Página no encontrada
          </p>
          <p className="text-gray-600 mb-6">
            Lo siento, la página a la que intentas acceder no existe o se movió
          </p>
          <Link to="/">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Volver al inicio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
