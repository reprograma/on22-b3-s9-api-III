const ghibliController = require("../controllers/ghibliController")

const express = require("express")

const route = express.Router()

route.get("/catalogo", ghibliController.getALL)

route.get("/movie/:id", ghibliController.getGhibliByID)

route.patch("/change/:id", ghibliController.updateGhibliByDirector) 

route.patch("/change/running_time/:id", ghibliController.updateGhibliByRunning_time)

route.put("/update/:id", ghibliController.updateGhibliByDescription)

route.delete("/delete/producer", ghibliController.deleteGhibliByProducer)




module.exports = route 