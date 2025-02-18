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
