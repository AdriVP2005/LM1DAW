// Obtener el botón y el nombre
const changeColorNameButton = document.getElementById('changeNameButton');
const fullName = document.getElementById('fullName');

changeColorNameButton.addEventListener('click', () => {
    console.warn("click.......");
    alert("Ahora el nombre va a cambiar de color");

    // Obtener el color actual
    const currentColor = window.getComputedStyle(fullName).color;

    // Cambiar el color entre negro y rojo
    fullName.style.color = (currentColor === 'rgb(255, 235, 119)') ? 'blue' : 'rgb(255, 235, 119)';
});
