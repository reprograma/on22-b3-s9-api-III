const ghiblifilmsControllers = require("../controllers/ghiblifilmsControllers")
const express = require("express")
const router = express.Router()   

router.get('/movies/:id', ghiblifilmsControllers.getById)
router.delete('/deletemovie/:producer', ghiblifilmsControllers.deleteMovieByProducer)
router.put('/update/:description', ghiblifilmsControllers.updateByDescription)
router.patch('/change/:running_time', ghiblifilmsControllers.updateRunningTime)
router.patch('/changer/:director', ghiblifilmsControllers.updateByDirector)

module.exports = router