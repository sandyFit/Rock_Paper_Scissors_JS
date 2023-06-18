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

const botonesArmas = document.querySelectorAll('.arma');
botonesArmas.forEach(boton => {
    boton.addEventListener('click', compararJugadas);
});

function jugadaRandom() {
    const opciones = ['piedra 🥌', 'papel 📃', 'tijera ✂'];
    const eleccionCompu = opciones[Math.floor(Math.random() * opciones.length)];
    console.log(`PC: ${eleccionCompu}`);
    return eleccionCompu;
}

function compararJugadas(e) {

    let eleccionJugador = e.currentTarget.id;
    console.log(`Jugador: ${eleccionJugador}`);

    const eleccionComputadora = jugadaRandom();

    mostrarMensaje(eleccionJugador, eleccionComputadora);

    let resultadoRonda = '';

    // Revisar en caso de que empate
    if (eleccionJugador === eleccionComputadora) {
        resultadoRonda = empate();
    }
    // Si gana la compu
    else if (
        (eleccionJugador === 'piedra 🥌' && eleccionComputadora === 'papel 📃') ||
        (eleccionJugador === 'papel 📃' && eleccionComputadora === 'tijera ✂') ||
        (eleccionJugador === 'tijera ✂' && eleccionComputadora === 'piedra 🥌')
    )  {
        resultadoRonda = ganaComputadora();
    }
    else {
        resultadoRonda = ganaJugador();
    }

    ganaPunto.textContent = resultadoRonda;
    ganaJuego();
}

function ganaJugador() {
    puntajeJugador++;
    puntosJugador.textContent = puntajeJugador;
    return RESULTADOS_POSIBLES[0];
}

function empate() {
    return RESULTADOS_POSIBLES[1];
}

function ganaComputadora() {
    puntajeComputadora++;
    puntosComputadora.textContent = puntajeComputadora;
    return RESULTADOS_POSIBLES[2];
}

function mostrarMensaje(eleccionJugador, eleccionCompu) {
    separador.classList.add('disabled');
    mensaje.classList.remove('disabled');
    contenedorEleccionCompu.textContent = eleccionCompu;
    contenedorEleccionJugador.textContent = eleccionJugador;
}

function ganaJuego() {
    if (puntajeJugador === 5) {
        instrucciones.textContent = RESULTADO_FINAL[0];
        launchConfetti(.35, {
            spread: 30,
            startVelocity: 60
        });
        launchConfetti(.2, {
            spread: 60,
        });
        launchConfetti(.35, {
            spread: 100,
            decay: .9,
            scalar: 1
        });
        launchConfetti(.1, {
            spread: 150,
            startVelocity: 30,
            decay: .92,
            scalar: 1.2
        });
        launchConfetti(.2, {
            spread: 140,
            startVelocity: 65
        });
        
        desactivarJuego();
    }
    else if (puntajeComputadora === 5) {
        instrucciones.textContent = RESULTADO_FINAL[1];
        desactivarJuego();
    }
}

function desactivarJuego() {
    botonesArmas.forEach(boton => {
        boton.removeEventListener('click', compararJugadas);
    });
    btnReiniciar.classList.remove('disabled');
    btnReiniciar.addEventListener('click', reiniciarJuego);
}

function reiniciarJuego() {
    puntajeJugador = 0;
    puntajeComputadora = 0;

    puntosJugador.textContent = puntajeJugador;
    puntosComputadora.textContent = puntajeComputadora;

    mensaje.classList.add('disabled');
    btnReiniciar.classList.add('disabled');
    btnReiniciar.removeEventListener('click', reiniciarJuego);

    botonesArmas.forEach(boton => {
        boton.addEventListener('click', compararJugadas);
    });

    instrucciones.textContent = 'El primero en llegar a 5 puntos gana';
    separador.classList.remove('disabled');
}
