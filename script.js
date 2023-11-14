function toggleOpciones() {
    var opciones = document.getElementById("opciones");
    if (opciones.style.display === "block") {
        opciones.style.display = "none";
    } else {
        opciones.style.display = "block";
    }
}

function irAMenuPrincipal() {
    alert("Ir a Menú Principal");
    // Puedes agregar aquí la lógica para redirigir a la página del menú principal
}

function irAConfigurar() {
    alert("Ir a Configurar");
    // Puedes agregar aquí la lógica para redirigir a la página de configuración
}

function salir() {
    alert("Salir");
    // Puedes agregar aquí la lógica para salir o cerrar la aplicación
}
function irAMenuPrincipal() {
    window.location.href = "login.html";
}
function salir() {
    window.location.href = "index.html";
}
function agregarAlCarrito(event) {
    // Lógica de la función para añadir al carrito
    console.log("Producto añadido al carrito");
    // Evitar que el enlace href se siga
    event.preventDefault();
  }
  