import clienteController from "./../controllers/clienteController"

const add = function(app){

    app.get("/", function(req, res){
        res.send("Hola Mundo");
    });

    // Rutas para Cliente
    app.get("/cliente", clienteController.listar);
    app.post("/cliente", clienteController.guardar);
    app.get("/cliente/:id", clienteController.mostrar);
    app.put("/cliente/:id", clienteController.modificar);
    app.delete("/cliente/:id", clienteController.eliminar);
}

module.exports = {add}