const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;




axios.get(geocodeUrl)
    .then((res) => {
        if (res.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable to find that address.');
        }
        var lat = res.data.results[0].geometry.location.lat;
        var lng = res.data.results[0].geometry.location.lng;
        var weatherUrl = `https://api.forecast.io/forecast/af1bc7bc9383706a75b93add620ff23d/${lat},${lng}`;
        console.log(res.data.results[0].formatted_address);
        return axios.get(weatherUrl)
            .then((res) => {
                var temperature = res.data.currently.temperature;
                var apparentTemperature = res.data.currently.apparentTemperature;
                console.log(`its currently ${temperature} and it feels like ${apparentTemperature}`);
            })
            .catch((err) => {
                console.log(err);
            });
    }).catch((err) => {
        if (err.code === 'ENOTFOUND') {
            console.log('unable to connect to API servers');
        } else {
            console.log(err.message);
        }
    })
