const express = require("express") 
const app = express() 
app.use(express.json()) 

const ghibliRoutes = require("./routes/ghibliRoutes") 

app.use("/filmes", ghibliRoutes) 




module.exports = app 