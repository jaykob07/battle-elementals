let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

    


function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccion-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let botonMascotaJugador = document.getElementById("boton-mascota") 
     botonMascotaJugador.addEventListener("click", seleccionarMascotajugador)

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
    let sectionSeleccionarMascota = document.getElementById("seleccionar-macota")
    sectionSeleccionarMascota.style.display = 'none' 

    let sectionSeleccionarAtaque = document.getElementById("seleccion-ataque")
    sectionSeleccionarAtaque.style.display = 'block'

    

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('Selecciona un Mokepon!')
    }
    seleccionarMascotaenemigo()
   
}

function seleccionarMascotaenemigo() {
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
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
    let sectionMensaje = document.getElementById('mensajes')
    
     let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensaje.appendChild(parrafo)

    let botonFuego = document.getElementById ('boton-fuego')
    botonFuego.disabled = true
    let botonAgua  = document.getElementById ('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById ('boton-tierra')
    botonTierra.disabled = true

}

function crearMensaje(resultado){
    let sectionMensaje = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'tu mascota ataco con ' + ataqueJugador + ' la mascota del enemigo ataco con ' + ataqueEnemigo + ' ' + resultado

    sectionMensaje.appendChild(parrafo)
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

window.addEventListener('load', iniciarJuego)