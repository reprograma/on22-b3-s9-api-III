const ghibliJson = require("../models/ghiblifilms.json")
const express = require("express")
const app = express()
app.use (express.json())

const getAll = (request, response) => {
    response.status(200).json([{
        'filmes': ghibliJson
    }])
}

const updateDescription = (request, response) => {
    const idRequest = request.params.id
    let movieRequest = request.body
    let findMovie = ghibliJson.findIndex(movie => movie.id == idRequest)
 
    ghibliJson.splice(findMovie, 1, movieRequest)
    response.status(200).json([{
        'message': "updated movie/filme atualizado",
        ghibliJson
    }])

}




const updateMovieByDirector = (req, res) => {
    const idRequest = req.params.id 
    let newDirector = req.body.director
    let findMovie = ghibliJson.find(movie => movie.id == idRequest) 
 
    findMovie.director = newDirector

    res.status(200).json([{
        "message": "título foi atualizado",
        findMovie
    }])
}
const updateMovieByRT = (req, res) => {
    const idRequest = req.params.id 
    let newRT = req.body.running_time
    let findMovie = ghibliJson.find(movie => movie.id == idRequest) 
 
    findMovie.running_time = newRT

    res.status(200).json([{
        "message": "título foi atualizado",
        findMovie
    }])
}

const deleteMovieByProducer = (req, res) => {
    const producerRequest = req.params.producer.toLowerCase()
    const deleteMovie = ghibliJson.findIndex(movie => movie.producer.toLocaleLowerCase() == producerRequest )
    ghibliJson.splice(deleteMovie, 15)
    res.status(200).json([{
        "message": "Movie deletado",
        "Deleted": producerRequest,
        ghibliJson
    }])
}

const deleteByTitle = (req, res) => {
    const idRequest = req.params.title.toLowerCase()
    const deleteMovie = ghibliJson.findIndex(movie => movie.title.toLocaleLowerCase() == idRequest )
    ghibliJson.splice(deleteMovie, 1)
    res.status(200).json([{
        "message": "Movie deletado",
        "Deleted": idRequest,
        ghibliJson
    }])
}





module.exports = {
    getAll,
    updateDescription,
    updateMovieByDirector,
    updateMovieByRT,
    deleteMovieByProducer,
    deleteByTitle,
    

}

