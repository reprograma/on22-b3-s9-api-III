const filmesControllers = require("../controllers/filmesController")
const express = require("express")
//const {Router} = require("express")//buscando o livro(router) na biblioteca(express)   
                    const router = express.Router()  // busca= bibioteca-->livro  
router.get("/catalogo", filmesControllers.getAll)
router.put('/update/:id', filmesControllers.updateMovieByID)
router.patch('/change/:id', filmesControllers.updateTitleByID)
router.delete("/delete/:id", filmesControllers.deleteMovieByID)
router.delete("/deletemovie/:title", filmesControllers.deleteMovieByTitle)



module.exports = router





/*por onde começar as configurações:
n1:server.js
n2: app.js
n3:models => quando utilizar banco de dados
n4:routes = definir rotas pode ajudar na logica depois
n5:controllers = logica de programa das rotas

*/