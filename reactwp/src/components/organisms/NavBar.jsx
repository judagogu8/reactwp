import React from 'react';
import TextAtom from '../atoms/TextAtom';
import ButtonAtom from '../atoms/ButtonAtom';

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
          <ButtonAtom text='Inicio' href={"/"}/>
        </li>
        <li>
          <ButtonAtom text='Contenido' href={"/Content"}/>
        </li>
        <li>
          <ButtonAtom text='Estudios' href={"/Studies"}/>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
