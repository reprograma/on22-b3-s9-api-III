const FilmsJson = require('../models/ghiblifilms.json')
const express = require('express')
const app = express()
app.use(express.json())

const getAll = (request, response) => {
    response.status(200).json([{
        'filmes': FilmsJson
    }])
}

const changeDirectorById = (request, response) => {
    const idRequest = request.params.id
    let newDirector = request.body.director
    let movie = FilmsJson.find(movie => movie.id == idRequest)
    
    movie.director = newDirector
    response.status(200).json([{
        'message': 'The director field has been updated',
        movie
    }])
}

const changeRunningTimeById = (request, response) => {
    const idRequest = request.params.id
    let newRunningTime  = request.body.running_time
    let movie = FilmsJson.find(movie => movie.id == idRequest)

    movie.running_time = newRunningTime
    response.status(200).json([{
        'message': 'The runtime has been updated',
        movie
    }])
}

const updateDescriptionById = (request, response) => {
    const idRequest = request.params.id
    let newDescription = request.body.description
    let movie = FilmsJson.find(movie => movie.id == idRequest)
    movie.description = newDescription
    
    response.status(200).json([{
        'message': "update movie",
        movie
    }])

}

const deleteMovieById = (request, response) => {
    const id = request.params.id
    let movie = FilmsJson.find(movie => movie.id == id)
    FilmsJson.splice(movie, 1)

    response.status(200).json([{
        'message': 'Deleted Movie',
        'Deleted': id,
        FilmsJson
    }])
}

const getFilmsById = (request, response) => {
    const id = request.params.id
    let movie = FilmsJson.find(movie => movie.id == id)
    console.log(movie)
    response.status(200).json([{
        'message': 'tudo ok',
        movie
    }])
}



module.exports = {
    getAll,
    changeDirectorById,
    changeRunningTimeById,
    updateDescriptionById,
    deleteMovieById,
    getFilmsById
}