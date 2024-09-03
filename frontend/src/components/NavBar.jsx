// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-sky-900 text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Project Energy</h1>
        <ul className="flex space-x-3">
          <li>
            <Link to="/profile" className="hover:text-gray-400">Perfil</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/settings" className="hover:text-gray-400">Configurações</Link>
          </li>
          {/* Adicione mais itens de menu conforme necessário */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
