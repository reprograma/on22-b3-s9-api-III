const express = require("express")
const app = express() 
app.use(express.json()) 
const ghibliRoutes = require("./routes/ghibliRoutes")
app.use("/ghibli", ghibliRoutes) 

module.exports = app 