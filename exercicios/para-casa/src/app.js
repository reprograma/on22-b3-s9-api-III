const express = require('express')
const app = express()
app.use(express.json())

const routesFilms = require('./routes/routesFilms')

app.use('/filmes', routesFilms)

module.exports = app