const filmesController = require("../controllers/filmesController")
const express = require("express")

const router = express.Router()

router.patch("/change/:id", filmesController.updateDirectorMovie)
router.patch("/changeTime/:id", filmesController.updateMovieByTime)
router.put("/update/:id", filmesController.updateMovieDescription)
router.delete("/delete/:producer", filmesController.deleteMovieByProducer)
router.get("/get/:id", filmesController.getMovieById)

module.exports = router