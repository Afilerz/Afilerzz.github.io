const toggle = document.getElementById("toggle");
const icon = document.getElementById("icon");

// Cambiar tema al hacer clic
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("theme", "dark");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("theme", "light");
    }
});

// Comprobar el tema guardado en el almacenamiento local al cargar la página
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
} else {
    document.body.classList.remove("dark");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
}
