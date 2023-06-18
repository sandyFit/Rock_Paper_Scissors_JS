// Variables para almacenar referencias a elementos HTML

let puntajeJugador = 0;
let puntajeComputadora = 0;

const instrucciones = document.querySelector('#instrucciones');
const nombreJugador = document.querySelector('.nombre-jugador');
const puntosJugador = document.querySelector('#puntos-usario');
const puntosComputadora = document.querySelector('#puntos-computadora');
const mensaje = document.querySelector('#mensaje');
const elijeArma = document.querySelector('#elige-arma');
let contenedorEleccionJugador = document.querySelector('#eleccion-usuario');
let contenedorEleccionCompu = document.querySelector('#eleccion-compu');
const ganaPunto = document.querySelector('#gana-punto');
const btnReiniciar = document.querySelector('#reiniciar');
const separador = document.querySelector('.linea-separador');

const RESULTADOS_POSIBLES = ['¡Ganaste un punto! 😎', 'Esto fue un empate 🥱', 'Punto para la Computadora 🥵'];
const RESULTADO_FINAL = ['🎇 ¡Felicidades, has ganado el juego! 🎇', 'Lo sentimos, ha ganado la computadora 😭'];

// Configurar evento paa escoger arma
const botonesArmas = document.querySelectorAll('.arma');
botonesArmas.forEach(boton => {
    boton.addEventListener('click', compararJugadas);
});