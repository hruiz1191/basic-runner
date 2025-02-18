// export.js - Guardar y Cargar Código desde Archivos
function guardarComoArchivo() {
    let codigo = document.getElementById("editor").value;
    let blob = new Blob([codigo], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "codigo.bas";
    link.click();
}

function cargarDesdeArchivo(event) {
    let archivo = event.target.files[0];
    if (!archivo) return;
    let reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById("editor").value = e.target.result;
    };
    reader.readAsText(archivo);
}
