const filmesController = require("../controllers/filmesController")
const express = require("express")
//{Router} => as chaves servem como spread para não precisar colocar o caminho todo do express para o router
const router = express.Router()
//const {Router} = require("express")

router.get("/catalogo", filmesController.getAll)
router.put("/update/:id", filmesController.updateFilmById)
router.patch("/modify/:id", filmesController.updateTitleById)
router.delete("/delete/:id", filmesController.deleteFilmById)
router.delete("/deletemovie/:title", filmesController.deleteMovieByTitle)




module.exports = router








//1 => server.js
//2 => app.js
//3 => models (quando utilizar banco de dados)
//4 => rotas
//5 => controllers (logica de programaçãod das rotas)