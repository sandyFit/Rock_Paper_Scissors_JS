// Lógica para inicializar el juego y establecer las interacciones del usuario

function jugadaRandom() {

    const opciones = ['piedra 🥌', 'papel 📃', 'tijera ✂'];
    const eleccionCompu = opciones[Math.floor(Math.random() * opciones.length)];
    console.log(`PC: ${eleccionCompu}`);

    return eleccionCompu;
}

function compararJugadas(e) {

    // Configurar la elección del jugador cuando clique una de las 3 opciones de armas
    let eleccionJugador = e.currentTarget.id;
    console.log(`Jugador: ${eleccionJugador}`);

    const eleccionComputadora = jugadaRandom();

    // Mostrar lo que eligió el jugador y la compu en cada partida
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
    ) {
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
