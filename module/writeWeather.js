const fs = require('fs');

const writeWeather = (json) => {
    let weather =  `In general, the weather is ${json.currently.summary}. 
The current temperature is  ${json.currently.temperature}. 
The humidity level is ${json.currently.humidity}. 
The wind speed is ${json.currently.windSpeed}.Pressure is ${json.currently.pressure}`;

    fs.writeFile("weather.txt", weather, err => err ? console.error(err) : 'all good');
}

module.exports = {
    writeWeather
};