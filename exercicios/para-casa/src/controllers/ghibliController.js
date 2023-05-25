const ghibliJson = require("../models/ghiblifilms.json");
const express = require("express");
const { response } = require("../app");

const app = express();
app.use(express.json());

const showAllMovies = (request, response) => {
    response.status(200).json([{
        'ghiblifilms': ghibliJson
    }])
}

const updateDirectorByID = (request, response) => {
    const idRequest = request.params.id
    let newDirector = request.body.director 
    let findMovie = ghibliJson.find(movie => movie.id == idRequest) 
    findMovie.director = newDirector

    response.status(200).json([{
        "message": "o diretor do seu filme foi atualizado",
        findMovie
    }])
}

const updateRunningTimeByTitle = (request, response) => {
    const titleRequest = request.params.title.toLocaleLowerCase() 
    let newRunningTime = request.body.running_time 
    let findMovie = ghibliJson.find(movie => movie.title.toLocaleLowerCase() == titleRequest) 
    findMovie.running_time = newRunningTime

    response.status(200).json([{
        "message": "o running time do seu filme foi atualizado",
        findMovie
    }])
}

const updateTitleByID = (request, response) => {
    const idRequest = request.params.id
    let newTitle = request.body.title
    let findMovie = ghibliJson.find(movie => movie.id == idRequest)
    findMovie.title = newTitle
    
    response.status(200).json([{
        "message": "o titulo do filme está atualizado",
        findMovie
    }])

}

const deleteMovieByProducer = (request, response) => {
    const producerRequest = request.params.producer
    const deleteMovie = ghibliJson.findIndex(movie => movie.producer == producerRequest)
    ghibliJson.splice(deleteMovie, 1)

    response.status(200).json([{
        "message": "Filme excluido",
        "Deleted": producerRequest,
        ghibliJson
    }])
}

module.exports = {
    showAllMovies,
    updateDirectorByID,
    updateRunningTimeByTitle,
    updateTitleByID,
    deleteMovieByProducer
}