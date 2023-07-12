const express = require("express")
const app = express()
app.use(express.json())

const moviesRoutes = require("./routes/moviesRoutes")
app.use("/movies", moviesRoutes)

module.exports = app