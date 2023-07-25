const filmesControllers = require ("../controllers/filmesController")
const express = require("express")
//const {Router} = require("express")
const router = express.Router()

router.get("/catalogo", filmesControllers.getAll)
router.put("/update/:id", filmesControllers.updateMovieById)
router.patch("/change/:id", filmesControllers.updateTituloByID)


module.exports = router





//Por onde começar as configurações:
//n1: server.js
//n2: app.js
//n3: model - quando utilizar banco de dados
//n4: routes - definir rotas para auxiliar lógica de programação
//n5: controllers - lógica das minhas rotas