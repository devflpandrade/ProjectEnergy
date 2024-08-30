import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Defina um array de objetos para os itens do menu
  const menuItems = [
    { icon: '1', text: 'Cadastro' },
    { icon: '2', text: 'Perfil' },
    { icon: '3', text: 'Configurações' },
    { icon: '4', text: 'Ajuda' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-custom-gradient">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center relative">
        {/* Main Content Area */}
        <div className="bg-white bg-opacity-89 p-8 rounded shadow-md text-center mx-auto w-full max-w-md">
          <h2 className="text-4xl font-semibold mb-2">Bem-vindo à nossa plataforma!</h2>
          <p className="mb-8">Aqui você encontra estações de carregamento para seu carro elétrico com facilidade e rapidez.</p>
          <Link to="/register" className="bg-black text-white py-2 px-4 rounded hover:bg-sky-500 transition">Comece Agora</Link>
        </div>

        {/* Sidebar */}
        <aside 
          className={`transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-16'} 
          fixed right-1 top-1/2 transform -translate-y-1/2 h-64 bg-white bg-opacity-50 backdrop-blur-lg p-4 shadow-md rounded-lg`}
          onMouseEnter={() => setIsSidebarOpen(true)}
          onMouseLeave={() => setIsSidebarOpen(false)}
        >
          <h3 className={`text-xl font-semibold mb-4 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>
            Menu
          </h3>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className="mb-2">
                <Link 
                  to="#" 
                  className={`flex items-center p-2 rounded hover:bg-black hover:text-white transition duration-300 ease-in-out ${isSidebarOpen ? 'justify-start' : 'justify-center'}`}
                >
                  {item.icon}
                  {isSidebarOpen && <span className="ml-2">{item.text}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
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
