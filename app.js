let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function asignarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya sorteamos todos los numeros');
    }
    else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return asignarNumeroSecreto();
        }
        else{
            listaNumerosSorteados.push(numeroGenerado);
            console.log(numeroGenerado);
            console.log(listaNumerosSorteados);
            return numeroGenerado;
        }
    }
}

function verificarNumero(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    }
    else if(numeroDeUsuario>numeroSecreto){
        asignarTextoElemento('p','El numero es menor');
    }
    else{
        asignarTextoElemento('p','El numero es Mayor');
    }
    intentos++;
    limpiarValor();
    return;
}

function limpiarValor(){
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Bienvenido al juego numero secreto');
    asignarTextoElemento('p', `Ingrese un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = asignarNumeroSecreto();
    intentos = 1;
}



function reiniciarJuego() {
//En blanco la barra
    limpiarValor()
//Reiniciar numero aleatorio
//Nombres iniciales cambiar
//Reiniciar intentos
    condicionesIniciales();
//Desahabiitar nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

