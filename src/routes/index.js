import clienteController from "./../controllers/clienteController"
import productoController from "./../controllers/productoController"
import pedidoController from "./../controllers/pedidoController"

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

    // Rutas para Producto
    app.get("/producto", productoController.listar);
    app.post("/producto", productoController.guardar);
    app.get("/producto/:id", productoController.mostrar);
    app.put("/producto/:id", productoController.modificar);
    app.delete("/producto/:id", productoController.eliminar);

    // Rutas para Pedido
    app.get("/pedido", pedidoController.listar);
    app.post("/pedido", pedidoController.guardar);
    //app.get("/producto/:id", PedidoController.mostrar);
    //app.put("/producto/:id", PedidoController.modificar);
    //app.delete("/producto/:id", PedidoController.eliminar);
}

module.exports = {add}