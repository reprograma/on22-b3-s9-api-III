const filmesControllers = require("../controllers/filmesController")
const express = require("express")
//const {Router}= require("express")
const router = express.Router()

router.get("/catalogo", filmesControllers.getAll)
router.put("/update/:id", filmesControllers.updateMovieByID)
router.patch("/change/:id",filmesControllers.changeTitleByID)
router.delete("/delete/:id",filmesControllers.deleteMovieByID)
module.exports = router


//ONDE COMEÇAM AS CONFIGURAÇOES
//1-server.js
//2-app.js
//3-models(FAZ MAS SENTIDO COM BANCO DE DADOS)
//4-routes.js(rotas definidas)
//5-controllers(logica de programaçao das rotas)

