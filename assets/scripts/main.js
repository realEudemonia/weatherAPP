/**
 * Created by jason on 4/9/17.
 */
//TODO find seven images to use with the weather changes API

var weatherLineObj = new Object(),
    sunny = "Cloud Nine", //800
    snow = "As white as snow", //600 - 622
    rain = "Raining cats and dogs", //300 - 321 && 500 - 531
    ice = "Brass monkey weather", // 611, 612, 906
    tornado = "Tempest in a teapot", // 900, 961
    thunderstorm = "Storm in a teacup", // 200 - 232
    cold = "Cold enough to freeze the balls off a brass monkey"; // 903




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