const express = require('express')
const movieController = require('../controllers/controllers.js')
const router = express.Router()

router.get('/catalogo', movieController.getALL)
router.get('/catalogo/:id', movieController.getByID)

router.put('/update/:id', movieController.updateMovieByID)
router.put('/update/:id', movieController.updateDescriptionByID)

router.patch('/change/:id', movieController.updateTitleByID)
router.patch('/change/:id', movieController.updateDirectorByID)
router.patch('/change/:id', movieController.updateRunningTimeByID)

router.delete('/delete/:id', movieController.deleteByID)
router.delete('/delete/:title', movieController.deleteByTitle)
router.delete('/delete/:producer', movieController.deleteByProducer)

module.exports = router