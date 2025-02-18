// animation.js - Animaciones de Texto ASCII
function animarTexto(lineas, velocidad = 300) {
    let output = document.getElementById("output");
    output.innerText = "";
    let i = 0;

    function mostrarLinea() {
        if (i < lineas.length) {
            output.innerText += lineas[i] + "\n";
            i++;
            setTimeout(mostrarLinea, velocidad);
        }
    }
    mostrarLinea();
}
