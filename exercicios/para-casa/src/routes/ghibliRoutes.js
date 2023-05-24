const filmesController = require("../controller/controller")
const express = require("express")

const router = express.Router()

router.patch("/update/:id", filmesController.updateDirectorById)
router.patch("/updatetime/:id", filmesController.updateRunningTimeById)
router.put("/updatedescription/:id", filmesController.updateDescriptionById)
router.delete("/deletefilm/:producer", filmesController.deleteFilmByProducer)
router.get("/film/:id", filmesController.getFilmById)

module.exports = router