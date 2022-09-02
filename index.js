/*Calculadora de interes basica en una compra simulada


 */

//alert("Indique por favor el monto a pagar y la cantidad de cuotas. "+"Recuerde que tiene 1,3,6,9 o 12 cuotas. En 1 cuota no hay interes, en 3 hay 15% , en 6 hay 20% , en 9 hay 30% y en 12 hay 40%.");

function calcularIntereses(monto,interes){
    return monto*interes/100;
    
    
}

function porcentajeInteres(){
    let montoIngresado=parseInt(prompt("Ingrese el monto a pagar: "));
    let cuotasSeleccionadas=parseInt(prompt("Ingrese la cantidad de cuotas que desea abonar: "));
    let totalConIntereses=0;
    let interesesASumar=0;
    let porcentaje=0;
    let cuotas="cuotas";
    let cuotasPorMes=0;
    let mensaje="El total a pagar  es de $";
    let mensajeCuota="cada una."
    let mensajeError="CUIDADO, HA INTRODUCIDO UN VALOR ERRONEO,RECUERDE QUE DEBE INGRESAR SOLO VALORES NUMERICOS Y MAYORES A 0. \nVUELVA A CALCULAR."
    
    while(montoIngresado<1 || isNaN(montoIngresado)){
        alert(mensajeError);
        montoIngresado=parseInt(prompt("Por favor ingrese un numero mayor a 0")) ;
    }
    
    while(cuotasSeleccionadas !=1 && cuotasSeleccionadas!=3 && cuotasSeleccionadas!=6 && cuotasSeleccionadas!=9 && cuotasSeleccionadas!=12){
        cuotasSeleccionadas=prompt("Por favor elija entre 1,3,6,9 o 12 cuotas.");
    }
    
    if(cuotasSeleccionadas==3){
        porcentaje=15;
        
    }else if(cuotasSeleccionadas==6){
        porcentaje=20;
    }else if(cuotasSeleccionadas==9){
        porcentaje=30;
    }else if(cuotasSeleccionadas==12){
        porcentaje=40;
    }else{
        porcentaje;
        cuotas="cuota";
        mensajeCuota="."
        
    }
    
    interesesASumar=calcularIntereses(montoIngresado,porcentaje);
    totalConIntereses=montoIngresado+interesesASumar;
    cuotasPorMes=totalConIntereses/cuotasSeleccionadas;
    alert(mensaje+Math.round(totalConIntereses)+" . En "+cuotasSeleccionadas+" "+cuotas+" de "+"$"+cuotasPorMes.toFixed(2)+" "+mensajeCuota);
}




  
