const fetch = require('node-fetch');
const fs = require('fs');
const city = process.argv[2];


const urlCoordinates = (city) => {
    return "https://maps.googleapis.com/maps/api/geocode/json?address=" + city + "&key=AIzaSyC1yij08I_WXT7S6SeND4sjOfE_x6-LDm8";
};
const urlWeather = (lat, lng) => {
    return "https://api.darksky.net/forecast/31310dfb5c7a7cedcf99c445a6136c0b/" + lat + ',' + lng;
};

fetch(urlCoordinates(city))
    .then(response => response.json())
    .then(json => json.results[0].geometry.location)
    .then(values =>
        fetch(urlWeather(values.lat, values.lng))
        .then(response => response.json())
        .then(json => {
            let weather = 'In general, the weather in ' + city + ' is ' + json.currently.summary + '.' +
                ' The current temperature is ' + json.currently.temperature + '.' +
                ' The humidity level is ' + json.currently.humidity + '.' +
                ' The wind speed is ' + json.currently.windSpeed + '.' +
                ' Pressure is' + json.currently.pressure;
            fs.writeFileSync('weather.json', JSON.stringify(json,
                function(key, value) {
                    if ((key == "hourly") ||
                        (key == "daily") ||
                        (key == "flags") ||
                        (key == "time")) return undefined;
                    return value;
                }, 2));
            fs.writeFile("weather.txt", weather, function(err) {
                if (err) {
                    return console.error(err);
                }
            })
        })
    );