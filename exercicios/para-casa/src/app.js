const express = require("express") 
const app = express() 
app.use(express.json()) 

const moviesRoutes = require("./routes/ghibliRoutes.js")

app.use("/ghiblifilms", moviesRoutes)


// exportando para usar o server.js
module.exports = app