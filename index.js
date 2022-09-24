/*
Carrito de compras de un supermercado. Al final te pide pagar en cuotas o en un pago.

GITHUB: https://github.com/SantillanMartin

 */

class Producto{
     constructor(nombre,cantidad,precio){
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.precio=precio;
     }
     
     
     calcularCosto = () => this.cantidad * this.precio;
    
}

    const PRODUCTOS=[
    {
        nombre:"Cafe",
        precio:350,
        cantidad:0,
        imagen:"./imagenes/cafe.webp",
        calcularCosto(){
        cantidad * precio;
        
    }
    },
    {nombre:"Manteca",precio:200,cantidad:0,imagen:"./imagenes/manteca.webp",calcularCosto(){
        cantidad*precio;
    }},
    {nombre:"Vino",precio:1200,cantidad:0,imagen:"./imagenes/vino.webp",calcularCosto(){
        this.cantidad*this.precio;
    }},
    {nombre:"Heladera",precio:200000,cantidad:0,imagen:"./imagenes/heladera.webp",calcularCosto(){
        cantidad*precio;
    }}];





// Funcion que calcula el porcentaje de interes, usa dos parametros el monto que va sufrir el incremento y el porcentaje.
function calcularIntereses(monto,interes){
    return monto*interes/100;
    
    
}

// Esta funcion suma cada producto elegido y los guarda en el valor cantidad de cada objeto. El parametro indice es el indice del objeto y el id es el id del input del objeto en el html.
function sumarCantidadesProducto(indice,id){
    PRODUCTOS[indice].cantidad=PRODUCTOS[indice].cantidad+parseInt(document.getElementById(id).value);
    
}

// Variable global que uso como acumulador de precios de los productos.

    let sumaDeProductosPrecio=0;
    /* Como cada vez que se recarga la pag. la variable vuelve a 0, automaticamente le agrego la sessionstorage que contiene
    el monto anterior a recargar asi puedo seguir sumando productos aunque recargue el navegador. */
    sumaDeProductosPrecio=sumaDeProductosPrecio+Number(sessionStorage.getItem("total"));



// Esta funcion va a ir llenando el acumulador para luego mostrar el total.
function sumarPrecioProducto(indice,id){
    
    sumaDeProductosPrecio=sumaDeProductosPrecio+(PRODUCTOS[indice].precio*parseInt(document.getElementById(id).value));
    let totalAAlmacenar=sumaDeProductosPrecio;
    sessionStorage.setItem("total",totalAAlmacenar);
    
    
}
function restarProducto(indice){
    PRODUCTOS[indice].cantidad=PRODUCTOS[indice].cantidad-1;
    sumaDeProductosPrecio=sumaDeProductosPrecio-PRODUCTOS[indice].precio;
    let totalAAlmacenar=sumaDeProductosPrecio;
    sessionStorage.setItem("total",totalAAlmacenar);
}
    

// variable global carrito donde ire guardando cada producto agregado por los botones agregar.
let carrito=[];

function llenarCarrito(productoNombre){
    
    let productoElegido=PRODUCTOS.find((producto)=>producto.nombre==productoNombre)
    carrito.push(productoElegido);
    
}
function mostrarCarrito(producto,indice,idMensaje){

        let cantidad=document.createElement("div");
        cantidad.className="main__contenedor__appenchild";
        let contenedor=document.getElementById(idMensaje);
        contenedor.innerHTML="";
        cantidad.innerHTML=`<p>Agrego al carrito: ${producto} -CANTIDAD: ${PRODUCTOS[indice].cantidad}</p><img class="imagen__producto__subtotal" src="${PRODUCTOS[indice].imagen}">`;
        contenedor.append(cantidad);       
}
// Funcion que va mostrando el subtotal antes de abrir el carrito.
function mostrarTotal(){
    document.getElementById("suma__total").value=sessionStorage.getItem("total");
    
}





// Botones que toman id de inputs, para agregar al carrito los productos,sumar cantidades y sumar el subtotal. E imprimir por DOM el producto elegido.
let botonCafe=document.getElementById("agregar-cafe");
botonCafe.onclick=()=>{

        llenarCarrito("Cafe");
        sumarCantidadesProducto(0,"cantidad-cafe");
        sumarPrecioProducto(0,"cantidad-cafe");
        mostrarCarrito("CAFE",0,"contenedor-mensaje-cafe");
        mostrarTotal();    
    }

let botonRestaCafe=document.getElementById("eliminar-cafe");
botonRestaCafe.onclick=()=>{
    restarProducto(0);
    mostrarCarrito("CAFE",0,"contenedor-mensaje-cafe");
    mostrarTotal();
}


let botonManteca=document.getElementById("agregar-manteca");
    botonManteca.onclick=()=>{
        llenarCarrito("Manteca");
        sumarCantidadesProducto(1,"cantidad-manteca");
        sumarPrecioProducto(1,"cantidad-manteca");
        mostrarCarrito("MANTECA",1,"contenedor-mensaje-manteca");
        mostrarTotal();
    }    
let botonRestaManteca=document.getElementById("eliminar-manteca");
botonRestaManteca.onclick=()=>{
        restarProducto(1);
        mostrarCarrito("MANTECA",1,"contenedor-mensaje-manteca");
        mostrarTotal();
}
    

let botonVino=document.getElementById("agregar-vino");
    botonVino.onclick=()=>{
        llenarCarrito("Vino");
        sumarCantidadesProducto(2,"cantidad-vino");
        sumarPrecioProducto(2,"cantidad-vino");
        mostrarCarrito("VINO",2,"contenedor-mensaje-vino");
        mostrarTotal();
    }

let botonRestaVino=document.getElementById("eliminar-vino");
botonRestaVino.onclick=()=>{
        restarProducto(2);
        mostrarCarrito("CAFE",0,"contenedor-mensaje-vino");
        mostrarTotal();
    }



    let botonHeladera=document.getElementById("agregar-heladera");
botonHeladera.onclick=()=>{
    llenarCarrito("Heladera");
    sumarCantidadesProducto(3,"cantidad-heladera");
    sumarPrecioProducto(3,"cantidad-heladera");
    mostrarCarrito("HELADERA",3,"contenedor-mensaje-heladera");
    mostrarTotal();
    
}

let botonRestaHeladera=document.getElementById("eliminar-heladera");
botonRestaHeladera.onclick=()=>{
        restarProducto(3);
        mostrarCarrito("HELADERA",3,"contenedor-mensaje-heladera");
        mostrarTotal();
    }











let botonComenzar=document.getElementById("boton-comenzar");
 botonComenzar.onclick=()=>{
    
    
    

    let carritoDiv=document.getElementById("carrito__mostrar");
    carritoDiv.style.top=0;
    
    let contenedorCarrito=document.getElementById("insertar__total");
    let mostrarTotalPrecio=document.createElement("h2");
    contenedorCarrito.innerHTML="";
    mostrarTotalPrecio.innerHTML=`$${sumaDeProductosPrecio}`;
    contenedorCarrito.appendChild(mostrarTotalPrecio);
    
    
  }
let botonSeguir=document.getElementById("seguir");
botonSeguir.onclick=()=>{
    let carritoDiv=document.getElementById("carrito__mostrar");
    carritoDiv.style.top='-200%';
    
    
}

function finalizarCompra(){
    let contenedorCuotas=document.getElementById("insertar__total__interes");
    let botonFinalizar=document.createElement("button");
    botonFinalizar.className="botones__finalizar-cuotas"
    botonFinalizar.id="boton__finalizar"
    botonFinalizar.innerHTML="FINALIZAR COMPRA";
    contenedorCuotas.appendChild(botonFinalizar);
    botonFinalizar.onclick=()=>{
        Swal.fire('Gracias por su compra, se recargara la pagina.');
        function recargarPagina(){
            location.reload();
            sessionStorage.clear("total");
        }
        setTimeout(recargarPagina, 4000);
        

    }

}



// BOTONES QUE SUMAN EL TOTAL MAS EL INTERES ELEGIDO, DE MOMENTO CREE LOS BOTONES REPITIENDO CODIGO, DEBO CORREGIRLO PARA NO REPETIR.

let botonCuotas1=document.getElementById("cuotas__1");
botonCuotas1.className="botones__finalizar-cuotas";
botonCuotas1.onclick=()=>{
    let contenedorCuotas=document.getElementById("insertar__total__interes");
    contenedorCuotas.innerHTML="";
    let totalEnCuotas=document.createElement("h2");
    let porcentajeASumar=calcularIntereses(sumaDeProductosPrecio,0);
    let totalConInteresSumado=sumaDeProductosPrecio+porcentajeASumar;
    totalEnCuotas.innerHTML=`Total con interes sumado de corresponder:<br>$${totalConInteresSumado} en 1 cuota de $${totalConInteresSumado}`;
    contenedorCuotas.appendChild(totalEnCuotas);
    finalizarCompra();
}

let botonCuotas3=document.getElementById("cuotas__3");
botonCuotas3.className="botones__finalizar-cuotas";
botonCuotas3.onclick=()=>{
    let contenedorCuotas=document.getElementById("insertar__total__interes");
    contenedorCuotas.innerHTML="";
    let totalEnCuotas=document.createElement("h2");
    let porcentajeASumar=calcularIntereses(sumaDeProductosPrecio,15);
    let totalConInteresSumado=sumaDeProductosPrecio+porcentajeASumar;
    totalEnCuotas.innerHTML=`Total con interes sumado de corresponder:<br>$${totalConInteresSumado} en 3 cuotas de $${(totalConInteresSumado/3).toFixed(2)}`;
    contenedorCuotas.appendChild(totalEnCuotas);
    finalizarCompra();
}

let botonCuotas6=document.getElementById("cuotas__6");
botonCuotas6.className="botones__finalizar-cuotas";
botonCuotas6.onclick=()=>{
    let contenedorCuotas=document.getElementById("insertar__total__interes");
    contenedorCuotas.innerHTML="";
    let totalEnCuotas=document.createElement("h2");
    let porcentajeASumar=calcularIntereses(sumaDeProductosPrecio,20);
    let totalConInteresSumado=sumaDeProductosPrecio+porcentajeASumar;
    totalEnCuotas.innerHTML=`Total con interes sumado de corresponder:<br>$${totalConInteresSumado} en 6 cuotas de $${(totalConInteresSumado/6).toFixed(2)}`;
    contenedorCuotas.appendChild(totalEnCuotas);
    finalizarCompra();
}

let botonCuotas9=document.getElementById("cuotas__9");
botonCuotas9.className="botones__finalizar-cuotas";
botonCuotas9.onclick=()=>{
    let contenedorCuotas=document.getElementById("insertar__total__interes");
    contenedorCuotas.innerHTML="";
    let totalEnCuotas=document.createElement("h2");
    let porcentajeASumar=calcularIntereses(sumaDeProductosPrecio,30);
    let totalConInteresSumado=sumaDeProductosPrecio+porcentajeASumar;
    totalEnCuotas.innerHTML=`Total con interes sumado de corresponder:<br>$${totalConInteresSumado} en 9 cuotas de $${(totalConInteresSumado/9).toFixed(2)}`;
    contenedorCuotas.appendChild(totalEnCuotas);
    finalizarCompra();
}

let botonCuotas12=document.getElementById("cuotas__12");
botonCuotas12.className="botones__finalizar-cuotas";
botonCuotas12.onclick=()=>{
    let contenedorCuotas=document.getElementById("insertar__total__interes");
    contenedorCuotas.innerHTML="";
    let totalEnCuotas=document.createElement("h2");
    let porcentajeASumar=calcularIntereses(sumaDeProductosPrecio,40);
    let totalConInteresSumado=sumaDeProductosPrecio+porcentajeASumar;
    totalEnCuotas.innerHTML=`Total con interes sumado de corresponder:<br>$${totalConInteresSumado} en 12 cuotas de $${(totalConInteresSumado/12).toFixed(2)}`;
    contenedorCuotas.appendChild(totalEnCuotas);
    finalizarCompra();
}

// FALTA VALIDAR INPUTS Y ESCRIBIR CODIGO MAS LIMPIO.