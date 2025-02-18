// network.js - Compartir Código con Otros Usuarios
function compartirCodigo() {
    let codigo = document.getElementById("editor").value;
    let enlace = `https://tuusuario.github.io/basic-runner/?codigo=${encodeURIComponent(codigo)}`;
    prompt("Copia este enlace para compartir tu código:", enlace);
}

// themes.js - Modo Oscuro y Personalización del Editor
function cambiarTema() {
    let editor = document.getElementById("editor");
    let body = document.body;
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        editor.style.backgroundColor = "#fff";
        editor.style.color = "#000";
    } else {
        body.classList.add("dark-mode");
        editor.style.backgroundColor = "#1e1e1e";
        editor.style.color = "#fff";
    }
}
