class Pedido {
    constructor(id, cliente, menues, direccion, telefono, costo) {
        this.id = id;
        this.cliente = cliente;
        this.menues = menues;
        this.direccion = direccion;
        this.telefono = telefono;
        this.costo = costo;
    }

    imprimirPedido() {
        let cadena = "Numero de pedido : " + this.id + "\nCliente: " + this.cliente + "\nDireccion: " + this.direccion + "\nTelefono: " + this.telefono + "\nMenues pedidos: \n" + listarMenuesPedidos() + "\n costo total: " + this.costo
        return cadena
    }

    borrarMenuesPedidos() {
        this.menues.splice(0, 6);
    }
}