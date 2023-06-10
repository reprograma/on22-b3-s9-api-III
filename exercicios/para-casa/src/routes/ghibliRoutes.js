const ghibliController = require("../controllers/ghibliControllers")
const express = require("express")
const route = express.Router()

route.get("/catalogo", ghibliController.getAll)
route.get("/movie/:id", ghibliController.getGhiblhiId)
route.patch("/change/director", ghibliController.updadeGhibliByDirector)
route.patch("/change/:id", ghibliController.updateGhibliByRunning_time)
route.put("/update/:id", ghibliController.updateGhibliByDescription)
route.delete("delete/producer", ghibliController.deleteGhibliByProducer)




module.exports = route



