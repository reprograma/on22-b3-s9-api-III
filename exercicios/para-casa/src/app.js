const express = require("express") //importa express
const app = express()//executa express
app.use(express.json())//faz bodyparse

const ghiblifilmsRoutes = require("./routes/giblifilmsRoutes")//importa routes e arquivo routes
app.use("/ghiblifilms",ghiblifilmsRoutes)//cria rota raiz



module.exports = app//exporta app