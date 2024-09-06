import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sidebar = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const [plugType, setPlugType] = useState('');
  const [plugTypes, setPlugTypes] = useState([]); // Estado para armazenar tipos de plug

  useEffect(() => {
    const fetchPlugTypes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/plug-types');
        setPlugTypes(response.data); // Preencher a lista de tipos de plug de forma dinamica
      } catch (error) {
        console.error('Erro ao buscar tipos de plugue:', error);
      }
    };

    fetchPlugTypes();
  }, []);

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
          className="w-full p-2 rounded bg-gray-800 text-white"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="plugType">
          Tipo de Carregador:
        </label>
        <select
          id="plugType"
          className="w-full p-2 rounded bg-gray-800 text-white"
          value={plugType}
          onChange={(e) => setPlugType(e.target.value)}
        >
          <option value="">Selecione</option>
          {plugTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSearch}
      >
        Buscar
      </button>
    </div>
  );
};

export default Sidebar;
