const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chargingStationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        }
    },
    status: {
        type: String,
        required: true
    }
});

const ChargingStation = mongoose.model('ChargingStation', chargingStationSchema);

module.exports = ChargingStation;
