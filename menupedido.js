class MenuPedido {
    constructor(nombre, cantidad) {
        this.nombre = nombre;
        this.cantidad = cantidad;
    }

    imprimirMenuPedido() {
        let cadena = "Menu: " + this.nombre + " Cantidad: " + this.cantidad;
        return cadena
    }



}

