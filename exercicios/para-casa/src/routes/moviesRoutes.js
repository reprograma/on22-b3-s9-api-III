const express = require("express")
const controller = require("../controllers/moviesController")
const router = express.Router()


router.patch("/change/:id", controller.changeDirector)
//router.patch
router.put("/update/:id", controller.updateDescription)
//router.delete
//router.get


module.exports = router

