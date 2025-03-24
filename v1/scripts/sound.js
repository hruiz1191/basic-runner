// sound.js - Audio retro para Basic Runner
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

/**
 * 🔊 Comando BEEP
 * Genera un tono único estilo consola retro.
 * @param {number} frequency - Frecuencia en Hz (ej. 440)
 * @param {number} duration - Duración en segundos (ej. 0.2)
 * @param {string} type - Tipo de onda: "sine", "square", "triangle", "sawtooth"
 */
function playSound(frequency = 440, duration = 0.2, type = "square") {
    console.log(`🔊 BEEP ejecutado → Frecuencia: ${frequency}Hz, Duración: ${duration}s, Onda: ${type}`);

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
}

/**
 * 🎶 Comando MELODY
 * Reproduce una serie de notas como una melodía tipo NES/GameBoy.
 * @param {Array} notes - Arreglo de objetos: { f: frecuencia, d: duración, t: tipo de onda }
 */
function melody(notes = []) {
    if (!notes.length) {
        console.warn("🎼 MELODY: No se proporcionaron notas.");
        return;
    }

    console.log("🎼 Iniciando ejecución de melodía...");

    let startTime = audioContext.currentTime;

    notes.forEach((note, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        const frequency = note.f || 440;
        const duration = note.d || 0.2;
        const type = note.t || "square";

        oscillator.type = type;
        oscillator.frequency.setValueAtTime(frequency, startTime);
        gainNode.gain.setValueAtTime(0.1, startTime);

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start(startTime);
        oscillator.stop(startTime + duration);

        console.log(`🎵 Nota ${index + 1}: ${frequency}Hz / ${duration}s / ${type}`);
        startTime += duration;
    });
}
