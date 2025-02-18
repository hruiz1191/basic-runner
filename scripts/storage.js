// storage.js - Funciones para guardar y cargar código en localStorage

// Guarda el código BASIC en localStorage
function guardarCodigo() {
    let codigo = document.getElementById("editor").value;
    localStorage.setItem("basic-runner-code", codigo);
    alert("Código guardado correctamente.");
}

// Carga el código BASIC desde localStorage
function cargarCodigo() {
    let codigo = localStorage.getItem("basic-runner-code");
    if (codigo) {
        document.getElementById("editor").value = codigo;
        alert("Código cargado correctamente.");
    } else {
        alert("No hay código guardado.");
    }
}

// Borra el código almacenado en localStorage
function borrarCodigo() {
    localStorage.removeItem("basic-runner-code");
    alert("Código eliminado correctamente.");
}
