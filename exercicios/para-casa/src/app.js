const express = require("express"); 
const app = express() 
app.use(express.json()) 

const filmesRoutes = require("./routes/filmesRoutes") 

app.use("/filmes", filmesRoutes) 

module.exports = app