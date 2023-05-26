const filmsController = require('../controllers/controllerFilms')
const express = require('express')
const router = express.Router()

router.get('/', filmsController.getAll) //exibindo todos os filmes
router.patch('/change/director/:id', filmsController.changeDirectorById)
router.patch('/change/runningtime/:id', filmsController.changeRunningTimeById)
router.put('/update/description/:id', filmsController.updateDescriptionById)
router.delete('/delete/movie/:id', filmsController.deleteMovieById)
router.get('/:id', filmsController.getFilmsById)

module.exports = router