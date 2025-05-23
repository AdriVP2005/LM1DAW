

var clima = {};
fetch('./js/current_clima.json')
    .then((response) => response.json())
    .then((json) => fillContent(json));

function fillContent(clima){
    
    var imElement = document.getElementById("weather_img");
    imElement.src = clima.current.condition.icon;

    var temperaturaEl = document.getElementById("temperatura");
    temperaturaEl.textContent = clima.current.temp_c + " °C";

    var vientoEl = document.getElementById("viento");
    vientoEl.textContent = clima.current.wind_kph + " Kph";

    var precipEl = document.getElementById("precip");
    precipEl.textContent = clima.current.precip_in + " %";

    var hours = clima.forecast.forecastday[0].hour;
    hours.forEach(function(item) {

    
        if(item.time.includes("00:00")){
            //show weather at 00:00
            var temperaturaEl00 = document.getElementById("temp_00");
            temperaturaEl00.textContent = item.temp_c + " °C";
        }

        if(item.time.includes("8:00")){
            //show weather at 08:00
            var temperaturaEl08 = document.getElementById("temp_08");
            temperaturaEl08.textContent = item.temp_c + " °C";
        }

        if(item.time.includes("12:00")){
            //show weather at 12:00
            var temperaturaEl12 = document.getElementById("temp_12");
            temperaturaEl12.textContent = item.temp_c + " °C";
        }

        if(item.time.includes("18:00")){
            //show weather at 18:00
            var temperaturaEl18 = document.getElementById("temp_18");
            temperaturaEl18.textContent = item.temp_c + " °C";
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
  const selectCiudad = document.getElementById('ciudad');
  const climaActualDiv = document.getElementById('clima-actual');
  const pronosticoDiv = document.getElementById('pronostico');
  const alertaDiv = document.getElementById('alerta');

  const datosClima = {
    madrid: {
      actual: { tempMax: "28°C", tempMin: "15°C", viento: "10 km/h", lluvia: "20%", estado: "Soleado ☀️" },
      pronostico: [],
      alerta: ""
    },
    barcelona: {
      actual: { tempMax: "25°C", tempMin: "18°C", viento: "8 km/h", lluvia: "60%", estado: "Lluvia 🌧️" },
      pronostico: [],
      alerta: "⚠️ Alerta por lluvias intensas"
    }
  };

  function actualizarClima(ciudadSeleccionada) {
    const ciudad = datosClima[ciudadSeleccionada];
    if (!ciudad) return;

    climaActualDiv.innerHTML = `
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Temperatura máxima:</strong> ${ciudad.actual.tempMax}</li>
        <li class="list-group-item"><strong>Temperatura mínima:</strong> ${ciudad.actual.tempMin}</li>
        <li class="list-group-item"><strong>Velocidad del viento:</strong> ${ciudad.actual.viento}</li>
        <li class="list-group-item"><strong>Probabilidad de precipitación:</strong> ${ciudad.actual.lluvia}</li>
        <li class="list-group-item"><strong>Estado del cielo:</strong> ${ciudad.actual.estado}</li>
      </ul>
    `;

    if (ciudad.alerta) {
      alertaDiv.innerHTML = ciudad.alerta;
      alertaDiv.classList.remove("text-success");
      alertaDiv.classList.add("text-danger");
    } else {
      alertaDiv.innerHTML = "✅ No hay alertas meteorológicas para esta ubicación.";
      alertaDiv.classList.remove("text-danger");
      alertaDiv.classList.add("text-success");
    }
  }

  selectCiudad.addEventListener('change', () => {
    const ciudadSeleccionada = selectCiudad.value;
    actualizarClima(ciudadSeleccionada);
    alert("Has seleccionado: " + ciudadSeleccionada.charAt(0).toUpperCase() + ciudadSeleccionada.slice(1));
  });
});
