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
// script.js

function agregarAlCarrito(nombre, precio) {
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push({ nombre: nombre, precio: precio });
    localStorage.setItem('carrito', JSON.stringify(carrito));
  
    alert('Producto agregado al carrito');
  }




// script.js

function initMap() {
    // Puedes dejar esta función vacía por ahora
    // o agregar cualquier lógica necesaria para la inicialización del mapa
  }
  
  // Resto de tu código...
  