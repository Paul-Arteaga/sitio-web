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

// script.js

let slides = document.querySelectorAll(".slide-ana>div");
let slideSayisi = slides.length;
let loop = 0 + 1000 * slideSayisi;

function goNext() {
  loop++;
  for (let index = 0; index < slides.length; index++) {
    const element = slides[index];
    element.style.transform =
      "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
  }
}

function goPrev() {
  loop--;
  for (let index = 0; index < slides.length; index++) {
    const element = slides[index];
    element.style.transform =
      "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
  }
}

function openView(nombre, precio) {
  document.getElementById("viewerButton").classList.add("hidden");
  document.getElementById("viewerBox").classList.remove("hidden");

  // Actualizar información del producto en la ventana emergente
  document.getElementById("productTitle").innerText = nombre;
  document.getElementById("productPrice").innerText = `$${precio}`;
}

function closeView() {
  document.getElementById("viewerBox").classList.add("hidden");
  document.getElementById("viewerButton").classList.remove("hidden");
}

function agregarAlCarrito(nombre, precio) {
  var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.push({ nombre: nombre, precio: precio });
  localStorage.setItem('carrito', JSON.stringify(carrito));

  // Mostrar la ventana emergente al añadir al carrito
  openView(nombre, precio);
}

// Resto del código...



let map;

function initMap() {
  try {
    const position = { lat: -17.802631378173828, lng: -63.171173095703125 };

    // Verificar si la API de Google Maps está disponible
    if (google && google.maps) {
      const { Map, Marker } = google.maps;

      // Crear el mapa
      map = new Map(document.getElementById("map"), {
        zoom: 14,
        center: position,
        mapId: "DEMO_MAP_ID",
      });

      // Crear el marcador
      const marker = new Marker({
        map: map,
        position: position,
        title: "My location",
        label: {
          text: "My location",
          color: "white",
        },
      });
    } else {
      console.error('Error: La API de Google Maps no está disponible.');
    }
  } catch (error) {
    console.error('Error al inicializar el mapa:', error);
  }
}

