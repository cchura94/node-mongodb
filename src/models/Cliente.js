import mongoose from "mongoose";
const Schema = mongoose.Schema

const ClienteSchema = Schema({
    nombres: {
        type: String,
        trim: true
    },
    apellidos: {
        type: String,
        trim: true
    },
    empresa: {
        type: String,
        trim: true
    },
    correo: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    telefono: {
        type: String,
        trim: true
    }, 
})

module.exports = mongoose.model("Cliente", ClienteSchema)