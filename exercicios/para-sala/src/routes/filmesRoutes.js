const filmesController = require("../controllers/filmesController") //usei ponto duas vezes para sair e entrar na pasta
const express = require("express") //chamando o express

//const {Router} = require("express") //buscando o livro(router) na biblioteca(express)
const router = express.Router()

router.get("/catalogo", filmesController.getAll)
router.put('/update/:id', filmesController.updateMovieByID)
router.delete('deletemovie/:title', filmesController.deleteMovieByTitle)

