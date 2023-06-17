const express = require("express");
const controller = require("../controllers/filmesController");

const router = express.Router();

router.patch("/update/:id", controller.update);
router.put("/update/:id", controller.update);
router.delete("/:producer", controller.deleteMovies);
router.get("/:id", controller.getMovie)

module.exports = router;
