// graphics.js - Visuales en canvas para Basic Runner

const canvas = document.getElementById("basicCanvas");
const ctx = canvas.getContext("2d");

// 🔍 Escalado para pantallas retina (HD/4K)
const dpr = window.devicePixelRatio || 1;
canvas.width = 400 * dpr;
canvas.height = 400 * dpr;
canvas.style.width = "100%";
canvas.style.maxWidth = "400px";
ctx.scale(dpr, dpr);

let currentColor = "black";
let currentLine = 1;
let backgroundImage = null;
let useImageBackground = false;

// 🎨 Cambiar color de texto para PRINT
function changeTextColor(color) {
    const coloresValidos = {
        rojo: "red", verde: "green", azul: "blue", amarillo: "yellow",
        blanco: "white", negro: "black", violeta: "purple", naranja: "orange"
    };

    const traducido = coloresValidos[color.toLowerCase()] || color;
    if (Object.values(coloresValidos).includes(traducido)) {
        currentColor = traducido;
        console.log(`🎨 Color actual para PRINT: ${traducido}`);
    } else {
        currentColor = "black";
        console.warn(`⚠️ Color no válido: ${color}. Usando negro.`);
    }
}

// 🖼️ Establecer imagen de fondo en el canvas (opcional)
function setCanvasBackground(imagePath = null) {
    useImageBackground = !!imagePath;

    if (useImageBackground) {
        backgroundImage = new Image();
        backgroundImage.onload = () => {
            ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
            console.log("🖼️ Imagen de fondo cargada.");
        };
        backgroundImage.src = imagePath;
    } else {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        console.log("🧼 Fondo blanco aplicado.");
    }
}

// 🧹 Limpiar pantalla
function clearCanvas() {
    if (useImageBackground && backgroundImage) {
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    } else {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    currentLine = 1;
    console.log("🧹 Canvas limpiado.");
}

// 🖊️ Dibujar punto
function drawPoint(x, y) {
    ctx.fillStyle = currentColor;
    ctx.fillRect(x, y, 2, 2);
    console.log(`🖊️ Punto en: (${x}, ${y})`);
}

// 🖍️ Dibujar texto en el canvas tipo PRINT
function drawTextInCanvas(text, color = currentColor) {
    ctx.fillStyle = color;
    ctx.font = "16px monospace";
    const lineHeight = 20;
    const x = 10;
    const y = currentLine * lineHeight;

    ctx.fillText(text, x, y);
    currentLine++;
    console.log(`📄 PRINT "${text}" en línea ${currentLine - 1}, color: ${color}`);
}
