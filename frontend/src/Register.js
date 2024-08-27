import React from 'react';

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Cadastro</h2>
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700 mb-2">
                Nome:
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Digite seu nome"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700 mb-2">
                Sobrenome:
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Digite seu sobrenome"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu e-mail"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="birthDate" className="block text-gray-700 mb-2">
              Data de Nascimento:
            </label>
            <input
              type="date"
              id="birthDate"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cpf" className="block text-gray-700 mb-2">
              CPF:
            </label>
            <input
              type="text"
              id="cpf"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu CPF"
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="carBrand" className="block text-gray-700 mb-2">
                Marca do carro:
              </label>
              <input
                type="text"
                id="carBrand"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Digite a marca do seu carro"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="carModel" className="block text-gray-700 mb-2">
                Modelo do carro:
              </label>
              <input
                type="text"
                id="carModel"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Digite o modelo do seu carro"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
