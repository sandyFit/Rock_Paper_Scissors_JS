function launchConfetti(ratio, opt) {
    confetti({
        ...opt,
        origin: { y: .6 },
        particleCount: Math.floor(200 * ratio)
    });
}

