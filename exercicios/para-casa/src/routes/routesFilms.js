const filmsController = require('../controllers/controllerFilms')
const express = require('express')
const router = express.Router()

router.get('/filmes', filmsController.getAll) //exibindo todos os filmes
router.patch('/change/director/:id', filmsController.updateDirectorById)
router.patch('/change/runningtime/:id', filmsController.updateRunningTimeById)




module.exports = router