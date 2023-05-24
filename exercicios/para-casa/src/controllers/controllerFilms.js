const FilmsJson = require('../models/ghiblifilms.json')
const express = require('express')
const app = express()
app.use(express.json())

//Exibir todos os filmes
const getAll = (request, response) => {
    response.status(200).json([{
        'filmes': FilmsJson
    }])
}



module.exports = {
    getAll
}