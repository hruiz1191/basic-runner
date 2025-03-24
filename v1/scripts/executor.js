function executeCommand(command) {
    if (!command) return null;

    console.log("🎯 Ejecutando comando:", command);

    switch (command.command) {
        case "PRINT":
            console.log("🖨️ Comando PRINT con valor:", command.value);
            return command.value;

        case "COLOR":
            console.log("🎨 Comando COLOR con valor:", command.value);
            changeTextColor(command.value);
            return null;

        case "INPUT":
            const input = prompt(`Ingrese valor para ${command.variable}:`);
            variables[command.variable] = input;
            console.log(`📥 Comando INPUT: ${command.variable} =`, input);
            return null;

        case "LET":
            let value = isNaN(command.value) ? command.value : parseFloat(command.value);
            variables[command.variable] = value;
            console.log(`📦 Comando LET: ${command.variable} =`, value);
            return null;

        case "IF-THEN":
            const condition = command.condition.replace(/([a-zA-Z_]+)/g, "variables.$1");
            const conditionResult = Boolean(eval(condition));
            console.log(`🔀 Comando IF-THEN, condición (${command.condition}) evaluada como:`, conditionResult);
            if (conditionResult) {
                const actionCommand = parseLine(command.action);
                console.log("➡️ Acción THEN ejecutada:", actionCommand);
                return executeCommand(actionCommand);
            }
            return null;

        case "FOR":
            variables[command.variable] = command.start;
            loops.push({ varName: command.variable, end: command.end });
            console.log(`🔁 Comando FOR: ${command.variable} = ${command.start} TO ${command.end}`);
            return null;

        case "NEXT":
            const loop = loops[loops.length - 1];
            if (loop) {
                console.log(`➡️ Comando NEXT: ${loop.varName} = ${variables[loop.varName]}`);
                if (variables[loop.varName] < loop.end) {
                    variables[loop.varName]++;
                    return "REPEAT_LOOP";
                } else {
                    loops.pop();
                    console.log("✅ FOR-NEXT finalizado.");
                }
            } else {
                console.warn("⚠️ NEXT sin FOR.");
            }
            return null;

        case "WHILE":
            const cond = command.condition.replace(/([a-zA-Z_]+)/g, "variables.$1");
            const whileResult = Boolean(eval(cond));
            console.log(`🔄 Comando WHILE, condición (${command.condition}) evaluada como:`, whileResult);
            if (whileResult) {
                loops.push({ condition: command.condition });
                return "REPEAT_LOOP";
            }
            return null;

        case "PLOT":
            console.log(`🖊️ Comando PLOT en (${command.x}, ${command.y})`);
            drawPoint(command.x, command.y);
            return null;

        case "BEEP":
            console.log("🔊 Comando BEEP ejecutado.");
            playSound(440, 0.2);
            return null;

        case "MELODY":
            console.log("🎵 Ejecutando melodía personalizada:", command.notes);
            melody(command.notes);
            return null;

        case "MELODY_PRESET":
            console.log("🎵 Ejecutando melodía predefinida:", command.name);
            if (command.name === "WIN") {
                melody([
                    { f: 880, d: 0.2, t: "square" },
                    { f: 1320, d: 0.2, t: "triangle" },
                    { f: 1760, d: 0.3, t: "square" }
                ]);
            } else if (command.name === "GAMEOVER") {
                melody([
                    { f: 440, d: 0.2, t: "sawtooth" },
                    { f: 330, d: 0.3, t: "triangle" },
                    { f: 220, d: 0.5, t: "sine" }
                ]);
            } else {
                console.warn(`🎵 Melodía predefinida no encontrada: ${command.name}`);
            }
            return null;

        case "CLS":
            console.log("🧹 Comando CLS: limpiando pantalla y salida.");
            clearCanvas();
            outputBuffer = "";
            return null;

        default:
            console.error("❌ Comando no reconocido:", command.command);
            return null;
    }
}
