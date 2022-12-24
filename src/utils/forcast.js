const request = require("request");

exports.forcast = (latitude, longitude, cb) => {
  const url = `http://api.weatherstack.com/current?access_key=a32f5b4f35701f00a3b47ca4739c1323&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (err, { body }) => {
    if (err) cb("Unable to fetch data", undefined);
    else if (body.error) cb("Unable to fetch location", undefined);
    else {
      cb(undefined, {
        forcastData: `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. There is ${body.current.precip}% chance of rain`,
        location: `${body.location.region}, ${body.location.name}, ${body.location.country}`,
      });
    }
  });
};
