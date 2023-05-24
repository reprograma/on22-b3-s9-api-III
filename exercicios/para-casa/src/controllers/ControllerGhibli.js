const ghibliFilms = require("../models/ghiblifilms.json")
const express = require("express")
const app = express()

app.use(express.json())

const getAll = (req, res) => {
    res.status(200).json([{
        'movies': ghibliFilms
    }])

}

const updateDirector = (req, res) => {
    const idRequest = req.params.id
    let newDirector = req.body.director
    let findFilm = ghibliFilms.find(movie => movie.id == idRequest)

    findFilm.director = newDirector
    res.status(200).json([{
        'message' : 'Updated Director'
    }])
}

const updateRunningTime = (req, res) => {
    const idRequest = req.params.id
    let newRunningTime = req.body.running_time
    let findFilm = ghibliFilms.find(movie => movie.id == idRequest)

    findFilm.running_time = newRunningTime
    res.status(200).json([{
        'message': 'Updated Film Running Time'
    }])
}

const updateDescription = (req, res) => {
    const idRequest = req.params.id 
    let newDescription = req.body.description 
    let findFilm = ghibliFilms.find(movie => movie.id == idRequest)

    findFilm.description = newDescription
    res.status(200).json([{
        'message': 'Updated Film Description'
    }])
}

const deleteFilm = (req, res) => {
    const idRequest = req.params.producer.toLocaleLowerCase()
    const removeFilm = ghibliFilms.findIndex(movie => movie.producer.toLocaleLowerCase() == idRequest)
    ghibliFilms.splice(removeFilm, 1)
    res.status(200).json([{
        'message': 'Deleted movie by producer successfully',
        'Deleted': idRequest,
        ghibliFilms
    }])
}

const getFilmById = (req,res) => {
    const idRequest = req.params.id 
    let findFilm = ghibliFilms.find(movie => movie.id == idRequest)
    res.status(200).send(findFilm)
}







module.exports = {
    getAll,
    updateDirector,
    updateRunningTime,
    updateDescription,
    deleteFilm, 
    getFilmById
}