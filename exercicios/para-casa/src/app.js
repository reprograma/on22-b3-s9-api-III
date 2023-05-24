//rotas e requisições (caminho principal tho)

const express = require('express')
const app = express()

//app vai usar o que? o express+body parser
app.use(express.json())

//rota de filmes
const moviesRoutes = require('./routes/moviesRoutes')

//main route
app.use('/movies', moviesRoutes)

module.exports = app