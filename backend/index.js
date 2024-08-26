require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Conectar ao MongoDB usando a URI do .env
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado ao MongoDB'))
.catch(error => console.error('Erro ao conectar ao MongoDB:', error));

// Rotas de exemplo
app.get('/', (req, res) => {
    res.send('API rodando...');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
