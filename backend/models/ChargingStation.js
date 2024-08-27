const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const plugsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    potency: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    }
})

const operatingHoursSchema = new Schema({
    day: {
        type: String,
        required: true
    },
    opening: {
        type: String, //e.g., '08:00 AM'
        required: true
    },
    closing: {
        type: String, //e.g., '06:00 PM'
        required: true
    }
});

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
        },
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        }
    },
    status: {
        type: String,
        required: true
    },
    operatingHours: [operatingHoursSchema],
    plugs:[plugsSchema]
});

const ChargingStation = mongoose.model('ChargingStation', chargingStationSchema);

module.exports = ChargingStation;
