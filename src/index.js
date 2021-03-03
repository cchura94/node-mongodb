import express from "express";
import mongoose from "mongoose";
import rutas from "./routes/index";

const app = express()

//conectar con mongoose a mongoDB
mongoose.connect("mongodb://localhost:27017/carrito", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then((db) => {
    console.log("MongoDB Conectado");
}).catch((error) => {
    console.log("Error de Conexion con MongoDB")
});

// JSON
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Habilitar Rutas
rutas.add(app);


app.listen(3000, () => {
    console.log("Servidor Levantado...")
})
