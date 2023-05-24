const filmesController = require("../controllers/filmesController")
const express = require ("express")
//const {router} = require ("express") Outra forma de chamar o router
const router = express.Router()

router.patch("/change/:id", filmesController.updateDirectorByID)
router.patch("/change/running_time/:id", filmesController.updateRunningTimeByID)
router.put('/update/:id', filmesController.updateDescriptionByID)
router.delete('/deletemovie/:producer',filmesController.deleteMovieByProducer)
router.get('/:id',filmesController.getMovieByID)

module.exports = router
