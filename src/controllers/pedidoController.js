const Pedido = require("./../models/Pedido");

const listar = async (req, res) => {
    try{
        let datos = await Pedido.find().populate("cliente").populate({
            path: "pedido.producto",
            model: "Producto"
        })
        res.json(datos)
    }catch(error){
        res.json({error: true, mensaje: "Problemas al recuperar la información"})
    }    
}

const guardar = async (req, res) => {
    try {
        let ped = new Pedido(req.body)
        await ped.save();
        res.json({mensaje: "Pedido Registrado..."});
    } catch (error) {
        res.json({error: true, mensaje: "Problemas al guardar la información"})
    }  
}

module.exports = {listar, guardar}