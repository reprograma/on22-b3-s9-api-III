// Imports /////////////////////////////////////////////////////
const express = require('express')
const movieController = require('../controllers/controller.js')
const router = express.Router()

// Routes //////////////////////////////////////////////////////
// GETs
router.get('/catalog', movieController.getALL)
router.get('/catalog/:id', movieController.getMovieByID)
// PUTs
router.put('/update/movie/:id', movieController.updateMovieByID)
router.put('/update/description/:id', movieController.updateDescriptionByID)
// PATCHEs
router.patch('/change/title/:id', movieController.updateTitleByID)
router.patch('/change/director/:id', movieController.updateDirectorByID)
router.patch('/change/running-time/:id', movieController.updateRunningTimeByID)
// DELETEs
router.delete('/delete/id/:id', movieController.deleteByID)
router.delete('/delete/title/:title', movieController.deleteByTitle)
router.delete('/delete/producer/:producer', movieController.deleteByProducer)


// Exports /////////////////////////////////////////////////////
module.exports = router