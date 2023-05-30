const express = require("express") 
const app = express() 
app.use(express.json()) 

const filmesroutes = require("./routes/filmesroutes")

app.use("/ghiblifilms", filmesroutes) 
 
module.exports = app 