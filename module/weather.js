const fetch = require('node-fetch');
const { urlWeather } = require('./url');
const { writeWeather } = require('./writeWeather');

const getWeather = (values) => {
    fetch(urlWeather(values.lat, values.lng))
        .then(response => response.json())
        .then(json => writeWeather(json))
};

module.exports = {
    getWeather
};