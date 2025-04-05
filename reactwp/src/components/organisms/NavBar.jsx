import React, { useState } from 'react';
import ButtonAtom from '../atoms/ButtonAtom';
import { FiMenu, FiX } from 'react-icons/fi'; // Íconos para el menú hamburguesa

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/cerrar el menú

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Nombre del sitio */}
      <a href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
        Mi Portfolio
      </a>

      {/* Botón hamburguesa (solo en pantallas pequeñas) */}
      <button 
        className="md:hidden text-blue-600 text-3xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />} {/* Cambia entre abrir/cerrar */}
      </button>

      {/* Menú en pantallas grandes */}
      <ul className="hidden md:flex space-x-6 items-center">
        <li><ButtonAtom text='Inicio' href={"/"} /></li>
        <li><ButtonAtom text='Estudios' href={"/Studies"} /></li>
        <li><ButtonAtom text='Experiencia' href={"/Experience"} /></li>
        <li><ButtonAtom text='Contactar' href={"/Contact"} /></li>
      </ul>

      {/* Menú desplegable en móviles */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <li><ButtonAtom text='Inicio' href={"/"} /></li>
          <li><ButtonAtom text='Estudios' href={"/Studies"} /></li>
          <li><ButtonAtom text='Experiencia' href={"/Experience"} /></li>
          <li><ButtonAtom text='Contactar' href={"/Contact"} /></li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
