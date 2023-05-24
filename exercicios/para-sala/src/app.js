const express = require("express") // Importando o Express
const app = express() // Inicializando o Express
app.use(express.json()) // Usando o middleware nativo do Express para fazer o parse em JSON

const filmesRoutes = require('../../para-sala/src/routes/filmesRoutes')

app.use('/filmes', filmesRoutes) // Montando as rotas de filmes sob o prefixo /filmes

module.exports = app // Exportando o app para ser usado no server.js