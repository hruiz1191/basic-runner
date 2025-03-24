// 💾 Guardar código BASIC
function saveCode() {
    const codeArea = document.getElementById("codeArea");
    if (!codeArea) {
        console.error("❌ No se encontró el elemento #codeArea.");
        return;
    }

    const code = codeArea.value.trim();
    console.log("💾 Intentando guardar código:", code);

    if (code) {
        localStorage.setItem("basicCode", code);
        alert("✅ Código guardado correctamente.");
        console.log("💾 Código BASIC guardado en localStorage.");
    } else {
        alert("⚠️ No hay código para guardar.");
        console.warn("⚠️ Área de código vacía al intentar guardar.");
    }
}

// 📂 Cargar código BASIC desde localStorage
function loadCode() {
    const codeArea = document.getElementById("codeArea");
    if (!codeArea) {
        console.error("❌ No se encontró el elemento #codeArea.");
        return;
    }

    const code = localStorage.getItem("basicCode");
    console.log("📂 Intentando cargar código desde localStorage...");

    if (code) {
        codeArea.value = code;
        alert("📂 Código cargado correctamente.");
        console.log("📥 Código cargado:", code);
    } else {
        alert("⚠️ No se encontró ningún código guardado.");
        console.warn("⚠️ No hay código en localStorage bajo la clave 'basicCode'.");
    }
}

// 🧹 Limpiar área de código y canvas
function clearCode() {
    const codeArea = document.getElementById("codeArea");
    if (!codeArea) {
        console.error("❌ No se encontró el elemento #codeArea.");
        return;
    }

    codeArea.value = "";
    clearCanvas(); // Asegúrate de que clearCanvas() esté definida
    console.log("🧼 Área de código y canvas limpiados.");
}
