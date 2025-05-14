

var clima = {};
fetch('./js/current_clima.json')
    .then((response) => response.json())
    .then((json) => fillContent(json));

function fillContent(clima){
    
    var imElement = document.getElementById("weather_img")
    imElement.src = clima.current.condition.icon;

    var temperaturaEl = document.getElementById("temperatura")
    temperaturaEl.textcontent = clima.current.temp_c + " °C"

    var vientoEl = document.getElementById("velocidad")
    vientoEl.textcontent = clima.current.win_kph + " k/h"

    var hours = clima.forecast.forecastday[0].hour;
    
        if(ClipboardItem.time.includes("00:00")){
            //show weather at 00:00
              var temperaturaEl = document.getElementById("temperatura")
            temperaturaEl.textcontent = clima.current.temp_c + " °C"
        }

        if(ClipboardItem.time.includes("8:00")){
            //show weather at 00:00
            debugger;
        }

        if(ClipboardItem.time.includes("12:00")){
            //show weather at 00:00
            debugger;
        }

        if(ClipboardItem.time.includes("18:00")){
            //show weather at 00:00
            debugger;
        }
}
