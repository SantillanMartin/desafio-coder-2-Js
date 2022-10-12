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
        descripcion:"Cafe la Morenita Premiun",
        precio:350,
        cantidad:0,
        imagen:"./imagenes/cafe.webp",
        agregar:"agregar-cafe",
        indice:0,
        vaciar:"vaciar-Cafe",
        calcularCosto(){
        cantidad * precio;   
    }},
    
    {   nombre:"Manteca",
        descripcion:"Manteca La Paulina 200gr",
        precio:200,
        cantidad:0,
        imagen:"./imagenes/manteca.webp",
        agregar:"agregar-manteca",
        indice:1,
        vaciar:"vaciar-Manteca",
        calcularCosto(){
        cantidad*precio;
    }},
    {   nombre:"Vino",
        descripcion:"Vino Malbec Trapiche 750cc",
        precio:1200,
        cantidad:0,
        imagen:"./imagenes/vino.webp",
        agregar:"agregar-vino",
        indice:2,
        vaciar:"vaciar-Vino",
        calcularCosto(){
        cantidad*precio;
    }},
    {   nombre:"Heladera",
        descripcion:"Heladera Samsung Inverter Inox",
        precio:200000,
        cantidad:0,
        imagen:"./imagenes/heladera.webp",
        agregar:"agregar-heladera",
        indice:3,
        vaciar:"vaciar-Heladera",
        calcularCosto(){
        cantidad*precio;
    }}];





// Funcion que calcula el porcentaje de interes, usa dos parametros el monto que va sufrir el incremento y el porcentaje.
function calcularIntereses(monto,interes){
    return monto*interes/100;
    
    
}   
    PRODUCTOS.forEach((producto)=>{
        producto.cantidad+=Number(sessionStorage.getItem(producto.nombre));
    })
    



// Esta funcion suma cada producto elegido y los guarda en el valor cantidad de cada objeto. El parametro indice es el indice del objeto y el id es el id del input del objeto en el html.
function sumarCantidadesProducto(indice,nombreProducto){
    
    PRODUCTOS[indice].cantidad+=1;
    let sumaCantidadIndividual=PRODUCTOS[indice].cantidad;
    sessionStorage.setItem(nombreProducto,sumaCantidadIndividual);
}

// Variable global que uso como acumulador de precios de los productos.

    let sumaDeProductosPrecio=0;
    /* Como cada vez que se recarga la pag. la variable vuelve a 0, automaticamente le agrego la sessionstorage que contiene
    el monto anterior a recargar asi puedo seguir sumando productos aunque recargue el navegador. */
    sumaDeProductosPrecio+=Number(sessionStorage.getItem("total"));



// Esta funcion va a ir llenando el acumulador para luego mostrar el total.
function sumarPrecioProducto(indice){
    
    sumaDeProductosPrecio+=PRODUCTOS[indice].precio;
    let totalAAlmacenar=sumaDeProductosPrecio;
    sessionStorage.setItem("total",totalAAlmacenar);
    
    
}
function restarProducto(indice,nombreProducto){
        if(PRODUCTOS[indice].cantidad>0){
            PRODUCTOS[indice].cantidad-=1;
            sumaDeProductosPrecio=sumaDeProductosPrecio-PRODUCTOS[indice].precio;
            let totalAAlmacenar=sumaDeProductosPrecio;
            sessionStorage.setItem("total",totalAAlmacenar);
            let sumaCantidadIndividual=PRODUCTOS[indice].cantidad;
            sessionStorage.setItem(nombreProducto,sumaCantidadIndividual);
        }
        
    
    
}
    

// variable global carrito donde ire guardando cada producto agregado por los botones agregar.
let carrito=[];

function llenarCarrito(productoNombre){
    
    let productoElegido=PRODUCTOS.find((producto)=>producto.nombre==productoNombre)
    carrito.push(productoElegido);
    
}

function mostrarSubtotalEnCarrito(){
        let contenedorCarrito=document.getElementById("insertar__total");
        let mostrarTotalPrecio=document.createElement("h2");
        mostrarTotalPrecio.className="selector__carrito";
        contenedorCarrito.innerHTML="";
        mostrarTotalPrecio.innerHTML=`$${sumaDeProductosPrecio}`;
        contenedorCarrito.appendChild(mostrarTotalPrecio);
}

function mostrarCarrito(indice,idMensaje,nombreProducto,vaciar){
        
        let cantidad=document.createElement("div");
        cantidad.className="main__contenedor__appenchild selector__carrito";
        let contenedor=document.getElementById(idMensaje);
        contenedor.innerHTML="";
        cantidad.innerHTML=`<div class="contenedor-mensaje-carrito selector__carrito"><img class="imagen__producto__subtotal selector__carrito" src="${PRODUCTOS[indice].imagen}">
        <p class="selector__carrito">${PRODUCTOS[indice].descripcion}</p></div>
        <img src="./imagenes/papelera-de-reciclaje.png" alt="papelera" id=${vaciar} class="boton-papelera-carrito selector__carrito">`;
        contenedor.append(cantidad);
        
        let botonVaciar=document.getElementById(`${vaciar}`)
        botonVaciar.onclick=()=>{
            contenedor.innerHTML="";
            sumaDeProductosPrecio-=PRODUCTOS[indice].precio*PRODUCTOS[indice].cantidad;
            PRODUCTOS[indice].cantidad=0;
            let sumaCantidadIndividual=PRODUCTOS[indice].cantidad;
            sessionStorage.setItem(nombreProducto,sumaCantidadIndividual);
            let totalAAlmacenar=sumaDeProductosPrecio;
            sessionStorage.setItem("total",totalAAlmacenar);
            
            mostrarSubtotalEnCarrito();
            mostrarTotal();
            
        }
        // Operador ternario que si elimino todos los productos elegidos del carrito borra el nodo contenedor.
        PRODUCTOS[indice].cantidad<1 ? contenedor.innerHTML="" : contenedor;
        mostrarSubtotalEnCarrito()
        
}


// Funcion que va mostrando el subtotal antes de abrir el carrito.
function mostrarTotal(){
    
    document.getElementById("suma__total").value="$"+sessionStorage.getItem("total");
    
}

function mostrarSumaDeProductos(nombreProducto,id){
    document.getElementById(id).value=sessionStorage.getItem(nombreProducto);
}


// For each, que recorre el objeto PRODUCTOS y crea dos botones para agregar productos y eliminarlos del carrito.
PRODUCTOS.forEach((producto)=>{
    let botonAgregar=document.getElementById(`agregar-${producto.nombre}`);
    let botonEliminar=document.getElementById(`eliminar-${producto.nombre}`);
    botonAgregar.onclick=()=>{
        llenarCarrito(producto.nombre);
        sumarCantidadesProducto(producto.indice,producto.nombre);
        sumarPrecioProducto(producto.indice);
        mostrarSumaDeProductos(producto.nombre,`cantidad-${producto.nombre}`);
        mostrarCarrito(producto.indice,`contenedor-mensaje-${producto.nombre}`,producto.nombre,producto.vaciar);
        mostrarTotal();
        // Cada vez que se agrega un producto o elimina con toastify salta una alerta indicandolo.
        Toastify({
            text: `Agrego : ${producto.descripcion}`,
            duration: 2000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            className: "toastify-notificacion",
            style: {
                background: "black",
                color:"white",
                
              },
            onClick: function(){} // Callback after click
          }).showToast(); 
    }
    botonEliminar.onclick=()=>{
        if(producto.cantidad>0){
            Toastify({
                text: `Elimino: ${producto.descripcion}`,
                duration: 2000,
                newWindow: true,
                close: true,
                className: "toastify-notificacion",
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true,
                style: {
                    background: "red",
                    color:"white",
                    
                  }, // Prevents dismissing of toast on hover
                onClick: function(){} // Callback after click
              }).showToast(); 
        }
        restarProducto(producto.indice,producto.nombre);
        mostrarCarrito(producto.indice,`contenedor-mensaje-${producto.nombre}`,producto.nombre,producto.vaciar);
        mostrarSumaDeProductos(producto.nombre,`cantidad-${producto.nombre}`);
        mostrarTotal();
        
        
    }
})
// BOTON QUE MUESTRA EL REGISTRO DE USUARIO

let botonAbrirUsuario=document.getElementById("imagen-usuario");
botonAbrirUsuario.onclick=()=>{
    let contenedorUsuario=document.getElementById("menu-usuario");
    contenedorUsuario.style.left="0";
    contenedorUsuario.style.transition="1s";
}

let botonCerrarUsuario=document.getElementById("cerrar-usuario");
botonCerrarUsuario.onclick=()=>{
    let contenedorUsuario=document.getElementById("menu-usuario");
    contenedorUsuario.style.left="-200%";
    contenedorUsuario.style.transition="2s";
    
}
let botonCerrarPorFueraUsuario=document.getElementById("body");
botonCerrarPorFueraUsuario.addEventListener("click",cerrarUsuario);

function cerrarUsuario(e){
    e.preventDefault();
    if(e.target.classList[0]!="menu__usuario" && e.target.className!="header__usuario-img" && e.target.classList[0]!="selector__usuario"){
        let menuUsuario=document.getElementById("menu-usuario");
        menuUsuario.style.left="-200%";
        menuUsuario.style.transition="2s";
    }
    

    
}



// BOTON QUE MUESTRA EL CARRITO Y ESCONDE
let botonCerrarPorFuera=document.getElementById("body");
botonCerrarPorFuera.addEventListener("click",cerrarCarrito);

function cerrarCarrito(e){
    e.preventDefault();
    if(e.target.classList[1]!="selector__carrito" && e.target.className!="header__carrito-img" && e.target.classList[0]!="selector__carrito"){
        let carritoDiv=document.getElementById("carrito__mostrar");
        carritoDiv.style.right='-200%';
        carritoDiv.style.transition="2s";
    }

    
}



let botonComenzar=document.getElementById("boton-comenzar");

botonComenzar.onclick=()=>{
    let carritoDiv=document.querySelector(".menu__carrito");
    
    
        carritoDiv.style.right=0;
        carritoDiv.style.transition="0.7s";
        
    
    
     
  }
let botonOcultarCarrito=document.getElementById("ocultar__carrito");
botonOcultarCarrito.onclick=()=>{
        let carritoDiv=document.getElementById("carrito__mostrar");
        carritoDiv.style.right='-200%';
        carritoDiv.style.transition="1.5s";
}


// BOTON QUE FINALIZA LA COMPRA, Y REINICIA EL STORAGE.

function finalizarCompra(){
    let contenedorCuotas=document.getElementById("insertar__total__interes");
    let botonFinalizar=document.createElement("button");
    botonFinalizar.className="botones__finalizar-cuotas selector__carrito animate__animated";
    botonFinalizar.id="boton__finalizar"
    botonFinalizar.innerHTML="FINALIZAR COMPRA";
    contenedorCuotas.appendChild(botonFinalizar);
    botonFinalizar.onclick=()=>{
        Swal.fire('Gracias por su compra, se recargara la pagina.');
        function recargarPagina(){
            location.reload();
            sessionStorage.clear("total");
            
        }
        setTimeout(recargarPagina,2000);
        

    }

}




// BOTONES QUE SUMAN EL TOTAL MAS EL INTERES ELEGIDO, DE MOMENTO CREE LOS BOTONES REPITIENDO CODIGO, DEBO CORREGIRLO PARA NO REPETIR.

let botonCuotas1=document.getElementById("cuotas__1");
botonCuotas1.className="menu__cuotas__botones selector__carrito";
botonCuotas1.onclick=()=>{
    let contenedorCuotas=document.getElementById("insertar__total__interes");
    contenedorCuotas.innerHTML="";
    let totalEnCuotas=document.createElement("h2");
    totalEnCuotas.className="selector__carrito";
    let porcentajeASumar=calcularIntereses(sumaDeProductosPrecio,0);
    let totalConInteresSumado=sumaDeProductosPrecio+porcentajeASumar;
    totalEnCuotas.innerHTML=`Total con interes sumado de corresponder:<br>$${totalConInteresSumado} en 1 cuota de $${totalConInteresSumado}`;
    contenedorCuotas.appendChild(totalEnCuotas);
    finalizarCompra();
}

let botonCuotas3=document.getElementById("cuotas__3");
botonCuotas3.className="menu__cuotas__botones selector__carrito";
botonCuotas3.onclick=()=>{
    let contenedorCuotas=document.getElementById("insertar__total__interes");
    contenedorCuotas.innerHTML="";
    let totalEnCuotas=document.createElement("h2");
    totalEnCuotas.className="selector__carrito";
    let porcentajeASumar=calcularIntereses(sumaDeProductosPrecio,15);
    let totalConInteresSumado=sumaDeProductosPrecio+porcentajeASumar;
    totalEnCuotas.innerHTML=`Total con interes sumado de corresponder:<br>$${totalConInteresSumado} en 3 cuotas de $${(totalConInteresSumado/3).toFixed(2)}`;
    contenedorCuotas.appendChild(totalEnCuotas);
    finalizarCompra();
}

let botonCuotas6=document.getElementById("cuotas__6");
botonCuotas6.className="menu__cuotas__botones selector__carrito";
botonCuotas6.onclick=()=>{
    let contenedorCuotas=document.getElementById("insertar__total__interes");
    contenedorCuotas.innerHTML="";
    let totalEnCuotas=document.createElement("h2");
    totalEnCuotas.className="selector__carrito";
    let porcentajeASumar=calcularIntereses(sumaDeProductosPrecio,20);
    let totalConInteresSumado=sumaDeProductosPrecio+porcentajeASumar;
    totalEnCuotas.innerHTML=`Total con interes sumado de corresponder:<br>$${totalConInteresSumado} en 6 cuotas de $${(totalConInteresSumado/6).toFixed(2)}`;
    contenedorCuotas.appendChild(totalEnCuotas);
    finalizarCompra();
}

let botonCuotas9=document.getElementById("cuotas__9");
botonCuotas9.className="menu__cuotas__botones selector__carrito";
botonCuotas9.onclick=()=>{
    let contenedorCuotas=document.getElementById("insertar__total__interes");
    contenedorCuotas.innerHTML="";
    let totalEnCuotas=document.createElement("h2");
    totalEnCuotas.className="selector__carrito";
    let porcentajeASumar=calcularIntereses(sumaDeProductosPrecio,30);
    let totalConInteresSumado=sumaDeProductosPrecio+porcentajeASumar;
    totalEnCuotas.innerHTML=`Total con interes sumado de corresponder:<br>$${totalConInteresSumado} en 9 cuotas de $${(totalConInteresSumado/9).toFixed(2)}`;
    contenedorCuotas.appendChild(totalEnCuotas);
    finalizarCompra();
}

let botonCuotas12=document.getElementById("cuotas__12");
botonCuotas12.className="menu__cuotas__botones selector__carrito";
botonCuotas12.onclick=()=>{
    let contenedorCuotas=document.getElementById("insertar__total__interes");
    contenedorCuotas.innerHTML="";
    let totalEnCuotas=document.createElement("h2");
    totalEnCuotas.className="selector__carrito";
    let porcentajeASumar=calcularIntereses(sumaDeProductosPrecio,40);
    let totalConInteresSumado=sumaDeProductosPrecio+porcentajeASumar;
    totalEnCuotas.innerHTML=`Total con interes sumado de corresponder:<br>$${totalConInteresSumado} en 12 cuotas de $${(totalConInteresSumado/12).toFixed(2)}`;
    contenedorCuotas.appendChild(totalEnCuotas);
    finalizarCompra();
}

// USO DE FETCH- CON JSON LOCAL OBTENGO DOS USUARIOS PARA SIMULAR UN INICIO DE SESION.
let usuarios=[];

function traerUsuario(){
    //let usuario1=usuarios[0].name;
    document.getElementById("usuario-nombre").value=usuarios[0].name;
    document.getElementById("usuario-contraseña").value=usuarios[0].password;
}

let botonIngresar=document.getElementById("boton-ingresar");
botonIngresar.onclick=()=>{
    let usuarioNombre=document.getElementById("usuario-nombre");
    let usuarioContraseña=document.getElementById("usuario-contraseña");
    let contenedorUsuario=document.getElementById("contenedor-usuario");
    let contenedorError=document.getElementById("contenedor-error");
    if(usuarioNombre.value==usuarios[0].name && usuarioContraseña.value==usuarios[0].password){
        contenedorUsuario.innerHTML="";
        contenedorError.innerHTML="";
        let inicioExitoso=document.createElement("p");
        inicioExitoso.className="selector__usuario";
        inicioExitoso.innerHTML="Usted ingreso satisfactoriamente";
        contenedorUsuario.append(inicioExitoso);
    }else{
        contenedorError.innerHTML="";
        let mensaje=document.createElement("p");
        mensaje.className="selector__usuario mensaje__error";
        mensaje.innerHTML="Error, ha ingresado un usuario o contraseña incorrecta.";
        contenedorError.append(mensaje);
    }
}

// USO DE FETCH
async function consultarProductosServer() {
    
    try {
      const response = await fetch(
        "./usuario.json"
      );
      const data = await response.json();
      usuarios = [...data];
      traerUsuario();
      
    } catch (error) {
      console.log(error);
    }
  }

  consultarProductosServer();

