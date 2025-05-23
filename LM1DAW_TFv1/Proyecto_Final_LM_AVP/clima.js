// Espera a que todo el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // Obtiene el elemento <select> con id 'ciudad' del HTML
  const selectCiudad = document.getElementById('ciudad');

  // Obtiene el div donde se mostrará el clima actual
  const climaActualDiv = document.getElementById('clima-actual');

  // Obtiene el contenedor donde se mostrará el pronóstico (tercera tarjeta en la estructura)
  const pronosticoDiv = document.querySelector('.card:nth-child(3) .row');

  // Obtiene el div donde se mostrará la alerta meteorológica
  const alertaDiv = document.getElementById('alerta');

  // Objeto con datos simulados de clima para cada ciudad
  const datosClima = {
    madrid: {
      actual: { tempMax: "28°C", tempMin: "15°C", viento: "10 km/h", lluvia: "20%", estado: "Soleado ☀️" },
      pronostico: [
        { dia: "Mañana", tempMax: "30°C", tempMin: "16°C", viento: "12 km/h", lluvia: "10%", estado: "Soleado ☀️" },
        { dia: "Pasado mañana", tempMax: "27°C", tempMin: "14°C", viento: "15 km/h", lluvia: "30%", estado: "Nublado ☁️" }
      ],
      alerta: ""
    },
    barcelona: {
      actual: { tempMax: "25°C", tempMin: "18°C", viento: "8 km/h", lluvia: "60%", estado: "Lluvia 🌧️" },
      pronostico: [
        { dia: "Mañana", tempMax: "26°C", tempMin: "17°C", viento: "10 km/h", lluvia: "40%", estado: "Nublado ☁️" },
        { dia: "Pasado mañana", tempMax: "24°C", tempMin: "16°C", viento: "12 km/h", lluvia: "20%", estado: "Parcialmente nublado 🌤️" }
      ],
      alerta: "⚠️ Alerta por lluvias intensas"
    },
    sevilla: {
      actual: { tempMax: "33°C", tempMin: "19°C", viento: "14 km/h", lluvia: "5%", estado: "Soleado ☀️" },
      pronostico: [
        { dia: "Mañana", tempMax: "34°C", tempMin: "20°C", viento: "13 km/h", lluvia: "0%", estado: "Soleado ☀️" },
        { dia: "Pasado mañana", tempMax: "32°C", tempMin: "18°C", viento: "10 km/h", lluvia: "5%", estado: "Parcialmente nublado 🌤️" }
      ],
      alerta: ""
    },
    valencia: {
      actual: { tempMax: "27°C", tempMin: "17°C", viento: "9 km/h", lluvia: "15%", estado: "Parcialmente nublado 🌤️" },
      pronostico: [
        { dia: "Mañana", tempMax: "28°C", tempMin: "18°C", viento: "11 km/h", lluvia: "10%", estado: "Soleado ☀️" },
        { dia: "Pasado mañana", tempMax: "26°C", tempMin: "16°C", viento: "10 km/h", lluvia: "20%", estado: "Nublado ☁️" }
      ],
      alerta: ""
    }
  };

  // Función que actualiza la información del clima según la ciudad seleccionada
  function actualizarClima(ciudadSeleccionada) {
    // Obtiene los datos de la ciudad seleccionada
    const ciudad = datosClima[ciudadSeleccionada];

    // Si no hay datos de la ciudad, no hace nada
    if (!ciudad) return;

    // Actualiza el HTML con los datos del clima actual
    climaActualDiv.innerHTML = `
      <h4 class="card-title">Clima de Hoy</h4>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Temperatura máxima:</strong> ${ciudad.actual.tempMax}</li>
        <li class="list-group-item"><strong>Temperatura mínima:</strong> ${ciudad.actual.tempMin}</li>
        <li class="list-group-item"><strong>Velocidad del viento:</strong> ${ciudad.actual.viento}</li>
        <li class="list-group-item"><strong>Probabilidad de precipitación:</strong> ${ciudad.actual.lluvia}</li>
        <li class="list-group-item"><strong>Estado del cielo:</strong> ${ciudad.actual.estado}</li>
      </ul>
    `;

    // Recorre el pronóstico de la ciudad y genera el HTML correspondiente
    pronosticoDiv.innerHTML = ciudad.pronostico.map(dia => `
      <div class="col-md-4">
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">${dia.dia}</h5>
            <p>Máxima: ${dia.tempMax}</p>
            <p>Mínima: ${dia.tempMin}</p>
            <p>Viento: ${dia.viento}</p>
            <p>Precipitación: ${dia.lluvia}</p>
            <p>Estado: ${dia.estado}</p>
          </div>
        </div>
      </div>
    `).join('');

    // Muestra la alerta si existe, o un mensaje indicando que no hay alertas
    alertaDiv.innerHTML = ciudad.alerta
      ? `<p class="text-danger">${ciudad.alerta}</p>`
      : `<p class="text-success">✅ No hay alertas meteorológicas para esta ubicación.</p>`;
  }

  // Evento que se dispara al cambiar la ciudad del <select>
  selectCiudad.addEventListener('change', () => {
    actualizarClima(selectCiudad.value);
  });

  // Si al cargar la página ya hay una ciudad seleccionada, muestra su clima
  if (selectCiudad.value !== "") {
    actualizarClima(selectCiudad.value);
  }
});
