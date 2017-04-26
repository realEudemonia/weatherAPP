/**
 * Created by jason on 4/9/17.
 */
//TODO find seven images to use with the weather changes API
var weatherLineObj = {
    sunny: "Cloud Nine", //800
    snow: "As white as snow", //600 - 622
    rain: "Raining cats and dogs", //300 - 321 && 500 - 531
    ice: "Brass monkey weather", // 611, 612, 906
    tornado: "Tempest in a teapot", // 900, 961
    thunderstorm: "Storm in a teacup", // 200 - 232
    cold: "Cold enough to freeze the balls off a brass monkey" // 903
};

$(document).ready(function () {
    init();
});



function init () {
    navigator.geolocation.getCurrentPosition(function (position) {
        grabWeather(position.coords.latitude, position.coords.longitude);
    });
}


function grabWeather (lat, long){
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=743f41e57df418f0386f7dd674e238a4", function(json) {
        var weatherData = {};
        var weatherArr = [];
        weatherData['weatherID'] = (json.weather[0].id);
        weatherData['temp'] = (Math.round((json.main.temp - 273.15) * 1.8 + 32));
        weatherData['city'] = (json.name);
        weatherArr.push(weatherData);
        insertWeatherData(weatherArr[0]);
    });
}

function insertWeatherData (params){
    $(".city").append("<p>" + params.city + "</p>");
    $(".temperature").append("<p>" + params.temp + "</p>");
    switch (true){
        //ice
        case params.weatherID === 611:
        case params.weatherID === 612:
        case params.weatherID === 906:
            $(".description").append( "<p>" + weatherLineObj.ice + "</p>");
            break;
        //tornado
        case params.weatherID === 900:
        case params.weatherID === 961:
            $(".description").append( "<p>" + weatherLineObj.tornado + "</p>");
            break;
        //cold
        case params.weatherID === 903:
            $(".description").append( "<p>" + weatherLineObj.cold + "</p>");
            break;
        //sunny
        case params.weatherID >= 800:
            $(".description").append( "<p>" + weatherLineObj.sunny + "</p>");
            break;
        //snow
        case params.weatherID >= 600:
            $(".description").append( "<p>" + weatherLineObj.snow + "</p>");
            break;
        //rain
        case params.weatherID >= 300:
            $(".description").append( "<p>" + weatherLineObj.rain + "</p>");
            break;
        //thunderstorm
        case params.weatherID >= 200:
            $(".description").append( "<p>" + weatherLineObj.thunderstorm + "</p>");
            break;
    }
}
// API for weather call by zip code
//api.openweathermap.org/data/2.5/weather?zip={45140},{USA}
//example JSON object returned
/*{"coord":{"lon":-122.09,"lat":37.39},
    "sys":{"type":3,"id":168940,"message":0.0297,"country":"US","sunrise":1427723751,"sunset":1427768967},
    "weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01n"}],
    "base":"stations",
    "main":{"temp":285.68,"humidity":74,"pressure":1016.8,"temp_min":284.82,"temp_max":286.48},
    "wind":{"speed":0.96,"deg":285.001},
    "clouds":{"all":0},
    "dt":1427700245,
    "id":0,
    "name":"Mountain View",
    "cod":200}*/