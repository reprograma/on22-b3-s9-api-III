// Imports /////////////////////////////////////////////////////
const movieController = require('../controllers/controller.js')
const express = require('express')
const router = express.Router()

// Routes //////////////////////////////////////////////////////
// GETs
router.get('/catalog/', movieController.getALL)
router.get('/:id', movieController.getMovieByID)
// PUTs
router.put('/update-movie/:id', movieController.updateMovieByID)
router.put('/update-description/:id', movieController.updateDescriptionByID)
// PATCHEs
router.patch('/change-title/:id', movieController.updateTitleByID)
router.patch('/change-director/:id', movieController.updateDirectorByID)
router.patch('/change-running-time/:id', movieController.updateRunningTimeByID)
// DELETEs
router.delete('/delete/:id', movieController.deleteByID)
router.delete('/delete/:title', movieController.deleteByTitle)
router.delete('/delete/:producer', movieController.deleteByProducer)

// Exports /////////////////////////////////////////////////////
module.exports = router