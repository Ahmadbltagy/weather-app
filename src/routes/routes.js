const express = require("express");

const appControllers = require("../controllers/controllers");

const router = express.Router();

router.get("/help", appControllers.getHelpPage);

router.get("/about", appControllers.getAboutPage);

router.get("/weather", appControllers.getWeather);

router.get("", appControllers.getHomePage);

router.get("*", appControllers.get404Page);

module.exports = router;
