const express = require("express")
const app = express() 
app.use(express.json()) 

const ghibliFilmsRoutes = require('./routes/ghibliFilmsRoutes')
app.use("/movie", ghibliFilmsRoutes)        

module.exports = app