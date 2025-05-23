document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página

    alert('Formulario enviado con éxito');

    form.reset(); // Limpia el formulario
  });
});
