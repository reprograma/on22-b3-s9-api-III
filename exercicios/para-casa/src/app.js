const express = require("express")
const app = express()
app.use(express.json())

const routesGhibli = require("./Routes/routesGhibli")

app.use("/movies", routesGhibli)

module.exports = app