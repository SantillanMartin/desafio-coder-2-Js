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
        calcularCosto(){
        cantidad * precio;
        
    }
    },
    {nombre:"Manteca",precio:200,cantidad:0,calcularCosto(){
        cantidad*precio;
    }},
    {nombre:"Vino",precio:1200,cantidad:0,calcularCosto(){
        this.cantidad*this.precio;
    }},
    {nombre:"Heladera",precio:200000,cantidad:0,calcularCosto(){
        cantidad*precio;
    }}];



//Con esta funcion el usuario registra la cantidad de productos que lleva,hasta que la variable decision ya no sea SI.
/*
function registroProducto(){
    let productos=[];
    let decision="si"
    
    while(decision=="SI" || decision=="si"){
    
        let nombre=prompt("Ingrese el producto elegido: ");
        while(!isNaN(nombre)){
            nombre=prompt("ERROR,Ingrese solamente caracteres y no otro valor: ");
        }
        let cantidad=parseInt(prompt("Ingrese la cantidad que lleva del producto elegido: "));
        while(cantidad<=0 || isNaN(cantidad)){
            cantidad=prompt("Error,ingrese la cantidad que lleva del producto elegido,siendo valores numericos: ");
        }
        
        let precio=parseInt(prompt("Ingrese el precio que tiene:"));
        while(precio<=0 || isNaN(precio)){
            precio=prompt("Error,Ingrese un valor numerico: ");
        }
        
        
        nuevoProducto= new Producto(nombre,cantidad,precio);
        
        productos.push(nuevoProducto);
        decision=prompt("¿Desea seguir agregando productos? Indique SI para continuar o cualquier otra para terminar.")
        
        
    };
    
    return productos;
    
}
*/

function porcentajeInteres(){
    
    
    let cuotasSeleccionadas=parseInt(prompt("Ingrese la cantidad de cuotas que desea abonar: "));
    let porcentaje=[];
    
    
    while(cuotasSeleccionadas !=1 && cuotasSeleccionadas!=3 && cuotasSeleccionadas!=6 && cuotasSeleccionadas!=9 && cuotasSeleccionadas!=12){
        cuotasSeleccionadas=prompt("Por favor elija entre 1,3,6,9 o 12 cuotas.");
    }
    
    /*Forma de calcular en cuotas el total.
    Cuando el usuario selecciona las cuotas se suma a
    un array con dos indices el indice [0] va a ser rellenado con el monto de interes y el indice [1] con la cantidad de cuotas.
    Despues al acceder al array calculo el interes y cuotas en base al indice */
    if(cuotasSeleccionadas==3){
        porcentaje.push(15,3);
        
        
    }else if(cuotasSeleccionadas==6){
        porcentaje.push(20,6,"cuotas ");
        
    }else if(cuotasSeleccionadas==9){
        porcentaje.push(30,9,"cuotas ");
        
    }else if(cuotasSeleccionadas==12){
        porcentaje.push(40,12,"cuotas ");
    }else{
        porcentaje.push(0,1,"cuota ");
       
        
    }
    
    
    
    return porcentaje;
}
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

// Esta funcion va a ir llenando el acumulador para luego mostrar el total.
function sumarPrecioProducto(indice,id){
    sumaDeProductosPrecio=sumaDeProductosPrecio+(PRODUCTOS[indice].precio*parseInt(document.getElementById(id).value));
}


// variable global carrito donde ire guardando cada producto agregado por los botones agregar.
let carrito=[];

function llenarCarrito(productoNombre){
    
    let productoElegido=PRODUCTOS.find((producto)=>producto.nombre==productoNombre)
    carrito.push(productoElegido);
    
}
function mostrarCarrito(producto,id){
        let cantidad=document.createElement("div");
        cantidad.className="main__contenedor__appenchild";
        cantidad.innerHTML=`<p>Agrego al carrito: ${producto} -CANTIDAD: ${document.getElementById(id).value}`;
        let contenedor=document.getElementById("contenedor-mensaje");
        contenedor.append(cantidad);
        

}
function mostrarTotal(){
    document.getElementById("suma__total").value=sumaDeProductosPrecio;
}




let botonCafe=document.getElementById("agregar-cafe");
botonCafe.onclick=()=>{
    
    llenarCarrito("Cafe");
    sumarCantidadesProducto(0,"cantidad-cafe");
    sumarPrecioProducto(0,"cantidad-cafe");
    mostrarCarrito("CAFE","cantidad-cafe");
    mostrarTotal();
        
    
}


let botonManteca=document.getElementById("agregar-manteca");
    botonManteca.onclick=()=>{
        llenarCarrito("Manteca");
        sumarCantidadesProducto(1,"cantidad-manteca");
        sumarPrecioProducto(1,"cantidad-manteca");
        mostrarCarrito("MANTECA","cantidad-manteca");
        mostrarTotal();
    }    

let botonVino=document.getElementById("agregar-vino");
    botonVino.onclick=()=>{
        llenarCarrito("Vino");
        sumarCantidadesProducto(2,"cantidad-vino");
        sumarPrecioProducto(2,"cantidad-vino");
        mostrarCarrito("VINO","cantidad-vino");
        mostrarTotal();
    }



    let botonHeladera=document.getElementById("agregar-heladera");
botonHeladera.onclick=()=>{
    llenarCarrito("Heladera");
    sumarCantidadesProducto(3,"cantidad-heladera");
    sumarPrecioProducto(3,"cantidad-heladera");
    mostrarCarrito("HELADERA-SAMSUNG","cantidad-heladera");
    mostrarTotal();
    
}






function main(){
    //let productos= stockProductos();
    //let totalApagar=carrito.reduce((costoTotal,elemento)=>costoTotal+elemento.calcularCosto(),0);// Uso metodo REDUCE para ir sumando el total de cada producto por la cantidad que lleva.
    //let interes=porcentajeInteres();//Calculo el interes de existir y lo guardo en un array con un indice determinado para cada accion que quiero que el programa ejecute.
    let productosQueLleva=[];// Almaceno una lista con los productos elegidos.
    let contador=1;
    carrito.forEach((producto)=>{
        
        productosQueLleva.push(`${contador}-${producto.nombre} - cantidad: ${producto.cantidad}<br>`);
        contador++;
    });// Aqui almacene el nombre del producto que lleva + la cantidad, para luego mostrar por una variable mensaje-final.
    /*
    let interesesASumar=calcularIntereses(totalApagar,interes[0]);//Aqui el indice 0 indica el porcentaje de interes.
    let totalApagarConInteres=totalApagar+interesesASumar;
    let totalApagarEnCuotas=totalApagarConInteres/interes[1];//Aqui el indice 1 indica la cantidad de cuotas||El indice [2] es un mensaje que dira cuota o cuotas.
    */
    
    // Aqui estoy enlazando el js con el html para luego imprimir todo en un parrafo.
    let cantidadFinalProductos=PRODUCTOS.reduce((lista,producto)=>lista+producto.cantidad,0);
    let contenedor=document.getElementById("contenedor-mensaje");
    contenedor.innerHTML="";
    let mensaje=document.createElement("p");
    
    mensaje.id="mensaje-final";
    mensaje.className="card";
    mensaje.innerHTML=`Productos :<br> ${productosQueLleva.join(('')) }`;
    contenedor.appendChild(mensaje);
    return mensaje;
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

