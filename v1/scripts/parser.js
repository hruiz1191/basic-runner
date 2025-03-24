function parseLine(line) {
    console.log("🧾 Analizando línea:", line);

    if (!line.trim()) {
        console.log("⚠️ Línea vacía detectada.");
        return { command: 'EMPTY' };
    }

    if (line.startsWith("PRINT")) {
        console.log("🔍 Comando PRINT detectado.");
        let content = line.replace('PRINT', '').trim();
        if ((content.startsWith('"') && content.endsWith('"')) || 
            (content.startsWith("'") && content.endsWith("'"))) {
            content = content.substring(1, content.length - 1);
        }

        content = content.replaceAll('\\\\', '\\')
                        .replaceAll('\\"', '"')
                        .replaceAll("\\'", "'")
                        .replaceAll('\\n', '\n')
                        .replaceAll('\\t', '\t')
                        .replace(/\\x([0-9A-Fa-f]{2})/g, (match, hex) => String.fromCharCode(parseInt(hex, 16)))
                        .replace(/\\u([0-9A-Fa-f]{4})/g, (match, unicode) => String.fromCharCode(parseInt(unicode, 16)));

        return { command: 'PRINT', value: content };

    } else if (line.startsWith("COLOR")) {
        console.log("🎨 Comando COLOR detectado.");
        return { command: 'COLOR', value: line.replace('COLOR', '').trim().toLowerCase() };

    } else if (line.startsWith("INPUT")) {
        console.log("📥 Comando INPUT detectado.");
        return { command: 'INPUT', variable: line.replace('INPUT', '').trim() };

    } else if (line.startsWith("LET")) {
        console.log("📦 Comando LET detectado.");
        const parts = line.replace('LET', '').trim().split('=');
        if (parts.length === 2) {
            return { command: 'LET', variable: parts[0].trim(), value: parts[1].trim() };
        }

    } else if (line.startsWith("IF")) {
        console.log("🔀 Comando IF-THEN detectado.");
        const parts = line.replace('IF', '').split('THEN');
        if (parts.length === 2) {
            return { command: 'IF-THEN', condition: parts[0].trim(), action: parts[1].trim() };
        }

    } else if (line.startsWith("FOR")) {
        console.log("🔁 Comando FOR detectado.");
        const parts = line.replace('FOR', '').trim().split(/ TO /);
        if (parts.length === 2) {
            const [varName, start] = parts[0].split('=');
            return {
                command: 'FOR',
                variable: varName.trim(),
                start: parseInt(start),
                end: parseInt(parts[1])
            };
        }

    } else if (line.startsWith("NEXT")) {
        console.log("➡️ Comando NEXT detectado.");
        return { command: 'NEXT' };

    } else if (line.startsWith("WHILE")) {
        console.log("🔄 Comando WHILE detectado.");
        return { command: 'WHILE', condition: line.replace('WHILE', '').trim() };

    } else if (line.startsWith("PLOT")) {
        console.log("🖊️ Comando PLOT detectado.");
        const [x, y] = line.replace('PLOT', '').trim().split(',');
        return { command: 'PLOT', x: parseInt(x.trim()), y: parseInt(y.trim()) };

    } else if (line.startsWith("BEEP")) {
        console.log("🔊 Comando BEEP detectado.");
        return { command: 'BEEP' };

    } else if (line.startsWith("CLS")) {
        console.log("🧹 Comando CLS detectado.");
        return { command: 'CLS' };

    } else if (line.startsWith("MELODY")) {
        console.log("🎵 Comando MELODY detectado.");
        const raw = line.replace("MELODY", "").trim();

        if (raw.startsWith('"') && raw.endsWith('"')) {
            const contenido = raw.slice(1, -1); // quitar comillas
            const partes = contenido.split(",");
            const notas = partes.map(nota => {
                const [f, d, t] = nota.split(":");
                return {
                    f: parseFloat(f),
                    d: parseFloat(d) || 0.2,
                    t: t || "square"
                };
            });
            console.log("🎼 Notas parseadas:", notas);
            return { command: "MELODY", notes: notas };
        } else {
            console.log("🎼 Melodía predefinida solicitada:", raw.toUpperCase());
            return { command: "MELODY_PRESET", name: raw.toUpperCase() };
        }
    }

    console.warn("❓ Comando no reconocido:", line);
    return null;
}

