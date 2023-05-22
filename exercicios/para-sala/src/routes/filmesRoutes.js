const filmesController = require('../controllers/filmesController')
const express = require('express')
const router = express.Router()

router.get('/catalogo', filmesController.getALL)
router.put('/update/:id', filmesController.updateMovieByID)
router.patch('/change/:id', filmesController.updateTitleByID)
router.delete('/delete/:id', filmesController.deleteByID)
router.delete('/delete/:title', filmesController.deleteByTitle);

module.exports = router