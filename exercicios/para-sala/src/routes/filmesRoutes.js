const filmesController = require("../controllers/filmesController")
const express = require("express")
//const {router} = require("express")
const router = express.Router() 

router.get('/catalogo', filmesController.getAll)
router.put('/update/:id', filmesController.updateFilmByID)
router.patch('/change/:id', filmesController.updateTitleByID)
router.delete('/delete/:id', filmesController.deleteFilmByID)
router.delete('/deletefilm/:title', filmesController.deleteFilmByTitle)
module.exports = router










//Por onde comecar as configuracoes:
//n1: server.js
//n2: app.js
//n3: modeils => Quando utilizar banco de dados
//n4: routs = Definir rotas pode ajudar na logica depois
//n5: controllers = Logicca de programacao das rotas