const filmesJson = require("../models/filmes.json")
const express = require("express")
const app = express()
app.use(express.json())

const getAll = (req, res) => {
    res.status(200).json([{
        'filmes': filmesJson
    }])
}

module.exports = {
    getAll,
}