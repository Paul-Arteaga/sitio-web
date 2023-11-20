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

let map;

async function initMap() {
  try {
    const position = { lat: -17.802631378173828, lng: -63.171173095703125 };

    // Cargar la librería de mapas y marcadores
    const { Map, AdvancedMarkerView } = await google.maps.importLibrary("maps", "marker");

    map = new Map(document.getElementById("map"), {
      zoom: 14,
      center: position,
      mapId: "DEMO_MAP_ID",
    });

    const marker = new AdvancedMarkerView({
      map: map,
      position: position,
      title: "My location",
    });
  } catch (error) {
    console.error('Error al inicializar el mapa:', error);
  }
}
