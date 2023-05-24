const filmesController = require("../controllers/filmesController");
const express = require("express");
//const {Router} = require("express"); /*parte d express que vai organizar as rotas dentro de chaves porq está entrando no express e já está salvando as variávei*/
const router = express.Router()

router.get("/catalogo", filmesController.getAll); //getAll como vamos chamar a função no controller
router.put("/update/:id", filmesController.updateMovieByID)
router.patch("/change/:id", filmesController.updateTitleByID)
router.delete("/delete/:id", filmesController.deleteMovieByID)
router.delete("/deletemovie/:title", filmesController.deleteMovieByTitle)

module.exports = router;










// começa as configurações
//n1: server.js 
//n2: app.js
//n3: models (quando utilizar banco de dados)
//n4: definir as rotas
//n5: controller = lógica de programação para as rotas