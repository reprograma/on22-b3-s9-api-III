const filmesController = require("../controllers/filmesController");
const express = require("express");
const router = express.Router(); //o router é como se quisesse pegar um livro que esta dentro da biblioteca(expres).  pode ser também const {Router} = require("express"), o bom das chaves é que pode chamar mais de um livro, usa a chaves só pra pegar ele.

router.get("/catalogo", filmesController.getAll); //getAll significa pegar tudo

router.put("/update/:id", filmesController.updateMovieByID); //update = atualizar
//vai auterar só o id e deixar só ele

router.patch("/change/:id", filmesController.updateTitleByID); //alterar titulo do filme

router.delete("/delete/:id", filmesController.deleteMovieByID)

router.delete("deletemovie/:title", filmesController.deletefilmByTitle)

module.exports = router;

/**
 * por onde comecar as configuraçoes
 * n1: server.js
 * n2: app.js
 * n3: models => qaundo utilizar bancos de dados
 * n4: eoutes => difinir rotas pode ajudar na logica depois
 * n5: controllles => minha logica de programaçao das rotas
 */
