

var clima = {};
fetch('./js/5days_clima.json')
    .then((response) => response.json())
    .then((json) => fillContent(json));

function fillContent(clima){
    var days = clima.forecast.forecastday;
    
    days.forEach(function(item) {
    
    })
}