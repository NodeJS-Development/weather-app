const { url } = require('inspector');
const request = require('request');

const URL = 'http://api.weatherstack.com/current?access_key=8d70e6eac36e20855960ad9352fb67a3&query=37.6267,-122.4233';

request({ url: URL }, (error, response) => {
  const data = JSON.parse(response.body);

  console.log(data.current);
});
