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