const ghibliFilms = require("../models/ghibliFilms.json")
const express = require("express")
const app = express()
app.use(express.json())

const getAll = (req, res) => {
    res.status(200).json([{
        "filmes":ghibliFilms
    }])
}

const updateDirectorById = (req, res) => {
    const idRequest = req.params.id 
    let newDirector = req.body.director 
    let findMovie = ghibliFilms.find(movie => movie.id == idRequest)  
    
    findMovie.director = newDirector
    res.status(200).json([{
        "message": "Updated director",
        findMovie
    }])
}

const updateRunningTimeById = (req, res) => {
    const idRequest = req.params.id 
    let newRunningTime = req.body.running_time 
    let findMovie = ghibliFilms.find(movie => movie.id == idRequest) 
    findMovie.running_time = newRunningTime
    res.status(200).json([{
        "message": "Updated running time",
        findMovie
    }])
}

const updateDescriptionById = (req, res) => {
    const idRequest = req.params.id 
    let newRunningTime = req.body.description 
    let findMovie = ghibliFilms.find(movie => movie.id == idRequest) 
    findMovie.description = newRunningTime
    res.status(200).json([{
        "message": "Updated description",
        findMovie
    }])
}

const deleteFilmByProducer = (req, res) => {
    const idRequest = req.params.producer.toLowerCase()
    const deleteMovie = ghibliFilms.findIndex(movie => movie.producer.toLowerCase() == idRequest)
    ghibliFilms.splice(deleteMovie, 1)
    res.status(200).json([{
        "message": "Deleted movie",
        "Deleted": idRequest,
        ghibliFilms

    }])
}

const getFilmById = (req, res) => {
    const idRequest = req.params.id 
    let getFilm = req.body.id 
    let findMovie = ghibliFilms.find(movie => movie.id == idRequest) 
    findMovie.id = getFilm
    res.status(200).json([{
        "message": "Found movie",
        findMovie
    }])
}


module.exports = {
    updateDirectorById,
    updateRunningTimeById,
    updateDescriptionById,
    deleteFilmByProducer,
    getFilmById
}