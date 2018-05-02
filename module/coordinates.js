const fetch = require('node-fetch');
const { getWeather } = require('./weather');
const { urlCoordinates } = require('./url');
const city = process.argv[2];

const getCoordinates = (city) => {
    fetch(urlCoordinates(city))
        .then(response => response.json())
        .then(json => json.results[0].geometry.location)
        .then(values => getWeather(values))
};

module.exports = {
    getCoordinates
};