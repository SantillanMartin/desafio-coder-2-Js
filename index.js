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

//Con esta funcion el usuario registra la cantidad de productos que lleva,hasta que la variable decision ya no sea SI.

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
/*
function mostrarCarrito(lista){// Muestro en un simple contenedor la lista de productos que lleva el cliente.
    let contenedor=document.getElementById("main");
    let card=document.createElement("p");
    card.className="card"
    card.innerHTML=lista;
    contenedor.appendChild(card);
};
*/


function main(){
    let productos= registroProducto();
    let totalApagar=productos.reduce((costoTotal,elemento)=>costoTotal+elemento.calcularCosto(),0);// Uso metodo REDUCE para ir sumando el total de cada producto por la cantidad que lleva.
    let interes=porcentajeInteres();//Calculo el interes de existir y lo guardo en un array con un indice determinado para cada accion que quiero que el programa ejecute.
    let productosQueLleva=[];// Almaceno una lista con los productos elegidos.
    productos.forEach((producto)=>{
        
        productosQueLleva.push(`${producto.nombre}- cant: ${producto.cantidad}<br>`);
        
    });// Aqui almacene el nombre del producto que lleva + la cantidad, para luego mostrar por una variable mensaje-final.
     
    let interesesASumar=calcularIntereses(totalApagar,interes[0]);//Aqui el indice 0 indica el porcentaje de interes.
    let totalApagarConInteres=totalApagar+interesesASumar;
    let totalApagarEnCuotas=totalApagarConInteres/interes[1];//Aqui el indice 1 indica la cantidad de cuotas||El indice [2] es un mensaje que dira cuota o cuotas.
    
    
    // Aqui estoy enlazando el js con el html para luego imprimir todo en un parrafo.
    let contenedor=document.getElementById("main");
    let mensaje=document.createElement("p");
    mensaje.id="mensaje-final";
    mensaje.className="card";
    mensaje.innerHTML=`Usted compro:<br> ${productosQueLleva.join((''))}<br>Siendo el total a pagar la suma de: ${totalApagarConInteres}$ en ${interes[1]} ${interes[2]} de ${totalApagarEnCuotas.toFixed(2)}$ cada una.`;
    contenedor.appendChild(mensaje);
}
 let botonComenzar=document.getElementById("boton-comenzar");
 botonComenzar.onclick=()=>{
    main();
 }
