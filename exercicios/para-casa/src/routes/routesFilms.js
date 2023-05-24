const filmsController = require('../controllers/controllerFilms')
const express = require('express')
const router = express.Router()

router.get('/filmes', filmsController.getAll) //exibindo todos os filmes





module.exports = router