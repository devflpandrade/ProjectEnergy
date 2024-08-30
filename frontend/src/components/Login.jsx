import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout'; // Ajuste o caminho conforme necessário

function Login() {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 mb-2">
                Usuário:
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Digite seu usuário"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Senha:
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Digite sua senha"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center">
            Não tem perfil?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Clique aqui para se cadastrar
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
