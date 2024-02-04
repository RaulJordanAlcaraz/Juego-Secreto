let numeroSecreto = 0;
let intentos = 0;
let listaDeNumeroSorteado = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si ya se sortearon todos los numeros posibles.
    if (listaDeNumeroSorteado.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles.');
    }else{
    //si el numero secreto esta incluido en la lista.
    if (listaDeNumeroSorteado.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    }else{
        listaDeNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
    };
    };
}

function verificarIntento() {
    //si el usuario acerto.
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste al numero secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //si el usuario no acerto.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es Menor.');
        }else{
            asignarTextoElemento('p', 'El numero secreto es Mayor.');
        }
       intentos++;  
       limpiarCaja();       
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto.');
    asignarTextoElemento('p', `Ingresa un numero del 1 al ${numeroMaximo}.`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego() {
    //limpiar la caja de texto.
    limpiarCaja();
    //indicar mensaje de intervalo de numeros.
     //inicializar el numero de intentos.
     //generar el numero aleatorio.
    condicionesIniciales();   
    //deshabilitar el boton de nuevo juego.
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


/**
 * function saludo(){
 *  console.log("Hola Mundo.");
 *  return;
 * };
 * saludo();
 * 
 * function saludoPersona(nombre){
 *      console.log(`Hola ${nombre}.`);
 *      return;
 * }
 * saludoPersona(Alice);
 * 
 * function calcularDoble(x){
 *      return x =* 2;  
 * }
 * let resultadoDoble = calcularDoble(5);
 * console.log(resultadoDoble);
 * 
 * function promedio(x,y,z){
 *      let operacionPromedio = x+y+z / 3;
 *      return;
 * }
 * let SolicitudPromedio = promedio(1,2,3);
 * console.log(solicitudPromedio);
 * 
 * function elMayor(a,b){
 *      if(a>b){
 *      alert(`El numero mayor es ${a}. `);
 * }else{
 *      alert(`El numero mayor es ${b}. `);
 * }; 
 * }
 * let numeros = elMayor(15,12);
 * console.log(numeros);
 * 
 * function multiplicacion(v){
 *      return(v=*v);
 * }
 * let cuadrado = multiplicacion(2);
 * console.log(cuadrado);
 * 
 */


