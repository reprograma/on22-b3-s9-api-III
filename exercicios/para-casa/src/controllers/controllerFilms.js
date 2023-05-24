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

const updateDirectorById = (request, response) => {
    const idRequest = request.params.id
    let newDirector = request.body.director
    let movie = FilmsJson.find(movie => movie.id == idRequest)
    
    movie.director = newDirector
    response.status(200).json([{
        'message': 'The director field has been updated',
        movie
    }])
}

const updateRunningTimeById = (request, response) => {
    const idRequest = request.params.id
    let newRunningTime  = request.body.running_time
    let movie = FilmsJson.find(movie => movie.id == idRequest)

    movie.running_time = newRunningTime
    response.status(200).json([{
        'message': 'The runtime has been updated',
        movie
    }])
}


module.exports = {
    getAll,
    updateDirectorById,
    updateRunningTimeById
}