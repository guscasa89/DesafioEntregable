class Menu {
    constructor(nombre, precio, peso, gluten, coccion) {
        this.nombre = nombre;
        this.precio = precio;
        this.peso = peso;
        this.gluten = gluten;
        this.coccion = coccion;
    }

    darGluten() {
        let glut = "NO"
        /*
        if (this.gluten)
            glut = "SI"
        */

        glut = this.gluten && "SI"

        return glut
    }


    // 0: no especifica 1:HORNO 2: MICROONDAS
    darCoccion() {
        let coc = "No se especifica coccion."
        /*
        if (this.coccion == 1)
            coc = "Precisa horno/sarten."
        else
            coc = "Precisa microondas."
        */
        this.coccion ==  1 ? coc = "Precisa horno/sarten." : coc = "Precisa microondas."

        return coc;
    }


    imprimirMenu() {
        let glutenStr = this.darGluten()
        let coccionStr = this.darCoccion()
        let cadena = "Nombre: " + this.nombre + " Precio: " + this.precio + " Peso: " + this.peso + " Gluten: " + glutenStr + " Coccion: " + coccionStr
        return cadena
    }


}

const menues = [];
menues.push(new Menu("Sorrentinos", 200, 350, true, 1))
menues.push(new Menu("Cazuela", 200, 300, false, 2))
menues.push(new Menu("Pollo Arollado", 220, 350, false, 2))
menues.push(new Menu("Milanesa", 180, 200, true, 1))
menues.push(new Menu("Tarta", 160, 250, true, 1))
menues.push(new Menu("Bondiola", 250, 350, false, 1))