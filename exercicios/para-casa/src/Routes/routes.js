const ghibliFilmesController = require("../controllers/ghibliControllers");
const express = require("express");
const router = express.Router();

router.get("/catalogo", ghibliFilmesController.getAll);
router.get("catalogo/:id", ghibliFilmesController.ghibliFilmById);
// router.patch("/change/:director", ghibliFilmesController.updateDirectorById);


module.exports = router;
