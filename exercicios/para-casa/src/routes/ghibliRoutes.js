const ghibliControllers = require("../controllers/ghibliControllers")
const express = require("express")
const router = express.Router()

router.get("/get/:id", ghibliControllers.getByID)
router.put("/update/:id", ghibliControllers.updateDescriptionByID)
router.patch("/change/:id", ghibliControllers.changeDirectorByID)
router.patch("/alter/:id", ghibliControllers.alterRunning_TimeByID)
router.delete("/delete/:id", ghibliControllers.deleteProducerByID)


module.exports = router


