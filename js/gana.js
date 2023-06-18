function ganaJuego() {
    if (puntajeJugador === 5) {
        instrucciones.textContent = RESULTADO_FINAL[0];

        // Si gana el jugador el sistema lanza confetti
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