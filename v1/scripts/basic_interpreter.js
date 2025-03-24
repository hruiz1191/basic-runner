function runCode() {
    const code = document.getElementById("codeArea").value.trim();
    console.log("🔍 Código recibido:", code);

    if (!code) {
        drawTextInCanvas("Error: No se ha ingresado ningún código BASIC.", "red");
        console.warn("⚠️ No se ingresó código.");
        return;
    }

    clearCanvas();               // limpia el canvas
    setCanvasBackground();       // aplica fondo blanco (o imagen si deseas)
    variables = {};
    loops = [];

    const lines = code.split("\n");
    let i = 0;

    while (i < lines.length) {
        const line = lines[i].trim();
        console.log(`📄 Procesando línea ${i + 1}: "${line}"`);

        if (!line) {
            drawTextInCanvas("(línea vacía)", "gray");
            i++;
            continue;
        }

        const command = parseLine(line);
        console.log("🧠 Resultado del parser:", command);

        if (command) {
            const result = executeCommand(command);
            console.log("⚙️ Resultado del ejecutor:", result);

            if (result === "REPEAT_LOOP") {
                continue;
            } else if (result !== null) {
                drawTextInCanvas(result, currentColor);
            }
        } else {
            drawTextInCanvas("Error: Comando no reconocido -> " + line, "red");
            console.error("❌ Comando no reconocido:", line);
        }
        i++;
    }

    console.log("✅ Código ejecutado con salida en canvas.");
}


function clearCode() {
    document.getElementById("codeArea").value = "";
    clearCanvas(); // ya limpia todo visual
    console.log("🧹 Código y pantalla limpiados.");
}

function saveCode() {
    const code = document.getElementById("codeArea").value;
    localStorage.setItem("basicCode", code);
    console.log("💾 Código BASIC guardado en localStorage.");
}

function loadCode() {
    const code = localStorage.getItem("basicCode");
    if (code) {
        document.getElementById("codeArea").value = code;
        console.log("📂 Código BASIC cargado desde localStorage.");
    } else {
        console.warn("⚠️ No hay código guardado.");
    }
}

console.log("✅ basic_interpreter.js cargado correctamente.");
