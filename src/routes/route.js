const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const WeatherController = require("../controllers/weatherController")
const MemesController = require("../controllers/memesController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.get("/cowin/vaccineCenter",CowinController.vaccineCenter)

router.post("/cowin/getOtp", CowinController.getOtp)

//weather api
router.get("/weather", WeatherController.weather)

router.get("/temperature",WeatherController.temperature)

router.post("/sortTemperature",WeatherController.sortTemperature)

//memes api
router.get("/allMemes",MemesController.allMemes)

router.post("/createMemes",MemesController.createMemes)


// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;