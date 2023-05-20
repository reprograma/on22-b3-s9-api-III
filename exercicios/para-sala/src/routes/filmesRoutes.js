const filmesController = require("../controllers/filmesController")
const express = require("express")
//const {Router} = require("express")
const router = express.Router()

router.get('/catalogo', filmesController.getAll)
router.put('/update/:id', filmesController.updateMovieByID)
router.patch('/change/:id', filmesController.updateTitleByID)
router.delete('/delete/:id', filmesController.deleteMovieByID)


module.exports = router












//Por onde começar as configurações:
//n1: server.js
//n2: app.js
//n3: models => Quando utilizar banco de dados
//n4: routes = Definir rotas pode ajudar na logica depois
//n5: controllers = Logica de programação das rotas