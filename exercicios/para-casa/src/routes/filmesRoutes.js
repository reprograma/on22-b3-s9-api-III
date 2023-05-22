const filmesController = require("../controller/controllers");
const express = require("express");
const router = express.Router();

router.patch("/director/:id", filmesController.updateDirectorByID);

router.patch("/runningTime/:id", filmesController.updateRunning_time);

router.put("/description/:id" , filmesController.updateDescriptionByID);

router.delete("/delete/:producer", filmesController.deleteMovieByProducer)

router.get("/movie/:id", filmesController.getByID)

module.exports = router;
