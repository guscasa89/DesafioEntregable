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

function consultarMenuesServer(){
    fetch('https://633e2676c235b0e5751fa0c8.mockapi.io/alimentos')
    .then(
        (response) => response.json()
    )
    .then(
        (data) => {
            let otrosmenues = data;
            otrosmenues.forEach(element => {
                menues.push(new Menu(element.nombre,element.precio,element.peso,element.gluten,element.coccion))
            });
        }
        
    )
    .catch(
        (error) => console.log(error)
    )

    //consumir json local
    //fetch('/pedidos.json')

}

function agregarMenuesServer(menu){
    fetch('https://633e2676c235b0e5751fa0c8.mockapi.io/alimentos' ,
    {
        method: 'POST',
        body: JSON.stringify({
                
            nombre: menu.nombre,
            precio: menu.precio,
            peso: menu.peso,
            gluten: menu.gluten,
            coccion:  menu.coccion,
        }), 
        headers: {
            'Content-type': 'application/json;charset=UTF-8',
        },
    })
    .then(
        (response) => response.json()
    )
    .then(
        (data) => {
            mostrarMensajeConfirmacion(`Se dio de alta ${data.nombre}`)
        }
        
        
    )
    .catch(
        (error) => console.log(error)
    )

    //consumir json local
    //fetch('/pedidos.json')

}