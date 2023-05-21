const filmesController = require("../controllers/filmesController");
const express = require("express");

// const {Router} = require("express");
const router = express.Router();

router.get("/catalogo", filmesController.getAll);
router.put("/update/:id", filmesController.updateMovieById);
router.patch("/change/:id", filmesController.updateTitleById);
router.delete("/delete/:id", filmesController.deleteMovieById);
router.delete("/deleteMovie/:title", filmesController.deleteMovieByTitle);

module.exports = router;