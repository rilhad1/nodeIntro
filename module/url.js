const { googleApiKey, darkSkyKey } = require('./keys');

const urlCoordinates = (city) => {
    return `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${googleApiKey}`;
};
const urlWeather = (lat, lng) => {
    return `https://api.darksky.net/forecast/${darkSkyKey}/${lat},${lng}`;
};

module.exports = {
    urlCoordinates,
    urlWeather
};