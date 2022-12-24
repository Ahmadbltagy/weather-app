const request = require("request");
// cb(error, data);

exports.geocode = (countryName, cb) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${countryName}.json?access_token=pk.eyJ1IjoiYWhtYWRibHRhZ3kiLCJhIjoiY2t5bzNrOHVmMGltejJ3bjk0cXBscjZpMiJ9.6fzXQoxSJW0Cvr7BH7NcvA&limit=1`;

  request({ url, json: true }, (err, res, body) => {
    if (err) cb("Unabel to fetch data", undefined);
    else if (body.error) cb("Unable to fetch location", undefined);
    else
      cb(undefined, {
        lat: body.features[0].center[1],
        lon: body.features[0].center[0],
      });
  });
};
