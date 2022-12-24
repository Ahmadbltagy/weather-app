const { geocode } = require("../utils/geocode");
const { forcast } = require("../utils/forcast.js");

exports.getHelpPage = (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Ahmad El Beltagy",
  });
};

exports.getAboutPage = (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Ahmad El Beltagy",
  });
};

exports.getWeather = (req, res) => {
  if (!req.query.address)
    return res.send({
      error: "You must provide an address",
    });

  geocode(req.query.address, (err, { lat, lon } = {}) => {
    if (err) return res.send({ err });
    forcast(lat, lon, (err, { forcastData, location }) => {
      if (err) return console.log(err);
      res.send({
        forcast: forcastData,
        location,
        address: req.query.address,
      });
    });
  });
};

exports.getHomePage = (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Ahmad El Beltagy",
  });
};

exports.get404Page = (req, res) => {
  res.status(404).render("404", {
    title: "Page not found",
    name: "Ahmad El Beltagy",
  });
};
