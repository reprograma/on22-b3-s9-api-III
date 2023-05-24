const filmesControllers = require("../controllers/filmesController")
const express = require("express")
//const {Router} = require("express")
const router = express.Router()

router.get("/catalogo", filmesControllers.getAll)
router.put("/update/:id", filmesControllers.updateMovieById)
router.patch("/change/:id", filmesControllers.updateTitleById)
router.delete("/delete/:id", filmesControllers.deleteMovieById)
router.delete("/deletemovie/:title", filmesControllers.deleteMovieByTitle)



module.exports = router



// Por onde começar as configurações:
//n1: server.js
//n2: app.js
//n3: models(quando utilizar o banco de dados)
//n4: routes (definir rotas pode ajudar na lógica depois)
//n5: controllers (lógica de programação das rotas)