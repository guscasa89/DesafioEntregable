//variables
let btnLista;
let btnAlta;
let btnCons;
let btnBaja;
let btnMod;
let btnAddMenu;
let btnLimpiar;
let formulario;

let menu;


let menuesPedidos = [];
let pedidos = [];
let alimentos = [];





/**************************** funciones para administrar el DOM ****************************************/

function inicializarElementos() {
    btnLista = document.getElementById("btnlista");
    btnAlta = document.getElementById("btnalta");
    btnCons = document.getElementById("btncons");
    btnBaja = document.getElementById("btnbaja");
    btnMod = document.getElementById("btnmod");
    btnAddMenu = document.getElementById("btnaddmenu");
    btnLimpiar = document.getElementById("btnlimpiar");
}

function limpiarDiv() {
    //obtengo el div existente y borro el contenido
    let divPrincipal = document.getElementById("principal");
    divPrincipal.remove();

    //obtengo el contenedor del div anterior
    let divContenedor = document.getElementById("contenedor")

    //genero el nuevo div principal
    let nuevoPrincipal = document.createElement("div");
    nuevoPrincipal.id = "principal";
    nuevoPrincipal.className = "col-3 order-0";

    //lo agrego al contenedor
    divContenedor.append(nuevoPrincipal);

    return nuevoPrincipal;
}

function limpiarDivMensajes() {
    let divPrincipal = document.getElementById("container-alta");
    divPrincipal.remove();

    //obtengo el contenedor del div anterior
    let divContenedor = document.getElementById("contenedor")

    //genero el nuevo div principal
    let nuevoPrincipal = document.createElement("div");
    nuevoPrincipal.id = "container-alta";
    nuevoPrincipal.className = "col-3 order-1";

    //lo agrego al contenedor
    divContenedor.append(nuevoPrincipal);

    return nuevoPrincipal;
}

/************************************** funciones del programa ****************************************/

/****************************************Listar Menues ***********************************************/
function listarMenues() {


    let divNuevoPrincipal = limpiarDiv()
    limpiarDivMensajes()

    let divFlex = document.createElement("div");
    divFlex.className = "cont-grid";


    menues.forEach((menu) => {

        //creo el div para los menues
        let divMenues = document.createElement("div")
        divMenues.className = "col-2 card text-white bg-primary mb-3"
        divMenues.style = "width: 20rem; margin: 10px; border-radius: 20px;"
        divMenues.innerHTML = `<div class=\"card-header\">Menu ${menu.nombre}</div><div class=\"card-body\"><p class=\"card-text\">${menu.imprimirMenu()}</p></div>`



        //al div principal le agrego el div de menues
        divFlex.append(divMenues);


    })

    divNuevoPrincipal.append(divFlex);


}

function listarMenuesPedidos() {

    let cadena = "";
    menuesPedidos.forEach((menu) => {

        cadena = cadena + menu.imprimirMenuPedido() + '\n';

    })

    return cadena;
}

function darCostoTotal(arrayPedidos) {
    let costo = 0;
    arrayPedidos.forEach((menu) => {

        switch (menu.nombre) {
            case 'Sorrentinos':
                costo = costo + menu.cantidad * 200;
                break;
            case 'Cazuela':
                costo = costo + menu.cantidad * 200;
                break;
            case 'Pollo Arollado':
                costo = costo + menu.cantidad * 220;
                break;
            case 'Milanesa':
                costo = costo + menu.cantidad * 180;
                break;
            case 'Tarta':
                costo = costo + menu.cantidad * 160;
                break;
            case 'Bondiola':
                costo = costo + menu.cantidad * 250;
                break;
            default:
                break;

        }

    })

    return costo;
}


function selectMenues() {

    let slcMenu1 = document.getElementById("slcMenu1");
    let slcMenu2 = document.getElementById("slcMenu2");
    let slcMenu3 = document.getElementById("slcMenu3");
    let slcMenu4 = document.getElementById("slcMenu4");
    let slcMenu5 = document.getElementById("slcMenu5");
    let slcMenu6 = document.getElementById("slcMenu6");

    const selecteds = [];

    selecteds.push(slcMenu1);
    selecteds.push(slcMenu2);
    selecteds.push(slcMenu3);
    selecteds.push(slcMenu4);
    selecteds.push(slcMenu5);
    selecteds.push(slcMenu6);



    //alert("A contuinuación seleccione la cantidad de viandas a pedir:")
    const CANT = ""

    menuesPedidos.splice(0, 6);

    var cantidad;
    cantidad = parseInt(selecteds[0].options[selecteds[0].selectedIndex].value);
    menuesPedidos.push(new MenuPedido(menues[0].nombre, cantidad))
    cantidad = parseInt(selecteds[1].options[selecteds[1].selectedIndex].value);
    menuesPedidos.push(new MenuPedido(menues[1].nombre, cantidad))
    cantidad = parseInt(selecteds[2].options[selecteds[2].selectedIndex].value);
    menuesPedidos.push(new MenuPedido(menues[2].nombre, cantidad))
    cantidad = parseInt(selecteds[3].options[selecteds[3].selectedIndex].value);
    menuesPedidos.push(new MenuPedido(menues[3].nombre, cantidad))
    cantidad = parseInt(selecteds[4].options[selecteds[4].selectedIndex].value);
    menuesPedidos.push(new MenuPedido(menues[4].nombre, cantidad))
    cantidad = parseInt(selecteds[5].options[selecteds[5].selectedIndex].value);
    menuesPedidos.push(new MenuPedido(menues[5].nombre, cantidad))

    /* **No me funcionó**

        var i = 0;
        //cantidades: [0] Sorrentinos [1] Cazuela [2] Pollo arrollado [3] Milanesa [4] Tarta [5] Bondiola
        menues.forEach((menu) => {

            var cantidad = parseInt(selecteds[i].options[selecteds[i].selectedIndex].value);
            menuesPedidos.push(new MenuPedido(menu.nombre, cantidad))

            i++;
        })
    */

    return menuesPedidos;


}


function agregarPedido(nombre, direccion, telefono) {
    const ID = Math.floor(Math.random() * 1000);

    const NOMBRE = nombre;
    const DIRECCION = direccion;
    const TELEFONO = telefono;

    const MENUESPEDIDOS = selectMenues();

    const COSTO = darCostoTotal(MENUESPEDIDOS);

    const pedido = new Pedido(ID, NOMBRE, MENUESPEDIDOS, DIRECCION, TELEFONO, COSTO);

    pedidos.push(pedido);

    return pedido;
}

function actualizarPedido(id, nombre, direccion, telefono) {
    const ID = id;

    const NOMBRE = nombre;
    const DIRECCION = direccion;
    const TELEFONO = telefono;

    const MENUESPEDIDOS = selectMenues();

    const COSTO = darCostoTotal(MENUESPEDIDOS);

    const pedido = new Pedido(ID, NOMBRE, MENUESPEDIDOS, DIRECCION, TELEFONO, COSTO);

    pedidos.push(pedido);

    return pedido;
}

function estaPedido(nroPedido) {

    return (pedidos.some((pedido) => pedido.id == nroPedido))
}

//Precondicion: existe pedido
function darPedido(nroPedido) {

    return pedidos.find((pedido) => pedido.id == nroPedido)
}

function devolverPedido(nroPedido) {

    let auxiliar = darPedido(nroPedido)


    const pedido = new Pedido(auxiliar.id, auxiliar.cliente, auxiliar.menues, auxiliar.direccion, auxiliar.telefono, auxiliar.costo);

    //para imprimir correctamente
    let menuesPedidosAux = [];
    menuesPedidosAux.push(new MenuPedido(auxiliar.menues[0].nombre, auxiliar.menues[0].cantidad))
    menuesPedidosAux.push(new MenuPedido(auxiliar.menues[1].nombre, auxiliar.menues[1].cantidad))
    menuesPedidosAux.push(new MenuPedido(auxiliar.menues[2].nombre, auxiliar.menues[2].cantidad))
    menuesPedidosAux.push(new MenuPedido(auxiliar.menues[3].nombre, auxiliar.menues[3].cantidad))
    menuesPedidosAux.push(new MenuPedido(auxiliar.menues[4].nombre, auxiliar.menues[4].cantidad))
    menuesPedidosAux.push(new MenuPedido(auxiliar.menues[5].nombre, auxiliar.menues[5].cantidad))

    menuesPedidos.splice(0, 6);
    menuesPedidos.push(new MenuPedido(menuesPedidosAux[0].nombre, menuesPedidosAux[0].cantidad))
    menuesPedidos.push(new MenuPedido(menuesPedidosAux[1].nombre, menuesPedidosAux[1].cantidad))
    menuesPedidos.push(new MenuPedido(menuesPedidosAux[2].nombre, menuesPedidosAux[2].cantidad))
    menuesPedidos.push(new MenuPedido(menuesPedidosAux[3].nombre, menuesPedidosAux[3].cantidad))
    menuesPedidos.push(new MenuPedido(menuesPedidosAux[4].nombre, menuesPedidosAux[4].cantidad))
    menuesPedidos.push(new MenuPedido(menuesPedidosAux[5].nombre, menuesPedidosAux[5].cantidad))

    msjConsultaPedido(pedido);

}

function eliminarPedido(nroPedido) {
    let borrado = false;
    var i = 0;
    while (i < pedidos.length && borrado == false) {
        if (pedidos[i].id == nroPedido) {
            pedidos.splice(i, 1);
            borrado = true;
        }


        i++;
    }

}



/************************************ Alta Pedido *********************************************/

function altaPedido() {

    let divNuevoPrincipal = limpiarDiv()
    limpiarDivMensajes()

    let divForm = document.createElement("form");

    divForm.id = "formulario";

    divForm.innerHTML =
        `<fieldset>
    <legend>Resumen de tu pedido:</legend>

    <div class="form-group">
      <label class="col-form-label col-form-label-sm mt-4" for="iptNombre">Nombre Completo</label>
      <input class="form-control form-control-sm" type="text" placeholder="Nombre Apellido" id="iptNombre">

      <label class="col-form-label col-form-label-sm mt-4" for="iptTelefono">Telefono</label>
      <input class="form-control form-control-sm" type="text" placeholder="09xxxxxxx" id="iptTelefono">

      <label class="col-form-label col-form-label-sm mt-4" for="iptDireccion">Direccion</label>
      <input class="form-control form-control-sm" type="text" placeholder="xxxxxxxx 1111 apto xx"
        id="iptDireccion">

        <div class="form-group">
        <label for="slcMenu1" class="form-label mt-4">Menu Sorrentinos, cantidad:</label>
        <select class="form-select" id="slcMenu1">
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </select>
        </div>

        <div class="form-group">
        <label for="slcMenu2" class="form-label mt-4">Menu Cazuela, cantidad:</label>
        <select class="form-select" id="slcMenu2">
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </select>
        </div>

        <div class="form-group">
        <label for="slcMenu3" class="form-label mt-4">Menu Pollo Arrollado, cantidad:</label>
        <select class="form-select" id="slcMenu3">
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </select>
        </div>

        <div class="form-group">
        <label for="slcMenu4" class="form-label mt-4">Menu Milanesa, cantidad:</label>
        <select class="form-select" id="slcMenu4">
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </select>
        </div>

        <div class="form-group">
        <label for="slcMenu5" class="form-label mt-4">Menu Tarta, cantidad:</label>
        <select class="form-select" id="slcMenu5">
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </select>
        </div>

        <div class="form-group">
        <label for="slcMenu6" class="form-label mt-4">Menu Bondiola, cantidad:</label>
        <select class="form-select" id="slcMenu6">
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </select>
        </div>

        <div class="modal-footer">
            <button type="submit" class="btn btn-primary">Confirmar</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        </div>

    </div>
    </fieldset>
    `;


    divNuevoPrincipal.append(divForm);



    formulario = document.getElementById("formulario");

    formulario.onsubmit = (event) => validarFormularioAlta(event);



}

function validarFormularioAlta(event) {
    event.preventDefault();


    let inputNombre = document.getElementById("iptNombre");
    let inputDireccion = document.getElementById("iptDireccion");
    let inputTelefono = document.getElementById("iptTelefono");


    const pedido = agregarPedido(inputNombre.value, inputDireccion.value, inputTelefono.value);

    actualizarPedidosStorage();


    msjAltaPedido(pedido);

    limpiarDiv();

}

/************************************ Modificar Pedido *********************************************/

function modificarPedido() {


    let divNuevoPrincipal = limpiarDiv()
    limpiarDivMensajes()

    let divForm = document.createElement("form");

    divForm.id = "formulario";

    divForm.style = "margin: 10px; border-radius: 20px;";


    let cadena = ``;

    (pedidos.length > 0) && pedidos.forEach((pedido) => {
        cadena = cadena + `<option>${pedido.id}</option>`
    })


    divForm.innerHTML =
        `<fieldset><div class="form-group"><label for="selectorPedidosMod" class="form-label mt-4">Seleccione pedido a modificar</label>
    <select multiple="" class="form-select" id="selectorPedidosMod">` + cadena + `</select></div>
    <button type="submit" class="btn btn-primary">Modificar</button>
    </fieldset>`

    divNuevoPrincipal.append(divForm);

    formulario = document.getElementById("formulario");

    formulario.onsubmit = (event) => validarFormularioSlcPedido(event);





}

function validarFormularioSlcPedido(event) {
    event.preventDefault();

    //generar un nuevo formulario para modificacion....

    let slcPedido = document.getElementById("selectorPedidosMod");
    let nroPedido = parseInt(slcPedido.options[slcPedido.selectedIndex].value);


    let divNuevoPrincipal = limpiarDiv()

    let divForm = document.createElement("form");

    divForm.id = "formulario";

    divForm.style = "margin: 10px; border-radius: 20px;";




    divForm.innerHTML =
        `<fieldset>
    <legend>MOdificacion de pedido ${nroPedido}:</legend>

    <div class="form-group">
      <label class="col-form-label col-form-label-sm mt-4" for="iptNombre">Nombre Completo</label>
      <input class="form-control form-control-sm" type="text" placeholder="Nombre Apellido" id="iptNombre">

      <label class="col-form-label col-form-label-sm mt-4" for="iptTelefono">Telefono</label>
      <input class="form-control form-control-sm" type="text" placeholder="09xxxxxxx" id="iptTelefono">

      <label class="col-form-label col-form-label-sm mt-4" for="iptDireccion">Direccion</label>
      <input class="form-control form-control-sm" type="text" placeholder="xxxxxxxx 1111 apto xx"
        id="iptDireccion">

        <div class="form-group">
        <label for="slcMenu1" class="form-label mt-4">Menu Sorrentinos, cantidad:</label>
        <select class="form-select" id="slcMenu1">
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </select>
        </div>

        <div class="form-group">
        <label for="slcMenu2" class="form-label mt-4">Menu Cazuela, cantidad:</label>
        <select class="form-select" id="slcMenu2">
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </select>
        </div>

        <div class="form-group">
        <label for="slcMenu3" class="form-label mt-4">Menu Pollo Arrollado, cantidad:</label>
        <select class="form-select" id="slcMenu3">
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </select>
        </div>

        <div class="form-group">
        <label for="slcMenu4" class="form-label mt-4">Menu Milanesa, cantidad:</label>
        <select class="form-select" id="slcMenu4">
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </select>
        </div>

        <div class="form-group">
        <label for="slcMenu5" class="form-label mt-4">Menu Tarta, cantidad:</label>
        <select class="form-select" id="slcMenu5">
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </select>
        </div>

        <div class="form-group">
        <label for="slcMenu6" class="form-label mt-4">Menu Bondiola, cantidad:</label>
        <select class="form-select" id="slcMenu6">
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </select>
        </div>

        <div class="modal-footer">
            <button type="submit" class="btn btn-primary">Confirmar</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        </div>

    </div>
    </fieldset>
    `;


    divNuevoPrincipal.append(divForm);



    formulario = document.getElementById("formulario");

    formulario.onsubmit = (event) => validarFormularioMod(event, nroPedido);




}

function validarFormularioMod(event, nroPedido) {
    event.preventDefault();


    let inputNombre = document.getElementById("iptNombre");
    let inputDireccion = document.getElementById("iptDireccion");
    let inputTelefono = document.getElementById("iptTelefono");




    const ID = nroPedido;

    const pedidoOriginal = darPedido(nroPedido);
    eliminarPedido(pedidoOriginal.id);

    const pedidoModificado = actualizarPedido(ID, inputNombre.value, inputDireccion.value, inputTelefono.value);

    actualizarPedidosStorage();

    msjAltaPedido(pedidoModificado);

    limpiarDiv();

}

/************************************ Cancelar Pedido *********************************************/



function bajaPedido() {


    let divNuevoPrincipal = limpiarDiv()
    limpiarDivMensajes()

    let divForm = document.createElement("form");

    divForm.id = "formulario";

    divForm.style = "margin: 10px; border-radius: 20px;";


    let cadena = ``;
    /*
    if (pedidos.length > 0) {

        
        pedidos.forEach((pedido) => {
            cadena = cadena + `<option>${pedido.id}</option>`
        })


    }
    */
    pedidos.length > 0 && pedidos.forEach((pedido) => {
        cadena = cadena + `<option>${pedido.id}</option>`
    })


    divForm.innerHTML =
        `<fieldset><div class="form-group"><label for="selectorPedidosMod" class="form-label mt-4">Seleccione pedido a cancelar</label>
    <select multiple="" class="form-select" id="selectorPedidosMod">` + cadena + `</select></div>
    <button type="submit" class="btn btn-primary">Dar de baja</button>
    </fieldset>`

    divNuevoPrincipal.append(divForm);

    formulario = document.getElementById("formulario");

    formulario.onsubmit = (event) => validarFormularioBaja(event);



}

function validarFormularioBaja(event) {
    event.preventDefault();


    let slcPedido = document.getElementById("selectorPedidosMod");
    let nroPedido = parseInt(slcPedido.options[slcPedido.selectedIndex].value);

    msjBajaConfirmacion(nroPedido);

    limpiarDiv();

}

/************************************ Consultar Pedido *********************************************/

function consultarPedido() {

    let divNuevoPrincipal = limpiarDiv()
    limpiarDivMensajes()

    let divForm = document.createElement("form");

    divForm.id = "formulario";

    divForm.style = "margin: 10px; border-radius: 20px;";


    let cadena = ``;


    pedidos.length > 0 && pedidos.forEach((pedido) => {
        cadena = cadena + `<option>${pedido.id}</option>`
    })



    divForm.innerHTML =
        `<fieldset><div class="form-group"><label for="selectorPedidosMod" class="form-label mt-4">Seleccione pedido a modificar</label>
    <select multiple="" class="form-select" id="selectorPedidosMod">` + cadena + `</select></div>
    <button type="submit" class="btn btn-primary">Consultar</button>
    </fieldset>`

    divNuevoPrincipal.append(divForm);

    formulario = document.getElementById("formulario");

    formulario.onsubmit = (event) => validarFormularioConsPedido(event);




}

function validarFormularioConsPedido(event) {

    event.preventDefault();

    //generar un nuevo formulario para modificacion....

    let slcPedido = document.getElementById("selectorPedidosMod");
    let nroPedido = parseInt(slcPedido.options[slcPedido.selectedIndex].value);



    devolverPedido(nroPedido);



}

/************************************ Funciones de Storage *********************************************/

function limpiarStorage() {
    localStorage.clear();
    pedidos = [];
    limpiarDiv();
    limpiarDivMensajes();
    mostrarMensajeConfirmacion("Almacenamiento borrado!")
}

function actualizarPedidosStorage() {
    let pedidosJSON = JSON.stringify(pedidos);
    localStorage.setItem("pedidos", pedidosJSON);
}

function obtenerPedidosStorage() {
    let pedidosJSON = localStorage.getItem("pedidos");

    if (pedidosJSON) {
        pedidos = JSON.parse(pedidosJSON);
    } else
        pedidos = [];


}

/************************************ Funciones de Prueba Fetch *********************************************/

function agregarMenu() {

    let divNuevoPrincipal = limpiarDiv()
    limpiarDivMensajes()

    let divForm = document.createElement("form");

    divForm.id = "formulario";

    divForm.innerHTML =
        `<fieldset>
    <legend>Agregar Menu:</legend>

    <div class="form-group">
      <label class="col-form-label col-form-label-sm mt-4" for="iptNombre">Nombre</label>
      <input class="form-control form-control-sm" type="text" placeholder="Nombre comida" id="iptNombre">

      <label class="col-form-label col-form-label-sm mt-4" for="iptPrecio">Precio</label>
      <input class="form-control form-control-sm" type="number" placeholder="Solo numeros" id="iptPrecio">

      <label class="col-form-label col-form-label-sm mt-4" for="iptPeso">Peso (gr)</label>
      <input class="form-control form-control-sm" type="number" placeholder="Solo numeros" id="iptPeso">

      <fieldset class="form-group">
      <legend class="mt-4">Gluten?</legend>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="optionsGluten" id="optionsRadiosSi" value="Si" checked="">
        <label class="form-check-label" for="optionsRadiosSi">
          Si
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="optionsGluten" id="optionsRadiosNo" value="No">
        <label class="form-check-label" for="optionsRadiosNo">
          No
        </label>
      </div>
      
    </fieldset>

    <fieldset class="form-group">
      <legend class="mt-4">Tipo coccion</legend>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="optionsCoccion" id="optionsRadiosHorno" value="H" checked="">
        <label class="form-check-label" for="optionsRadiosHorno">
          Horno/sarten
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="optionsCoccion" id="optionsRadiosMicro" value="M">
        <label class="form-check-label" for="optionsRadiosMicro">
          Microondas
        </label>
      </div>
      
    </fieldset>

        <div class="modal-footer">
            <button type="submit" class="btn btn-primary">Agregar</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        </div>

    </div>
    </fieldset>
    `;


    divNuevoPrincipal.append(divForm);



    formulario = document.getElementById("formulario");

    formulario.onsubmit = (event) => validarFormularioAltaMenu(event);
}

function validarFormularioAltaMenu(event) {
    event.preventDefault();


    let inputNombre = document.getElementById("iptNombre");
    let inputPrecio = document.getElementById("iptPrecio");
    let inputPeso = document.getElementById("iptPeso");
    let inputGluten = document.getElementsByName("optionsGluten");
    let opcionGluten;
    for (i = 0; i < inputGluten.length; i++) {
        if (inputGluten[i].checked)
            opcionGluten = inputGluten[i].value;
    }
    let gluten;
    opcionGluten == 'Si' ? gluten = true : gluten = false;
    
    
    let inputCoccion = document.getElementsByName("optionsCoccion");
    let opcionCoccion;
    for (i = 0; i < inputCoccion.length; i++) {
        if (inputCoccion[i].checked)
            opcionCoccion = inputCoccion[i].value;
    }
    let coccion;
    opcionCoccion == 'H' ? coccion = 1 : coccion = 2;


    //llamada al metodo fetch/post
    const menu = new Menu(inputNombre.value, inputPrecio.value, inputPeso.value, gluten,coccion);
    agregarMenuesServer(menu);
    
    

    limpiarDiv();

}


/************************************ Menu Principal *********************************************/

function capturarEventos() {
    btnLista.onclick = () => {
        listarMenues()
    }

    btnAlta.onclick = () => {
        altaPedido();
    }

    btnMod.onclick = () => {
        modificarPedido();
    }

    btnBaja.onclick = () => {
        bajaPedido();
    }

    btnCons.onclick = () => {
        consultarPedido();
    }

    btnAddMenu.onclick = () => {
        agregarMenu();
    }

    btnLimpiar.onclick = () => {
        limpiarStorage();
    }
}

function main() {

    inicializarElementos();
    capturarEventos();
    obtenerPedidosStorage();
    consultarMenuesServer();

}

main()