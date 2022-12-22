const request = require('request');

const URL = 'http://api.weatherstack.com/current?access_key=8d70e6eac36e20855960ad9352fb67a3&query=37.6267,-122.4233&units=f';

request({ url: URL, json: true, }, (error, response) => {

  if (error) {
    console.log('Unable to connect to weather service!');
  } else if (response.body.error) {
    console.log('Unable to find location');
  } else {

    const { temperature, feelslike, weather_descriptions } = response.body.current;
    console.log(`${weather_descriptions[0]}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out. `);

  }

});

// Goal: handle errors for geocoding request
//
// 1. Setup an error handler for low-level errors
// 2. Test by disabling network request and running the app
// 3. Setup error handling for no matching results
// 4. Tst by altering the search term and running the app

const mapboxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiYmdhcmNpYTk1IiwiYSI6ImNsYnphMXJ1MjB2cWs0MG1ucG83ZjFkenUifQ.niRQeK43TLuCs342_E73Vg&limit=1';
request({ url: mapboxURL, json: true }, (error, response) => {

  if (error) {
    console.log('Unable to connect to geolocation service!');
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location. Try another search.');
  } else {
    const { center } = response.body.features[0];
    console.log(`Latitude: ${center[1]} - Longitude: ${center[0]}`);
  }
});