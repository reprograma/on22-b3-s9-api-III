// Imports /////////////////////////////////////////////////////
const express = require("express")
const filmesRoutes = require('./src/routers/routes')

// App config //////////////////////////////////////////////////
const app = express()
app.use(express.json()) // I used the native Express middleware to parse to JSON
app.use('/filmes', filmesRoutes)

// Exports /////////////////////////////////////////////////////
module.exports = app