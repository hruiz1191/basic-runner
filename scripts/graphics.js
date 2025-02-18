// graphics.js - Soporte para gráficos y animaciones en BASIC

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Borra la pantalla (CLS en BASIC)
function cls() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Dibuja una línea (LINE en BASIC)
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

// Dibuja un círculo (CIRCLE en BASIC)
function drawCircle(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();
}

// Cambia el color de dibujo (COLOR en BASIC)
function setColor(color) {
    ctx.strokeStyle = color;
}

// Ejecuta comandos gráficos en BASIC
function interpretarGraphics(comando) {
    let partes = comando.split(" ");
    if (partes[0] === "CLS") {
        cls();
    } else if (partes[0] === "LINE") {
        drawLine(parseInt(partes[1]), parseInt(partes[2]), parseInt(partes[3]), parseInt(partes[4]));
    } else if (partes[0] === "CIRCLE") {
        drawCircle(parseInt(partes[1]), parseInt(partes[2]), parseInt(partes[3]));
    } else if (partes[0] === "COLOR") {
        setColor(partes[1]);
    }
}
