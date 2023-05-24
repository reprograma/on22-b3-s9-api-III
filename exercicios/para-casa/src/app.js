const express = require("express") // importando express
const app = express() // executando express
app.use(express.json()) // uso o bodyparser

const filmesRoutes = require("./routes/filmesRoutes") // importa a rota de filmes

app.use("/filmes", filmesRoutes) // criei uma rota raiz para os filmes


// exportando para usar o server.js
module.exports = app