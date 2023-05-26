const ghibliController = require("../controller/ghibliController")
const express = require("express")

const router = express.Router()

router.get("/movies",ghibliController.getAll)
router.get("/movies/:id",ghibliController.filmeById)

module.exports = router
