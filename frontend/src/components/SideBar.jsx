import React, { useState } from 'react';

const Sidebar = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const [plugType, setPlugType] = useState('');

  const handleSearch = () => {
    onSearch({ city, plugType });
  };

  return (
    <div className="fixed top-0 left-0 h-full bg-sky-900 text-white p-4 w-64">
      <h2 className="text-xl font-semibold mb-4">Busca de Estações</h2>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="city">
          Cidade:
        </label>
        <input
          id="city"
          type="text"
          placeholder="Digite a cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="plugType">
          Tipo de Carregador:
        </label>
        <select
          id="plugType"
          value={plugType}
          onChange={(e) => setPlugType(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white"
        >
          <option value="">Selecione</option>
          <option value="Type 1">Type 1</option>
          <option value="Type 2">Type 2</option>
        </select>
      </div>
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Buscar
      </button>
    </div>
  );
};

export default Sidebar;
