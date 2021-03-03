import Producto from './../models/Producto'

const listar = async (req, res) => {
    try{
        let datos = await Producto.find()
        res.json(datos)
    }catch(error){
        res.json({error: true, mensaje: "Problemas al recuperar la información"})
    }    
}

const guardar = async (req, res) => {
    try {
        let prod = new Producto(req.body)
        await prod.save();
        res.json({mensaje: "Producto Registrado..."});
    } catch (error) {
        res.json({error: true, mensaje: "Problemas al guardar la información"})
    }
}

const mostrar = async (req, res) => {
    try {
        let id = req.params.id;
        let dato = await Producto.findById(id)
        res.json(dato)
    } catch (error) {
        res.json({error: true, mensaje: "Problemas al obtener la información"})
   
    }
}

const modificar = async (req, res) => {
    try {
        let id = req.params.id;
        let prod = await Producto.findById(id)
        if(prod){
            // Modificamos
            await Producto.findByIdAndUpdate(prod._id, req.body)
            res.json({mensaje: "Producto modificado"})
        }
        res.json({mensaje: "Producto no encontrado"})
    } catch (error) {
        res.json({error: true, mensaje: "Problemas al modificar la información"})
   
    }
}

const eliminar = async (req, res) => {
    let id = req.params.id;
    await Producto.remove({_id: id})
    res.json({mensaje: "Producto Eliminado"});
}

module.exports = {
    listar,
    guardar,
    mostrar,
    modificar,
    eliminar
}
//export {listar, mostrar, guardar, modificar, eliminar}