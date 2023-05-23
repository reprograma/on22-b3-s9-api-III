// Imports /////////////////////////////////////////////////////
const express = require('express')
const movieController = require('../controllers/controller.js')
const router = express.Router()

// Routes //////////////////////////////////////////////////////
// GETs
router.get('/catalogo', movieController.getALL)
router.get('/catalogo/:id', movieController.getMovieByID)
// PUTs
router.put('/update/:id', movieController.updateMovieByID)
router.put('/update/:id', movieController.updateDescriptionByID)
// PATCHEs
router.patch('/change/:id', movieController.updateTitleByID)
router.patch('/change/:id', movieController.updateDirectorByID)
router.patch('/change/:id', movieController.updateRunningTimeByID)
// DELETEs
router.delete('/delete/:id', movieController.deleteByID)
router.delete('/delete/:title', movieController.deleteByTitle)
router.delete('/delete/:producer', movieController.deleteByProducer)

// Exports /////////////////////////////////////////////////////
module.exports = router