const filmesJson = require('../models/filmes.json')
const express = require('express')
const app = express()

//

const getALL = (req, res) => {
    res.status(200).json([{
        'filmes': filmesJson
    }])
}

//

const updateMovieByID = (req, res) => {
    const idRequest = req.params.id
    let movieRequest = req.body
    let foundMovie = filmesJson.findIndex(movie => movie.id === idRequest)
    filmesJson.splice(foundMovie, 1, movieRequest)

    res.status(200).json([{
        'message': 'updated movie',
        filmesJson
    }])
}

//

const updateTitleByID = (req, res) => {
    const idRequest = req.params.id
    let newTitle = req.body.title
    let foundMovie = filmesJson.findIndex(movie => movie.id === idRequest)
    filmesJson[foundMovie].title = newTitle

    res.status(200).json([{
        'message': 'updated title',
        foundMovie
    }])
}

//

const deleteByID = (req, res) => {
    const idRequest = req.params.id
    const deletedMovie = filmesJson.findIndex(movie => movie.id === idRequest)
    filmesJson.splice(deletedMovie, 1)

    res.status(200).json([{
        "message": "Movie deleted",
        "deleted": idRequest,
        filmesJson
    }])
}

//

const deleteByTitle = (req, res) => {
    const titleRequest = req.params.title.toLowerCase()
    const deleteMovie = filmesJson.findIndex(movie => movie.title.toLowerCase() === titleRequest)
    filmesJson.splice(deleteMovie, 1)

    res.status(200).json([{
        "message": "Movie deleted",
        "deleted": titleRequest,
        filmesJson
    }])
}

//

module.exports = {
    getALL,
    updateMovieByID,
    updateTitleByID,
    deleteByID,
    deleteByTitle
}