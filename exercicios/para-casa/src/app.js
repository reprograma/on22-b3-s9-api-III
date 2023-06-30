const express = require("express") //importando o express
const app = express() // executo o express
app.use(express.json()) // uso o bodyparser

const routesGhibli = require("./routes/routesGhibli") //importando os filmes do routes Ghibli

app.use("/filmesGhibli", routesGhibli) //criei uma rota raiz pro rotas Ghibli


module.exports = app // exportando para usar o server.js