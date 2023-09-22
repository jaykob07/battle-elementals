// const { Alert } = require("bootstrap")

let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

    



function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota") 
    botonMascotaJugador.addEventListener("click", seleccionarMascotajugador)

    let sectionSeleccionarAtaque = document.getElementById('seleccion-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    

    //  aqui arranco el juego llamando cada uno de los botones las dos variables anteriores las coloco despues

    let botonFuego = document.getElementById ('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua  = document.getElementById ('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById ('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)

}


function seleccionarMascotajugador() {
    let botonMascotaJugador = document.getElementById("seleccionar-mascota") 
    botonMascotaJugador.style.display = 'none'

    let sectionSeleccionarMascota = document.getElementById("boton-mascota")
    sectionSeleccionarMascota.style.display = 'none' 

    let sectionSeleccionarAtaque = document.getElementById("seleccion-ataque")
    sectionSeleccionarAtaque.style.display = 'flex'

    
    let inputRumblegulp = document.getElementById('rumblegulp', )
    let inputMunchsquish = document.getElementById('munchsquish')
    let inputSlurpzilla = document.getElementById('slurpzilla')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputRumblegulp.checked){
        spanMascotaJugador.innerHTML = 'Rumblegulp'
    } else if(inputMunchsquish.checked){
        spanMascotaJugador.innerHTML = 'Munchsquish'
    } else if(inputSlurpzilla.checked){
        spanMascotaJugador.innerHTML = 'Slurpzilla'
    } 

    seleccionarMascotaenemigo()
   
}

function seleccionarMascotaenemigo() {
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Rumblegulp'
    } else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Munchsquish'
    } else {
        spanMascotaEnemigo.innerHTML = 'Slurpzilla'
    }
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }
    combate()
}

function combate(){

     
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje('empate')
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje('ganaste')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje('ganaste')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje('ganaste')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else{
        crearMensaje('perdiste')
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    } 

    revisarVidas()
        
} 

function revisarVidas() {

     if (vidasEnemigo == 0){
        crearMensajeFinal('felicitaciones ganaste!')
        
    }else if (vidasJugador == 0){
        crearMensajeFinal('lo siento perdiste la ronda')
        
    }
    

}

function crearMensajeFinal(resultadoFinal){
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'flex'

    let sectionMensaje = document.getElementById('resultado')
    
     sectionMensaje.innerHTML = resultadoFinal

    

    let botonFuego = document.getElementById ('boton-fuego')
    botonFuego.disabled = true
    let botonAgua  = document.getElementById ('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById ('boton-tierra')
    botonTierra.disabled = true

}

function crearMensaje(resultado){
    let sectionMensaje = document.getElementById('resultado')
    let ataqueDeljugador = document.getElementById('ataque-del-jugador')
    let ataqueDelenemigo = document.getElementById('ataque-Del-enemigo')
    
    let nuevoAtaquejugador = document.createElement('p')
    let nuevoAtaqueenemigo = document.createElement('p')

    sectionMensaje.innerHTML = resultado
    nuevoAtaquejugador.innerHTML = ataqueJugador
    nuevoAtaqueenemigo.innerHTML = ataqueEnemigo

    // let parrafo = document.createElement('p')
    // parrafo.innerHTML = 'tu mascota ataco con ' + ataqueJugador + ' la mascota del enemigo ataco con ' + ataqueEnemigo + ' ' + resultado

    
    ataqueDeljugador.appendChild(nuevoAtaquejugador)
    ataqueDelenemigo.appendChild(nuevoAtaqueenemigo)
}

function reiniciarJuego() {
    location.reload()
   
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

window.addEventListener('load', iniciarJuego)