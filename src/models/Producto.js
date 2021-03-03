const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ProductoSchema = Schema({
    nombre: {
        type: String,
        trim: true
    },
    precio: {
        type: Number,
        trim: true
    },
    imagen: {
        type: String,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model("Producto", ProductoSchema)