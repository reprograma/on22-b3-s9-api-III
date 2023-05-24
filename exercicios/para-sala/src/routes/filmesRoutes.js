const filmesController = require("../controllers/filmesController")
const express = require("express")
//const {Router} = require("express")
const router = express.Router()

router.get("/catalogo", filmesController.getAll)
router.put("/update/:id", filmesController.updateMovieByID)
router.patch("/change/:id", filmesController.updateByTitle)
router.delete("/delete/:id", filmesController.deleteById)
router.delete("/deleteMovie/:title", filmesController.deleteByTitle)

module.exports = router











// Por onde começar as configurações:
 //n° 1 - server.js
 //n° 2 - app.js
 //n° 3 - models(faz mais sentido utilizando banco de dados)
 //n° 4 - definir rotas pode ajudar na logica de programaçao
 //n° 5 - controllers = lógica de programação das rotas
