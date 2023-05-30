const express = require("express") //importando o express
const app = express() // executo o express
app.use(express.json()) // uso o bodyparser

const filmesroutes = require("./routes/filmesRoutes") //importa as rotas de filme

app.use("/filmes", filmesroutes) // criei a rota raiz


// exportando para usar o server.js
module.exports = app 