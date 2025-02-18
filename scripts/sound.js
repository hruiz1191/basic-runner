// sound.js - Control de sonidos (BEEP, PLAY)

// Función para generar un beep básico
function beep() {
    let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    let oscillator = audioCtx.createOscillator();
    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(1000, audioCtx.currentTime);
    oscillator.connect(audioCtx.destination);
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.1);
}

// Función para reproducir notas con PLAY
function playSound(frequency, duration) {
    let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    let oscillator = audioCtx.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    oscillator.connect(audioCtx.destination);
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + duration / 1000);
}

// Función para interpretar comandos PLAY en BASIC
function interpretarPLAY(comando) {
    let notas = {"C": 261.63, "D": 293.66, "E": 329.63, "F": 349.23, "G": 392.00, "A": 440.00, "B": 493.88};
    let partes = comando.split(" ");
    if (partes[0] === "PLAY" && notas[partes[1]]) {
        playSound(notas[partes[1]], 500);
    }
}
