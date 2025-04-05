import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Nombre */}
      <a href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
        Juan David González Guáqueta
      </a>

      {/* Links */}
      <ul className="flex space-x-6 items-center">
        <li>
          <a href="/" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Inicio
          </a>
        </li>
        <li>
          <a href="/Content" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Contenido
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
