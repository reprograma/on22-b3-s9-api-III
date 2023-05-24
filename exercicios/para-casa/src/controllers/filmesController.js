const filmesGhibli = require("../models/ghiblifilms.json");
const express = require("express");
const app = express();

app.use(express.json())

const getAll = (req, res) => {
    res.status(200).json([{
        "filmes": filmesGhibli
    }])
}

const updateMovieByID = (req, res) => {
    const idRequest = req.params.id
    let movieRequest = req.body
    let findMovie = filmesGhibli.findIndex(movie => movie.id == idRequest)

    filmesGhibli.splice(findMovie, 1, movieRequest)
    res.status(200).json([{
        "message": "Updated movie",
        filmesGhibli
    }])
}

const updateTitleByID = (req, res) => {
    const idRequest = req.params.id
    let newTitle = req.body.title
    let findMovie = filmesGhibli.find(movie => movie.id == idRequest)

    findMovie.title = newTitle

    res.status(200).json([{
        "message": "the title movie was updated",
        findMovie
    }])
}

const deleteMovieByID = (req, res) => {
    const idRequest = req.params.id
    const deleteMovie = filmesGhibli.findIndex(movie => movie.id == idRequest)
    filmesGhibli.splice(deleteMovie, 1)

    res.status(200).json([{
        "message": "Deleted movie",
        "deleted": idRequest,
        filmesGhibli
    }])
}

const deleteMovieByTitle = (req, res) => {
    const idRequest = req.params.title.toLowerCase()
    const deleteMovie = filmesGhibli.findIndex(movie = movie.title.toLowerCase() == idRequest)
    filmesGhibli.slice(deleteMovie, 1)
    
    res.status(200).json([{
        "message": "deleted movie",
        "deleted": idRequest,
        filmesGhibli
    }])
}

module.exports = {
    getAll,
    updateMovieByID,
    updateTitleByID,
    deleteMovieByID,
    deleteMovieByTitle,
}