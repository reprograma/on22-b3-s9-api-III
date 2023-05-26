const express = require("express") //importando o express
const app = express() // executo o express
app.use(express.json()) // uso o bodyparser

const filmesRoutes = require("./routes/filmesRoutes")// IMPORTA ROTAS DE FILMES
app.use("/filmes",filmesRoutes)// ROTA RAIZ





// exportando para usar o server.js
module.exports = app 