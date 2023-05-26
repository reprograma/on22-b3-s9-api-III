//importar controllers
const ghiblifilmsControllers = require("../controllers/ghiblifilmsControllers")
//requerir o express
const express = require("express")
// usar o router do express
const router = express.Router()
//começar as rotas
//criar uma rota patch que altere o campo diretor
router.patch("/change/:id",ghiblifilmsControllers.updateDirectorByID)
//criar rota patch que altere o running_time
router.patch("/update/:id",ghiblifilmsControllers.updateRunningTimeByID)
//criar uma rota put
router.put("/alterar/:id",ghiblifilmsControllers.putByID)
//criar uma rota delete que exclua o filme pelo producer
router.delete("/delete/:producer",ghiblifilmsControllers.deleteFilm)
//criar uma rota de getByID
router.get("/:id",ghiblifilmsControllers.getByID)




module.exports = router