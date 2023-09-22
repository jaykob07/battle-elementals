const botonMascotaJugador = document.getElementById("boton-mascota") 
const sectionSeleccionarAtaque = document.getElementById('seleccion-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonFuego = document.getElementById ('boton-fuego')
const botonAgua  = document.getElementById ('boton-agua')
const botonTierra = document.getElementById ('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')
const botonSectionMascotaJugador = document.getElementById("seleccionar-mascota") 
let sectionSeleccionarMascota = document.getElementById("boton-mascota")
const inputRumblegulp = document.getElementById('rumblegulp', )
const inputMunchsquish = document.getElementById('munchsquish')
const inputSlurpzilla = document.getElementById('slurpzilla')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const sectionMensaje = document.getElementById('resultado')
const ataqueDeljugador = document.getElementById('ataque-del-jugador')
const ataqueDelenemigo = document.getElementById('ataque-Del-enemigo')

let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

    



function iniciarJuego(){
    
    botonMascotaJugador.addEventListener("click", seleccionarMascotajugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)

    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'

    

}


function seleccionarMascotajugador() {
    
    botonSectionMascotaJugador.style.display = 'none'
    sectionSeleccionarMascota.style.display = 'none' 
    sectionSeleccionarAtaque.style.display = 'flex'

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
   
    sectionReiniciar.style.display = 'flex'
    sectionMensaje.innerHTML = resultadoFinal

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true

}

function crearMensaje(resultado){
    
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