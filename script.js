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

function initMap() {
  try {
    const position = { lat: -17.802631378173828, lng: -63.171173095703125 };

    // Esperar a que la API de Google Maps se cargue completamente
    google.maps.event.addDomListenerOnce(window, 'load', function () {
      // Verificar si la librería de Google Maps está disponible
      if (typeof google.maps === 'object') {
        const { Map, Marker } = google.maps;

        map = new Map(document.getElementById("map"), {
          zoom: 14,
          center: position,
          mapId: "DEMO_MAP_ID",
        });

        const marker = new Marker({
          map: map,
          position: position,
          title: "My location",
        });
      } else {
        console.error('Error: La librería de Google Maps no está disponible.');
      }
    });
  } catch (error) {
    console.error('Error al inicializar el mapa:', error);
  }
}
