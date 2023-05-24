const express = require("express"); //importando o express
const app = express() //exeutando o express
app.use(express.json()) //uso o bodyparser

const filmesRoutes = require("./routes/filmesRoutes") //importa as rotas do filmes

app.use("/filmes", filmesRoutes) //criei uma rota raiz


//exportando para server.js
module.exports = app
