const filmesController = require("../controllers/filmesController");
const express = require("express");
const router = express.Router()

router.get("/catalogo", filmesController.getAll)
router.put("/update/:id", filmesController.updateMovieByID)
router.patch("/change/:id", filmesController.updateTitleByID)
router.delete("/delete/:id", filmesController.deleteMovieByID)
router.delete("deletemovie/:title", filmesController.deleteMovieByTitle)

module.exports = router;