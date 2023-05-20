const express = require("express") //importando o express
const app = express() // executo o express
app.use(express.json()) // uso o bodyparser

const filmesRoutes = require("./routes/filmesRoutes") //importando os filmes do routes

app.use("/filmes", filmesRoutes) //criei uma rota raiz


// exportando para usar o server.js
module.exports = app 