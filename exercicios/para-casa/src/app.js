const express = require('express')
const app = express()
app.use(express.json())

const filmesRouter = require('./routes/filmesRoutes')

app.use('/filmes' , filmesRouter)

module.exports= app