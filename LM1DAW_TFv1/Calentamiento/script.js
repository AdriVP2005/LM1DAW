
// Elementos del DOM
const nameButton = document.getElementById('nameButton'); // Botón para cambiar nombre y color.
const profileImage = document.getElementById('profileImage'); // Imagen de perfil.
const titleToggleButton = document.getElementById('titleToggleButton'); // Botón para mostrar/ocultar el título.
const nameElement = document.getElementById('fullName'); // Elemento del nombre.
const titleElement = document.getElementById('titleName'); // Elemento del título.

// Cambiar el nombre y el color al hacer clic en el botón
nameButton.addEventListener('click', () => {
  console.warn('Botón de nombre clickeado');

  if (nameElement.style.color === 'blue') {
    nameElement.style.color = 'rgb(255, 235, 119)'; // Amarillo
    nameElement.style.fontStyle = '';
    nameElement.textContent = 'Adrián Vitos Parra';
  } else {
    nameElement.style.color = 'blue';
    nameElement.style.fontStyle = 'italic';
    nameElement.textContent = '1º DAW';
  }
});

// Eventos de la imagen de perfil
profileImage.addEventListener('mouseover', () => {
  profileImage.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'; // Agrega una sombra.
});

profileImage.addEventListener('mouseout', () => {
  profileImage.style.boxShadow = 'none'; // Quita la sombra.
  profileImage.src = '../imagenes/koenigsegg-jesko-absolut.webp'; // Cambia la imagen.
});

// Mostrar/ocultar el título al hacer clic en el botón
titleToggleButton.addEventListener('click', () => {
  console.warn('Botón de título clickeado');
  titleElement.style.display = titleElement.style.display === 'none' ? 'block' : 'none';
});

// Obtén una referencia al botón y al formulario
const boton = document.getElementById("nameButton2");
const formulario = document.getElementById("miFormulario");

// Agrega un detector de eventos de clic al botón
boton.addEventListener("click", function() {
  // Si el formulario está visible, ocúltalo; de lo contrario, muéstralo
  if (formulario.style.display === "none") {
    formulario.style.display = "block";
  } else {
    formulario.style.display = "none";
  }
});

let fps = ["Ver videos","Jugar videojuegos", "Leer", "Quedar con amigos","Escuchar música"];

let orferListEl = document.getElementById("order_list");
for(var i=0; i<fps.length; i++){
    let li = document.createElement("li")
    li.innerText = fps[i];
    orderListEl.appendChild(li);
}
