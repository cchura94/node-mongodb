const mongoose = require("mongoose");
const Schema = mongoose.Schema

const PedidoSchema = Schema({
    cliente: {
        type: Schema.ObjectId,
        ref: "Cliente"
    },
    pedido: [
        {
            producto: {
                type: Schema.ObjectId,
                ref: "Producto"
            },
            cantidad: Number
        }
    ],
    monto_total: {
        type: Number
    },
    fecha_pedido: String
})

module.exports = mongoose.model("Pedido", PedidoSchema);