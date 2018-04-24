const fetch = require('node-fetch');
const fs = require('fs');
const city = process.argv[2];
const API = (city) => {
    return "https://maps.googleapis.com/maps/api/geocode/json?address="+city+"&key=AIzaSyC1yij08I_WXT7S6SeND4sjOfE_x6-LDm8";
};
const getWeather = (lat, lng) => {
    return "https://api.darksky.net/forecast/31310dfb5c7a7cedcf99c445a6136c0b/"+lat+','+lng;
} ;


fetch(API(city))
    .then(response => response.json())
    .then(json => json.results[0].geometry.location)
    .then(values => fetch(getWeather(values.lat, values.lng))
            .then(response => response.json())
            .then(json => {
                fs.writeFileSync('weather.json', JSON.stringify(json, function(key, value){
                    if((key == "hourly") || (key == "daily") || (key == "flags") || (key == "time") ) return undefined;
                    return value;
                }, 2));
            })
    );