// basic-interpreter.js - Intérprete de BASIC para Basic-Runner

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("executeButton").addEventListener("click", ejecutarBASIC);
});

function ejecutarBASIC() {
    let codigo = document.getElementById("editor").value;
    let lineas = codigo.split("\n");
    let output = "";
    let variables = {};
    let i = 0;

    while (i < lineas.length) {
        let linea = lineas[i].trim();
        if (linea.startsWith("PRINT")) {
            let contenido = linea.replace("PRINT", "").trim();
            if (contenido in variables) {
                output += variables[contenido] + "\n";
            } else {
                output += contenido.replace(/\"/g, "") + "\n";
            }
        } else if (linea.startsWith("INPUT")) {
            let variable = linea.split(" ")[1];
            let valor = prompt(`Ingresa un valor para ${variable}:`);
            variables[variable] = valor;
        } else if (linea.startsWith("LET")) {
            let partes = linea.split(" ");
            let variable = partes[1];
            let valor = partes.slice(3).join(" ");
            variables[variable] = isNaN(valor) ? valor : parseFloat(valor);
        } else if (linea.startsWith("IF")) {
            let condicion = linea.match(/IF (.*) THEN (.*)/);
            if (condicion) {
                let expresion = condicion[1].trim();
                let accion = condicion[2].trim();
                if (eval(expresion.replace(/(\w+)/g, (m) => variables[m] || m))) {
                    lineas.splice(i + 1, 0, accion);
                }
            }
        } else if (linea.startsWith("FOR")) {
            let partes = linea.match(/FOR (\w+) = (\d+) TO (\d+)/);
            if (partes) {
                let varName = partes[1];
                let start = parseInt(partes[2]);
                let end = parseInt(partes[3]);
                for (let j = start; j <= end; j++) {
                    variables[varName] = j;
                    let loopLine = i + 1;
                    while (loopLine < lineas.length && !lineas[loopLine].startsWith("NEXT")) {
                        let loopCode = lineas[loopLine];
                        lineas.splice(loopLine + 1, 0, loopCode);
                        loopLine++;
                    }
                }
            }
        } else if (linea.startsWith("NEXT")) {
            // Ignorar, manejado en FOR
        } else {
            output += "Error: Comando no reconocido en línea " + (i + 1) + "\n";
        }
        i++;
    }
    document.getElementById("output").innerText = output;
}
