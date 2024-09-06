// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-sky-900 text-white p-4 fixed w-full top-0 z-50"> {/* z-50 é um valor alto o suficiente */}
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-serif ">Project Energy</h1>
        <ul className="flex space-x-3">
          <li>
            <button onClick={toggleSidebar} className="hover:text-gray-400">Filtros de busca</button>
          </li>
          <li>|</li>
          <li>
            <Link to="/profile" className="hover:text-gray-400">Perfil</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/settings" className="hover:text-gray-400">Configurações</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/" className="hover:text-gray-400">Sair</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
