const controller = require('../controllers/filmesController')

const express = require('express') 
const router = express.Router()

router.get("/catalogo", controller.getAll)
router.patch("/update/:id", controller.updateTitle)
router.put("/change/:id", controller.updateMovie)
router.delete("/delete/:id", controller.deleteFilme)
router.delete("/delete/title/:title", controller.deleteFilmePorTitulo)

module.exports = router