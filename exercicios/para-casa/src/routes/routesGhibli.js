const controllerGhibli = require("../controllers/controllerGhibli")
const express = require("express")
const router = express.Router()

router.get("/catalogo", controllerGhibli.getAll)
router.get("/catalogo/:id", controllerGhibli.filmByID)
router.put("/update/:id", controllerGhibli.updateDescriptionByID)
router.patch("/change/:id", controllerGhibli.updateFilmByDirector)
router.patch("/change/runningTime/:id", controllerGhibli.updateFilmByRunningTime)
router.delete("/delete/:producer", controllerGhibli.deleteFilmByProducer)

module.exports = router

