const filmesController = require("../controllers/filmesController")
const express = require("express")
//const {Router} = require("express")
const router = express.Router()

router.get('/catalogo', filmesController.getAll)
router.put('/update/:id', filmesController.updateMovieByID)
router.patch('/change/:id', filmesController.updateTitleByID)
router.delete('/delete/:id', filmesController.deleteMovieByID)
router.delete('/deletemovie/:title', filmesController.deleteByTitle)

module.exports = router;










//Por onde começar as configurações:
//n1: server.js
//n2: app.js
//n3: models(faz mais sentido com banco de dados)
//n4: routes = Definir rotas pode ajudar na logística depois
//n5: controllers = minha lógica de programação das rotas