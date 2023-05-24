const filmeesController = require('../controllers/filmesController')
const express = require('express')

//const {Router} = require('express')
const router = express.Router()

router.get('/catalogo', filmeesController.getAll)


router.put('/update/:id', filmeesController.updateMovieById)

router.patch('/change/:id', filmeesController.updateTitleById)

router.delete('/delete/:id', filmeesController.deleteMovieById)

router.delete('/deletemovie/:title', filmeesController.deleteMovieByTitle)

module.exports = router


/** CONFIGURAÇÕES
 * n1: server.js
 * n2: app.js
 * n3: manualmente faz o models (quando utilizar bando de dados)
 * n4: routes (definir rotas para saber o que pretende usar)
 * n5: controllers (a lógica de programação das rotas)
*/