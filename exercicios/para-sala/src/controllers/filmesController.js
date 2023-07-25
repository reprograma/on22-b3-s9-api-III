const { request, response } = require("../app")
const filmesJson = require("../models/filmes.json")
const express = require("express")
const app = express()

app.use(express.json())

const getAll = (request, response) => {
    response.status(200).json([{
        "Filmes": filmesJson
    }])
}

const updateMovieById = (request, response) => {
    const idRequest = request.params.id 
    let movieRequest = request.body
    let findMovie = filmesJson.findIndex(movie => movie.id == idRequest)
//está removendo 1 elemento, a partir do index encontrado e adicionando o movieRequest no lugar
    filmesJson.splice(findMovie, 1, movieRequest)
    response.status(200).json([{
        "mensagem": "uptade. Filme atualizado",
        filmesJson
    }])
}

module.exports = {
    getAll,
    updateMovieById 
}

