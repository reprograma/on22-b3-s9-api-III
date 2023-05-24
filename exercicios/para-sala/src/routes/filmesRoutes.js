const filmesController = require('../controllers/filmesController');
const express = require('express');

//const {Router} = require('express');
//alternativa:
const router = express.Router();

router.get('/catalogo', filmesController.getAll);

router.put('/update/:id', filmesController.updateMovieByID);

router.patch('/change/:id', filmesController.updateTitleByID);

router.delete('/delete/:id', filmesController.deleteMovieByID);

router.delete('/deletetitle/:title', filmesController.deleteMovieByTitle);

module.exports = router;



/**Como começar as configs:
 * 1- server.js
 * 2- app.js
 * 3- models (fará mais sentido ao utilizar Banco de Dados)
 * 4- rotas: filmesroutes.js - construir as rotas que serão usadas
 * 5- controllers: lógica de programação/algoritmo das rotas
 */