declare function require(name: string): any;
const request = require("request");

export const forcast = (latitude: number, longitude: number, cb: any) => {
  const url = `http://api.weatherstack.com/current?access_key=a32f5b4f35701f00a3b47ca4739c1323&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (err: any, { body }: any) => {
    if (err) cb("Unable to fetch data", undefined);
    else if (body.error) cb("Unable to fetch location");
    else {
      console.log(body.location.country);

      cb(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. There is ${body.current.precip}% chance of rain`
      );
    }
  });
};
