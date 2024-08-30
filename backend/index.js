require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = express();
const port = process.env.PORT || 5000;

// Configurações do Express
app.use(cors());
app.use(express.json());

// Conectar ao MongoDB usando a URI do .env
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado ao MongoDB'))
.catch(error => console.error('Erro ao conectar ao MongoDB:', error));

// Modelo de Estação de Carregamento
const ChargingStation = require('./models/ChargingStation');

// Modelo de Usuário
const User = require('./models/User');

// Rota de verificação
app.get('/', (req, res) => {
    res.send('API está funcionando!');
});

// Rotas para Estações de Carregamento

// Rota para obter todas as estações de carregamento
app.get('/stations', async (req, res) => {
    try {
        const stations = await ChargingStation.find();
        res.json(stations);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar estações de carregamento' });
    }
});

// Rota para adicionar uma nova estação de carregamento
app.post('/stations', async (req, res) => {
    const newStation = new ChargingStation(req.body);
    try {
        const savedStation = await newStation.save();
        res.status(201).json(savedStation);
    } catch (error) {
        console.error('Erro ao adicionar estação de carregamento:', error);
        res.status(400).json({ error: 'Erro ao adicionar estação de carregamento', details: error.message });
    }
});

// Rota para atualizar uma estação de carregamento
app.put('/stations/:id', async (req, res) => {
    try {
        const updatedStation = await ChargingStation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedStation) {
            return res.status(404).json({ error: 'Estação de carregamento não encontrada' });
        }
        res.json(updatedStation);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao atualizar estação de carregamento', details: error.message });
    }
});

// Rota para deletar uma estação de carregamento
app.delete('/stations/:id', async (req, res) => {
    try {
        const deletedStation = await ChargingStation.findByIdAndDelete(req.params.id);
        if (!deletedStation) {
            return res.status(404).json({ error: 'Estação de carregamento não encontrada' });
        }
        res.json({ message: 'Estação de carregamento deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar estação de carregamento' });
    }
});

// ** criar mais rotas de Usuários abaixo **

// Rota para obter todos os usuários
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        // Mapeia os usuários para ajustar o formato de birthDate
        const formattedUsers = users.map(user => ({
            ...user._doc,
            birthDate: user.birthDate.toISOString().split('T')[0]
        }));
        res.json(formattedUsers);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).json({ error: 'Erro ao buscar usuários', details: error.message });
    }
});

app.post('/register', async (req, res) => {
    let { firstName, lastName, email, birthDate, cpf, carBrand, carModel, password } = req.body;

    try {
        // Formata a data para YYYY-MM-DD
        birthDate = new Date(birthDate).toISOString().split('T')[0];

        // Verifica se o email já está em uso
        const existingUser = await User.findOne({ cpf });
        if (existingUser) {
            return res.status(400).json({ error: 'Este CPF já está em uso.' });
        }

        // Criptografa a senha antes de salvar
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ 
            firstName, 
            lastName, 
            email, 
            birthDate, 
            cpf, 
            carBrand, 
            carModel, 
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ message: "Usuário registrado com sucesso!" });
    } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        res.status(400).json({ error: 'Erro ao registrar usuário', details: error.message });
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
