const filmesControllers = require("../controllers/filmesController")
const express = require("express")
const router = express.Router()
//const {Router} = require("express") pode usar dessa forma ou como a de cima 

router.get("/catalogo", filmesControllers.getAll)
router.put("/update/:id", filmesControllers.updateMovieByID)
router.patch("/change/:id", filmesControllers.updateTitleByID)
router.delete("/delete/:id", filmesControllers.deleteMovieByID)
router.delete('/deletemovie/:title', filmesControllers.deleteMovieByTitle)



module.exports = router

















//Por onde começar as configurações:
//num1: server.js
//num2: app.js
//num3: models => Faz mais sentindo utilizar em banco de dados
//num4: routes => Definir rotas pode ajudar na lógica depois
//num5: controllers => Lógica de programação das rotas. Eu vou usar o models aqui, 
//mas ele já foi feito ali em cima.