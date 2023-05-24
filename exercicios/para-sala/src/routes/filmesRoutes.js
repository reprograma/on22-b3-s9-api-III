const filmesController = require("../controllers/filmesController") //usei ponto duas vezes para sair e entrar na pasta
const express = require("express") //chamando o express

//const {Router} = require("express") //buscando o livro(router) na biblioteca(express)
const router = express.Router()

router.get("/catalogo", filmesController.getAll)
router.put("/update/:id", filmesController.updateMovieByID)
router.patch("/change/:id", filmesController.updateTitleByID)
router.delete("/delete/:id", filmesController.deleteMovieByID)
router.delete("deletemovie/:title", filmesController.deleteMovieByTitle)

module.exports = router //precisa ficar no final das rotas

//Caminho em ordem: 
//primeiro: server.js, 
//segundo: app.js, 
//terceiro: models (geralmente no banco de dados), 
//quarto: routes (rotas que vou usar),
//quinto: controllers (lógica de programação das rotas)