const request = require('request');

const URL = 'http://api.weatherstack.com/current?access_key=8d70e6eac36e20855960ad9352fb67a3&query=37.6267,-122.4233&units=f';

request({ url: URL, json: true,  }, (error, response) => {
  const {temperature, feelslike, weather_descriptions } = response.body.current;
  console.log(`${weather_descriptions[0]}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out. `);
});

// Goal: Print a small forecast to the user
//
// 1. Print "It is currently 58.55 degrees out. It feels like 5 degrees out."
// 2. Test your work!
