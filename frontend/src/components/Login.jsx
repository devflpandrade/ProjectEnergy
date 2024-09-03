import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from './Layout'; // Ajuste o caminho conforme necessário

function Login() {
  const [cpf, setCpf] = useState(''); // Alterado de username para cpf
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Limpa a mensagem de erro antes de tentar o login

    try {
      // Enviar requisição de autenticação para o backend
      const response = await axios.post('http://localhost:5000/login', {
        cpf, // Enviando o CPF ao invés do username
        password
      });

      if (response.status === 200) {
        // Se o login for bem-sucedido, redireciona para a página principal
        navigate('/main');
      }
    } catch (error) {
      // Manipular erros e exibir mensagem de erro
      if (error.response && error.response.status === 401) {
        setErrorMessage('Usuário ou senha inválidos');
      } else {
        setErrorMessage('Ocorreu um erro ao tentar fazer login. Tente novamente.');
      }
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          {errorMessage && (
            <p className="text-red-500 text-center mb-4">{errorMessage}</p>
          )}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="cpf" className="block text-gray-700 mb-2">
                CPF:
              </label>
              <input
                type="text"
                id="cpf"
                value={cpf} // Alterado de username para cpf
                onChange={(e) => setCpf(e.target.value)} // Alterado para setCpf
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Digite seu CPF"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Senha:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
