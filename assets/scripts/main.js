/**
 * Created by jason on 4/9/17.
 */
var weatherLineObj = {
    sunny: "Cloud Nine", //800
    snow: "As white as snow", //600 - 622
    rain: "Raining cats and dogs", //300 - 321 && 500 - 531
    ice: "Brass monkey weather", // 611, 612, 906
    tornado: "Tempest in a teapot", // 900, 961
    thunderstorm: "Storm in a teacup", // 200 - 232
    cold: "Cold enough to freeze the balls off a brass monkey" // 903
};
var change = 0;
var weatherArr = [];

$(document).ready(function () {
    init();
});

$(".degree").on("click", function () {
    if (change === 0) {
        $(".degreeWording").html("&#8451");
        change = 1;
    } else {
        $(".degreeWording").html("&#8457");
        change = 0;
    }
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
        weatherData['weatherIcon'] = (json.weather[0].icon);
        weatherArr.push(weatherData);
        insertWeatherData(weatherArr[0]);
    });
}

function insertWeatherData (params){
    $(".city").append("<span>" + params.city + "</span>");
    $(".temperature").prepend("<span>" + params.temp + "</span>");
    switch (true){
        //ice
        case params.weatherID === 611:
        case params.weatherID === 612:
        case params.weatherID === 906:
            $(".description").append("<span>" + weatherLineObj.ice + "</span>");
            insertIcon(params.weatherIcon);
            break;
        //tornado
        case params.weatherID === 900:
        case params.weatherID === 961:
            $(".description").append("<span>" + weatherLineObj.tornado + "</span>");
            insertIcon(params.weatherIcon);
            break;
        //cold
        case params.weatherID === 903:
            $(".description").append("<span>" + weatherLineObj.cold + "</span>");
            break;
        //sunny
        case params.weatherID >= 800:
            $(".description").append("<span>" + weatherLineObj.sunny + "</span>");
            insertIcon(params.weatherIcon);
            break;
        //snow
        case params.weatherID >= 600:
            $(".description").append("<span>" + weatherLineObj.snow + "</span>");
            insertIcon(params.weatherIcon);
            break;
        //rain
        case params.weatherID >= 300:
            $(".description").append("<span>" + weatherLineObj.rain + "</span>");
            insertIcon(params.weatherIcon);
            break;
        //thunderstorm
        case params.weatherID >= 200:
            $(".description").append("<span>" + weatherLineObj.thunderstorm + "</span>");
            insertIcon(params.weatherIcon);
            break;
    }
}

function insertIcon(iconID) {
    $(".icon").append("<img src = http://openweathermap.org/img/w/" + iconID + ".png " + ">");
}

function changeTemp() {

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