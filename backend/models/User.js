const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    birthDate: { type: Date, required: true },
    cpf: { type: String, required: true, unique: true },
    carBrand: { type: String },
    carModel: { type: String },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
