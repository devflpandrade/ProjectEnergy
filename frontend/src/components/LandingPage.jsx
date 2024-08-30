// src/components/LandingPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Meu Projeto</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/login" className="hover:underline">Login</Link></li>
              <li><Link to="/register" className="hover:underline">Cadastrar</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Bem-vindo à nossa plataforma!</h2>
          <p className="mb-8">Aqui você encontra estações de carregamento para seu carro elétrico com facilidade e rapidez.</p>
          <Link to="/register" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Comece Agora</Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-gray-700 p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 ProjectEnergy. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
