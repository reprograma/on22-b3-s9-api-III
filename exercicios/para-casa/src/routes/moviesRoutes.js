const moviesController = require('../controllers/moviesController')
const express = require('express')
const router = express.Router()

router.get('/catalogue', moviesController.getAll)

router.patch('/update/:director', moviesController.updateDirector)

router.patch('/change/:id', moviesController.updateRunning_timeById)

router.put('/description/:id', moviesController.updateDescriptionById)

router.delete('/delete/:producer', moviesController.deleteByProducer)

router.get('/find/:id', moviesController.findById)

module.exports = router