const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true,
    },
    color: {
        type: String,
        required: true,
    },
    raza: {
        type: String,
        required: false,
    },
    edad: {
        type: Number,
        required: true,
    }
});

const Gato = mongoose.model('Gato', storeSchema);

module.exports = {Gato}