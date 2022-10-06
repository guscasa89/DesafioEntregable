function mostrarMensajeConfirmacion(mensaje) {
    Toastify({
        text: mensaje,
        duration: 3000,
        close: true,
        style: {
            background: "linear-gradient(to left, rgb(2, 0, 36) 0%, rgb(92, 29, 29) 43%, rgb(242, 154, 46) 100%)",
          },
        gravity: "top", // `top` or `bottom`
        position: "right" // `left`, `center` or `right`
    }).showToast();
}


function msjBajaConfirmacion(nroPedido) {
    Swal.fire({
        title: 'Confirmar Eliminacion',
        text: `Seguro que desea eliminar el pedido ${nroPedido}?`,
        icon: 'question',
        showCancelButton: true,
        color: '#f29a2e',
        background: 'rgba(0, 0, 0, 0.514)',
        confirmButtonColor: 'rgb(92, 29, 29)',
        cancelButtonColor: 'rgb(242, 154, 46)',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {

        if(result.isConfirmed){
            eliminarPedido(nroPedido);

            actualizarPedidosStorage();
    
            limpiarDiv();
    
            mostrarMensajeConfirmacion("Pedido eliminado!")
        }
        

    })
}

function msjAltaPedido(pedido){
    Swal.fire({
        html:
          `<div class="card text-white bg-primary mb-3" style="max-width: 20rem;"><div class="card-header">Pedido realizado con éxito!</div>` +
          `<div class="card-body"><h4 class="card-title">Nro: ${pedido.id}</h4><p class="card-text">${pedido.imprimirPedido()}.</p>` +
          `</div></div>`,
        color: '#f29a2e',
        background: 'rgba(0, 0, 0, 0.514)',
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonColor: 'rgb(92, 29, 29)',
        confirmButtonText:
          'Aceptar'
      })
}

function msjConsultaPedido(pedido){
    Swal.fire({
        html:
        `<div class="card text-white bg-danger mb-3" style="width: 20rem; margin: 10px;"><div class="card-header">${pedido.id}</div><div class="card-body"><h4 class="card-title">Pedido del cliente ${pedido.cliente}</h4><p class="card-text">${pedido.imprimirPedido()}</p></div></div>`,
        color: '#f29a2e',
        background: 'rgba(0, 0, 0, 0.514)',
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonColor: 'rgb(92, 29, 29)',
        confirmButtonText:
          'Aceptar'
      })
}