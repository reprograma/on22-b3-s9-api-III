const filmesJson = require("../models/ghiblifilms.json")
const express = require("express")
const app = express()
app.use(express.json())


// Atualizando o filme do diretor pelo ID
const updateDirectorMovie = (req, res) =>{
    const idRequest = req.params.id
    let newDirector = req.body.director
    let findMovie = filmesJson.find(movie => movie.id == idRequest)

    findMovie.director = newDirector
    res.status(200).json([{
        'message': 'updated movie/filme atualizado',
        findMovie
    }])
}


// Atualizando a duração do filme pelo ID
const updateMovieByTime = (req, res) =>{
    const idRequest = req.params.id
    let newTime = req.body.running_time
    let findMovie = filmesJson.find(movie => movie.id == idRequest)

    findMovie.running_time = newTime
    res.status(200).json([{
        'message': 'updated movie/filme atualizado',
        findMovie
    }])
}

// Substituindo a descrição do filme pelo ID
const updateMovieDescription = (req, res) =>{
    const idRequest = req.params.id
    let movieRequest = req.body
    let findMovie = filmesJson.findIndex(movie => movie.id == idRequest)
    filmesJson.splice(findMovie, 1, movieRequest)
    res.status(200).json([{
        'message': 'updated description/descricao atualizada',
        filmesJson
    }])
}

// Deletando o filme pelo nome do diretor
const deleteMovieByProducer = (req, res) =>{
    const producerRequest = req.params.producer.toLocaleLowerCase()
    const deleteMovie = filmesJson.findIndex(movie => movie.producer.toLocaleLowerCase() == producerRequest)
    filmesJson.splice(deleteMovie, 1)

    res.status(200).json([{
        'message': 'movie deleted/filme deletado',
        'Deleted': producerRequest,
        filmesJson
    }])
}

// Pegando o filme pelo ID
const getMovieById = (req, res) =>{
    let idRequest = req.params.id
    let findMovie = filmesJson.find(movie => movie.id == idRequest)

    res.status(200).json([{
        'message': 'movie found/filme encontrado',
        findMovie
    }])
}

module.exports = {
    updateDirectorMovie,
    updateMovieByTime,
    updateMovieDescription,
    deleteMovieByProducer,
    getMovieById
}