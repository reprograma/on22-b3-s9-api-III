const ControllerGhibli = require("../controllers/ControllerGhibli")
const express = require("express")
const router = express.Router()

router.get("/catalogo", ControllerGhibli.getAll)

module.exports = router

router.patch('/update-director/:id', ControllerGhibli.updateDirector)
router.patch('/change-running_time/:id', ControllerGhibli.updateRunningTime)
router.put('/updated-description/:id', ControllerGhibli.updateDescription)
router.delete('/delete-movie/:producer', ControllerGhibli.deleteFilm)
router.get('/movie/:id', ControllerGhibli.getFilmById)
