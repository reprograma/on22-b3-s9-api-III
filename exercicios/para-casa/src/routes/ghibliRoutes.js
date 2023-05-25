const ghibliController = require("../controllers/ghibliController")
const express = require("express")
const router = express.Router()

router.get("/ghiblifilms/:id", ghibliController.showAllMovies)
router.patch("/update/:id", ghibliController.updateDirectorByID)
router.patch("/change/:title", ghibliController.updateRunningTimeByTitle)
router.put("/movie/:id", ghibliController.updateTitleByID)
router.delete("/delete/:id", ghibliController.deleteMovieByProducer)


module.exports = router
