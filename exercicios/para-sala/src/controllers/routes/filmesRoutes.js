const filmesController = require("../controllers/filmesController") // .. para acessar aquivos em outra pasta, á uma pasta de distancia

const express = require("express") // importando a biblioteca express

//const {Router} = require("express")
 // requerir o express nas rotas 
/**outro jeito de requerir o express nas rotas: */
 const router = express.Router()// neste caso Router é um "livro", um método dentro da biblioteca de express

 router.get("/catalogo", filmesController.getALL)

router.put("/update/:id", filmesController.updateMovieByID)

router.patch("/change/:id", filmesController.updateTitleByID)

router.delete("/delete/:id", filmesController.deleteMovieByID)

router.delete("/deletemovie/:title", filmesController.deleteMovieByTitle)


 module.exports = router



 /**  forma de configurar mais fácil da gaia]
  * n1: Server.js
  * n2: app.js
  * n3: models (faz mais sentido quando utilizar banco de dados)
  * n4: routers (definir todas as rotas)
  * n5: controllers (minhas lógicas de programações da rota)
 */