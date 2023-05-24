const filmesController = require("../controllers/filmesController")
const express = require ("express")
//const {router} = require ("express") Outra forma de chamar o router
const router = express.Router()

router.get("/catalogo", filmesController.getAll)
router.put('/update/:id', filmesController.updateMovieByID)
router.patch("/change/:id", filmesController.updateTitleByID)
router.delete('/delete/:id', filmesController.deleteByID)
router.delete('/deletemovie/:title',filmesController.deleteMovieByTitle)

module.exports = router


//n1 - server.js(por onde iniciar)
//n2 app - 
//n3 models(faz mais sentido com banco de dados)
//n4 routes - Definir rotas pode ajudar na logica depois
//n5 controlles - Logica de programação das rotas

