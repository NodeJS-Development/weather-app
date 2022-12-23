const request = require("request");

const forecast = (latitude, longitude, cb) => {
  const url = `http://api.weatherstack.com/current?access_key=8d70e6eac36e20855960ad9352fb67a3&query=${latitude},${longitude}}`;

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      cb('Unable to connect to weather service!');
    } else if (body.error) {
      cb('Unable to find location');
    } else {
      const { temperature, feelslike, weather_descriptions } = body.current;
      cb(undefined, `${weather_descriptions[0]}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out. `);
    }
  });


}

module.exports = forecast;