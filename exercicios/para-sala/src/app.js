const express = require("express") //importando o express
const app = express() // executo o express
app.use(express.json()) // uso o bodyparser

const filmesRoutes = require('./routes/filmesRoutes') //importa as rotas de filmes

app.use('/filmes', filmesRoutes)  //rota raiz



// exportando para usar no server.js
module.exports = app 