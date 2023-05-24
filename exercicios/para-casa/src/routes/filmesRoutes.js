const filmesControllers = require("../controllers/filmesControllers")
const express = require("express")
//const {Router} = require("express")
const router = express.Router()

router.get("/catalogo", filmesControllers.getAll)

//Rota PATCH que altere o campo director:

router.patch("/change/:id", filmesControllers.updateDirectorById)

//Rota PATCH que altere running_time:

router.patch("/change/runningtime/:id", filmesControllers.updateRunningTimeById)

//Rota PUT UPDATE description:

router.put("/update/:id", filmesControllers.updateMovieById)

//Rota DELETE que exclua o FILME pelo PRODUTOR

router.delete("/deletemovie/:producer", filmesControllers.deleteMovieByProducer)


module.exports = router