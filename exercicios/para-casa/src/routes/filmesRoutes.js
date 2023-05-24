const filmesController = require("../controllers/filmesController")
const express = require("express")

const router = express.Router()

router.get('/catalogo', filmesController.getAll)
router.put('/update/:id', filmesController.updateDescription)
router.patch('/mudar/:id', filmesController.updateMovieByDirector)
router.patch('/change/:id', filmesController.updateMovieByRT)
router.delete('/delete/:producer', filmesController.deleteMovieByProducer)
router.delete('/deletemovie/:title', filmesController.deleteByTitle)


module.exports = router;