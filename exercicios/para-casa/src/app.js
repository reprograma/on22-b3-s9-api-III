const express = require("express") //importando o express
const app = express() // executo o express
app.use(express.json()) // uso o bodyparser

const ghibliRoutes = require('./routes/ghibliRoutes') // importa as rotas de filmes
app.use("/GhibliFilmes", ghibliRoutes) //criei uma rota raiz



// exportando para usar o server.js
module.exports = app 