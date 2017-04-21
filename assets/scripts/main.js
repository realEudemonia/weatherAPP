/**
 * Created by jason on 4/9/17.
 */
//TODO find seven images to use with the weather changes API
var weatherArr = [];
var weatherLineObj = {
    sunny: "Cloud Nine", //800
    snow: "As white as snow", //600 - 622
    rain: "Raining cats and dogs", //300 - 321 && 500 - 531
    ice: "Brass monkey weather", // 611, 612, 906
    tornado: "Tempest in a teapot", // 900, 961
    thunderstorm: "Storm in a teacup", // 200 - 232
    cold: "Cold enough to freeze the balls off a brass monkey" // 903
};

init();


function init () {
    navigator.geolocation.getCurrentPosition(function (position) {
        grabWeather(position.coords.latitude, position.coords.longitude);
    });
    switch (true){
        //sunny
        case weatherArr[0] === 800:
            break;
        //ice
        case weatherArr[0] === 611:
        case weatherArr[0] === 612:
        case weatherArr[0] === 906:
            break;
        //tornado
        case weatherArr[0] === 900:
        case weatherArr[0] === 961:
            break;
        //cold
        case weatherArr[0] === 903:
            break;
        //snow
        case weatherArr[0] >= 600:
            break;
        //rain
        case weatherArr[0] >= 300:
            break;
        //thunderstorm
        case weatherArr[0] >= 200:
            break;
    }
}


function grabWeather (lat, long){
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=743f41e57df418f0386f7dd674e238a4", function(json) {
        weatherID = (json.weather[0].id);
        temp = (json.main.temp);
        weatherArr.push(weatherID);
        weatherArr.push(temp);
       return weatherArr;
    });
}

function insertWeatherData (city, temp, phrase, icon){

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