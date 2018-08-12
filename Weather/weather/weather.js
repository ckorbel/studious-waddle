const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.forecast.io/forecast/af1bc7bc9383706a75b93add620ff23d/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather.');
        }
    });
};

module.exports.getWeather = getWeather;



