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

  


    // USUARIOS GENERICOS PARA COMPRAR E INICIAR SESION
    let usuarios=[{
    
        name: "usuario1",
        username: "user1",
        password:"admin1"
    },
    {
        
        name: "usuario2",
        username: "user2",
        password:"admin2",
    }]

    

    function pintarUsuario(ingreso){
                    //nodoRegistrarse().style.display="none";
                    let bienvenida=document.getElementById("bienvenida");
                    bienvenida.innerHTML="Sesion Iniciada";
                    let inputNombre=document.getElementById("usuario-nombre");
                    inputNombre.style.display="none";
                    let inputContraseña=document.getElementById("usuario-contraseña");
                    inputContraseña.style.display="none";
                    //let contenedorError=document.getElementById("contenedor-error");
                    let ingresoH3=document.getElementById("menu-usuario-h3");
                    ingresoH3.innerHTML="";
                    //contenedorError.innerHTML="";
                    let contenedorMostrarUsuario=document.getElementById("mostrar-usuario-nombre");
                    contenedorMostrarUsuario.innerHTML="";
                    let mostrarUsuarioNombre=document.createElement("p");
                    mostrarUsuarioNombre.id="ingreso-nombre";
                    mostrarUsuarioNombre.innerHTML=`¡Hola ${ingreso}!`;
                    contenedorMostrarUsuario.append(mostrarUsuarioNombre);
                    sessionStorage.setItem("usuario-nombre",ingreso);
                    
                    
                    
    }
    
    function bordesInputs(){
        let menuInputContenedor=document.getElementById("contenedor-usuario");
        return menuInputContenedor;
        
    }
    
    function cerrarSesion(){
        let botonCerrarSesion=document.createElement("button");
        botonCerrarSesion.innerHTML="Cerrar sesion";
        botonCerrarSesion.className="selector__usuario menu__usuario__submit";
        let contenedorBotonCerrarSesion=document.getElementById("formulario-usuario");
        contenedorBotonCerrarSesion.append(botonCerrarSesion);
        
            
        botonCerrarSesion.onclick=()=>{
            
            
            let mensajeSecundario=document.getElementById("menu-usuario-h3")
            mensajeSecundario.innerHTML="Ingresa para comprar";
            
            let bienvenida=document.getElementById("bienvenida");
            bienvenida.innerHTML="Te damos la bienvenida :)";
            let inputNombre=document.getElementById("usuario-nombre");
            inputNombre.style.display="block";
            let inputContraseña=document.getElementById("usuario-contraseña");
            inputContraseña.style.display="block";
            botonCerrarSesion.style.display="none";
            botonIngresar().style.display="block";
            let mostrarUsuarioNombre=document.getElementById("ingreso-nombre")
            mostrarUsuarioNombre.innerHTML="";
            bordesInputs().style.border="solid 1px";
            
            sessionStorage.clear();
            setTimeout(recargarPagina,200);
    
            
        }
    }
    
    function botonIngresar(){
        let botonIngresar=document.getElementById("boton-ingresar");
        return botonIngresar;
    }
    
    function inputContenedor(){
        let menuInputContenedor=document.getElementById("contenedor-usuario");
        return menuInputContenedor;
    }
    
    function registro(){
        
        botonIngresar().onclick=()=>{
            
            let usuarioIngresado=document.getElementById("usuario-nombre").value;
            let contraseñaIngresada=document.getElementById("usuario-contraseña").value;
            
            
            
            usuarios.forEach((usuario)=>{
                if(usuario.name==usuarioIngresado && usuario.password==contraseñaIngresada){
                    let errorIngreso=document.getElementById("error-ingreso")
                    
                    pintarUsuario(usuario.name);
                    cerrarSesion();
                    botonIngresar().style.display="none";
                    setTimeout(recargarPagina,300);
                    //contenedorError.innerHTML="";
                    errorIngreso.style.display="none";
                    
                    
                    
                    
                    
                }else{
                    
                    inputContenedor().style.border="red solid 0.5px";
                    inputContenedor().style.animation="error 2s ";
                    let errorIngreso=document.getElementById("error-ingreso")
                    errorIngreso.innerHTML="";
                    errorIngreso.innerHTML="Ingreso una contraseña o usuario incorrecto";
                    
                }
                
            })
            
        }
        
    }
    let usuarioIngreso=false;
    function obtenerUsuario(){
        let usuarioAlmacenado=sessionStorage.getItem("usuario-nombre");
        if(usuarioAlmacenado){
            usuarioIngreso=true;
            pintarUsuario(usuarioAlmacenado);
            cerrarSesion();
            botonIngresar().style.display="none";
            bordesInputs().style.border="none";
            /*PRODUCTOS.forEach((producto)=>{
                mostrarCarrito();
            })*/
            
        }
    }
    
    obtenerUsuario();
    





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
    mostrarTotalPrecio.className="0 selector__carrito";
    contenedorCarrito.innerHTML="";
    mostrarTotalPrecio.innerHTML=`$${sumaDeProductosPrecio} == $USD${(sumaDeProductosPrecio/peso).toFixed(2)}`;
    contenedorCarrito.appendChild(mostrarTotalPrecio);
    
}

function obtenerSubtotal(){
    let subtotalAlmacenado=sessionStorage.getItem("total")
    if(subtotalAlmacenado){
        mostrarSubtotalEnCarrito();
    }
}



function mostrarCarrito(indice,idMensaje,nombreProducto,vaciar){
        
        let cantidad=document.createElement("div");
        cantidad.className="main__contenedor__appenchild selector__carrito";
        let contenedor=document.getElementById(idMensaje);
        contenedor.innerHTML="";
        cantidad.innerHTML=`<div class="contenedor-mensaje-carrito selector__carrito"><img class="imagen__producto__subtotal selector__carrito" src="${PRODUCTOS[indice].imagen}">
        <p class="0 selector__carrito">${PRODUCTOS[indice].descripcion}</p></div>
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
            let contenedorTotalCuotas=document.getElementById("insertar__total__interes");
            contenedorTotalCuotas.innerHTML="";
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
                
                if(usuarioIngreso){
                
                let contenedorCuotas=document.getElementById("insertar__total__interes");
                contenedorCuotas.innerHTML="";
                llenarCarrito(producto.nombre);
                sumarCantidadesProducto(producto.indice,producto.nombre);
                sumarPrecioProducto(producto.indice);
                mostrarSumaDeProductos(producto.nombre,`cantidad-${producto.nombre}`);
                mostrarCarrito(producto.indice,`contenedor-mensaje-${producto.nombre}`,producto.nombre,producto.vaciar);
                sessionStorage.setItem(`mostrar-${producto.nombre}`,producto.nombre);
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
            
            }else{
                Swal.fire('Debe iniciar sesion para comprar')
            }
                
            
        }
        
            botonEliminar.onclick=()=>{
                if(usuarioIngreso){
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
                        let contenedorCuotas=document.getElementById("insertar__total__interes");
                        contenedorCuotas.innerHTML="";
                    }
                    restarProducto(producto.indice,producto.nombre);
                    mostrarCarrito(producto.indice,`contenedor-mensaje-${producto.nombre}`,producto.nombre,producto.vaciar);
                    mostrarSumaDeProductos(producto.nombre,`cantidad-${producto.nombre}`);
                    mostrarTotal();
                }else{
                    Swal.fire('Debe iniciar sesion para comprar')
                }
                
                
                
            }
        
        
        
        
    })


// BOTON QUE MUESTRA EL REGISTRO DE USUARIO
function headerFondo(){
    let header=document.getElementById("header");
    return header;
}
function mainFondo(){
    let main=document.getElementById("main");
    return main;
}
function cambiarFondoColor(){
    headerFondo().style.background="black";
    headerFondo().style.opacity="0.8";
    mainFondo().style.background="black";
    mainFondo().style.opacity="0.8";
}

function volverFondoColor(){
    headerFondo().style.background="white";
    headerFondo().style.opacity="1";
    mainFondo().style.background="wheat";
    mainFondo().style.opacity="1";
}

let botonAbrirUsuario=document.getElementById("imagen-usuario");
botonAbrirUsuario.onclick=()=>{
    let contenedorUsuario=document.getElementById("menu-usuario");

    contenedorUsuario.style.left="0";
    contenedorUsuario.style.transition="1s";
    cambiarFondoColor();
    
    
}

let botonCerrarUsuario=document.getElementById("cerrar-usuario");
botonCerrarUsuario.onclick=()=>{
    let contenedorUsuario=document.getElementById("menu-usuario");
    contenedorUsuario.style.left="-200%";
    contenedorUsuario.style.transition="2s";
    volverFondoColor();
    
}
let botonCerrarPorFueraUsuario=document.getElementById("body");
botonCerrarPorFueraUsuario.addEventListener("click",cerrarUsuario);






function cerrarUsuario(e){
    e.preventDefault();
    if(e.target.classList[0]!="menu__usuario" && e.target.className!="header__usuario-img" && e.target.classList[0]!="selector__usuario" && e.target.classList[1]!="selector__carrito" && e.target.className!="header__carrito-img" && e.target.classList[0]!="selector__carrito" ){
        let menuUsuario=document.getElementById("menu-usuario");
        menuUsuario.style.left="-200%";
        menuUsuario.style.transition="2s";
        volverFondoColor();
    }
    

    
}



// BOTON QUE MUESTRA EL CARRITO Y ESCONDE
let botonCerrarPorFuera=document.getElementById("body");
botonCerrarPorFuera.addEventListener("click",cerrarCarrito);

function cerrarCarrito(e){
    e.preventDefault();
    if(e.target.classList[1]!="selector__carrito" && e.target.classList[0]!="menu__usuario" && e.target.className!="header__usuario-img" && e.target.classList[0]!="selector__usuario"){
        let carritoDiv=document.getElementById("carrito__mostrar");
        carritoDiv.style.right='-200%';
        carritoDiv.style.transition="2s";
        volverFondoColor();
    }
    
    
}



let botonComenzar=document.getElementById("boton-comenzar");

botonComenzar.onclick=()=>{
    let carritoDiv=document.querySelector(".menu__carrito");
    carritoDiv.style.right=0;
    carritoDiv.style.transition="0.7s";
    cambiarFondoColor();
        
    
    
     
  }
let botonOcultarCarrito=document.getElementById("ocultar__carrito");
botonOcultarCarrito.onclick=()=>{
        let carritoDiv=document.getElementById("carrito__mostrar");
        carritoDiv.style.right='-200%';
        carritoDiv.style.transition="1.5s";
        
        
}


// BOTON QUE FINALIZA LA COMPRA, Y REINICIA EL STORAGE.
function recargarPagina(){
    location.reload();
    
    
}

function finalizarCompra(){
    let contenedorCuotas=document.getElementById("insertar__total__interes");
    let botonFinalizar=document.createElement("button");
    botonFinalizar.className="selector__carrito botones__finalizar-cuotas  animate__animated";
    botonFinalizar.id="boton__finalizar"
    botonFinalizar.innerHTML="FINALIZAR COMPRA";
    contenedorCuotas.appendChild(botonFinalizar);
    botonFinalizar.onclick=()=>{
        Swal.fire('Gracias por su compra, se recargara la pagina.');
        sessionStorage.clear("total");
        setTimeout(recargarPagina,2000);
        

    }

}




// BOTONES QUE SUMAN EL TOTAL MAS EL INTERES ELEGIDO


let botonCuotas1=document.getElementById("cuotas__1");
botonCuotas1.className="menu__cuotas__botones selector__carrito";
botonCuotas1.onclick=()=>{
    if(sumaDeProductosPrecio>0){
        let contenedorCuotas=document.getElementById("insertar__total__interes");
        contenedorCuotas.innerHTML="";
        let totalEnCuotas=document.createElement("h2");
        totalEnCuotas.className="0 selector__carrito";
        let porcentajeASumar=calcularIntereses(sumaDeProductosPrecio,0);
        let totalConInteresSumado=sumaDeProductosPrecio+porcentajeASumar;
        totalEnCuotas.innerHTML=`Total con interes sumado de corresponder:<br>$${totalConInteresSumado} en 1 cuota de $${totalConInteresSumado}`;
        contenedorCuotas.appendChild(totalEnCuotas);
        finalizarCompra();
    }
    
}

let botonCuotas3=document.getElementById("cuotas__3");
botonCuotas3.className="menu__cuotas__botones selector__carrito";
botonCuotas3.onclick=()=>{
    if(sumaDeProductosPrecio>0){
        let contenedorCuotas=document.getElementById("insertar__total__interes");
        contenedorCuotas.innerHTML="";
        let totalEnCuotas=document.createElement("h2");
        totalEnCuotas.className="0 selector__carrito";
        let porcentajeASumar=calcularIntereses(sumaDeProductosPrecio,15);
        let totalConInteresSumado=sumaDeProductosPrecio+porcentajeASumar;
        totalEnCuotas.innerHTML=`Total con interes sumado de corresponder:<br>$${totalConInteresSumado} en 3 cuotas de $${(totalConInteresSumado/3).toFixed(2)}`;
        contenedorCuotas.appendChild(totalEnCuotas);
        finalizarCompra();
    }
    
}

let botonCuotas6=document.getElementById("cuotas__6");
botonCuotas6.className="menu__cuotas__botones selector__carrito";
botonCuotas6.onclick=()=>{
    if(sumaDeProductosPrecio>0){
        let contenedorCuotas=document.getElementById("insertar__total__interes");
        contenedorCuotas.innerHTML="";
        let totalEnCuotas=document.createElement("h2");
        totalEnCuotas.className="0 selector__carrito";
        let porcentajeASumar=calcularIntereses(sumaDeProductosPrecio,20);
        let totalConInteresSumado=sumaDeProductosPrecio+porcentajeASumar;
        totalEnCuotas.innerHTML=`Total con interes sumado de corresponder:<br>$${totalConInteresSumado} en 6 cuotas de $${(totalConInteresSumado/6).toFixed(2)}`;
        contenedorCuotas.appendChild(totalEnCuotas);
        finalizarCompra();
    }
}

let botonCuotas9=document.getElementById("cuotas__9");
botonCuotas9.className="menu__cuotas__botones selector__carrito";
botonCuotas9.onclick=()=>{
    if(sumaDeProductosPrecio>0){
        let contenedorCuotas=document.getElementById("insertar__total__interes");
        contenedorCuotas.innerHTML="";
        let totalEnCuotas=document.createElement("h2");
        totalEnCuotas.className="0 selector__carrito";
        let porcentajeASumar=calcularIntereses(sumaDeProductosPrecio,30);
        let totalConInteresSumado=sumaDeProductosPrecio+porcentajeASumar;
        totalEnCuotas.innerHTML=`Total con interes sumado de corresponder:<br>$${totalConInteresSumado} en 9 cuotas de $${(totalConInteresSumado/9).toFixed(2)}`;
        contenedorCuotas.appendChild(totalEnCuotas);
        finalizarCompra();
    }
}

let botonCuotas12=document.getElementById("cuotas__12");
botonCuotas12.className="menu__cuotas__botones selector__carrito";
botonCuotas12.onclick=()=>{
    if(sumaDeProductosPrecio>0){
        let contenedorCuotas=document.getElementById("insertar__total__interes");
        contenedorCuotas.innerHTML="";
        let totalEnCuotas=document.createElement("h2");
        totalEnCuotas.className="0 selector__carrito";
        let porcentajeASumar=calcularIntereses(sumaDeProductosPrecio,40);
        let totalConInteresSumado=sumaDeProductosPrecio+porcentajeASumar;
        totalEnCuotas.innerHTML=`Total con interes sumado de corresponder:<br>$${totalConInteresSumado} en 9 cuotas de $${(totalConInteresSumado/9).toFixed(2)}`;
        contenedorCuotas.appendChild(totalEnCuotas);
        finalizarCompra();
    }
}


// USO DE SESSION STORAGE PARA MOSTRAR EL CARRITO AUNQUE SE ACTUALICE LA PAGINA.


function obtenerCarrito(){
    let productoAlmacenado1=sessionStorage.getItem("mostrar-Cafe");
    let productoAlmacenado2=sessionStorage.getItem("mostrar-Manteca");
    let productoAlmacenado3=sessionStorage.getItem("mostrar-Vino");
    let productoAlmacenado4=sessionStorage.getItem("mostrar-Heladera");
    if(productoAlmacenado1){
        
        mostrarCarrito(0,`contenedor-mensaje-Cafe`,"Cafe","vaciar-Cafe");
        
    }
    if(productoAlmacenado2){
        mostrarCarrito(1,`contenedor-mensaje-Manteca`,"Manteca","vaciar-Manteca");
    }
    if(productoAlmacenado3){
        mostrarCarrito(2,`contenedor-mensaje-Vino`,"Vino","vaciar-Vino");
    }
    if(productoAlmacenado4){
        mostrarCarrito(3,`contenedor-mensaje-Heladera`,"Heladera","vaciar-Heladera");
    }
}




function mostrarCambio(pesos){
    let contenedorCambio=document.getElementById("tasa-cambio-contenedor")
    let pesosCambio=document.createElement("p");
    pesosCambio.innerHTML=pesos;
    contenedorCambio.append(pesosCambio);
}


// USO DE FETCH PARA OBTENER API CON TIPOS DE CAMBIO
let dolar
let peso





function calculate(){
    fetch("https://v6.exchangerate-api.com/v6/d87712323311b4c01eaf7e18/latest/USD")
.then(res => res.json() )
.then(data => {
    dolar = data.conversion_rates.USD;
    peso=data.conversion_rates.ARS;
    mostrarCambio(peso);  
    obtenerSubtotal();
    obtenerCarrito();
    
    
 } );
}
registro();
calculate();


