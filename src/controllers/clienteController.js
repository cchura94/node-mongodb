import cliente from "./../models/Cliente";

const listar = async function(req, res) {
    /*cliente.find().then(function(datos){
        res.json(datos)
    }).catch(error => {
        res.json({error: error});
    });*/

    try{
        const datos = await cliente.find()
        //const otro = await datos.findById(id)
        res.json(datos)
    }catch(error){
        res.json({error: error});
    }
    

}

const guardar = async function(req, res) {
    let clie = new cliente(req.body);
    /*clie.save().then(() => {
        res.json({mensaje: "Cliente Registrado..."});
    })*/
    await clie.save();
    res.json({mensaje: "Cliente Registrado..."});
}

const mostrar = function(req, res) {
    let id = req.params.id;
    cliente.findById(id).then((dato) => {
        res.json(dato)
    }).catch(err => {
        res.send({error: err})
    })
}

const modificar = function(req, res) {
    
}

const eliminar = function(req, res) {
    
}

module.exports = {
    listar,
    guardar,
    mostrar,
    modificar,
    eliminar
}