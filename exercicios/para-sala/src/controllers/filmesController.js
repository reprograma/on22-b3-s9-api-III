//const { response } = require("../app")
const filmesJson = require("../models/filmes.json")
const express = require("express")
const app = express()
app.use(express.json())

const getAll = (request, response) => {
    
    response.status(200).json([{
        'filmes': filmesJson
    }])
}
const updateMovieByID = (request, response) => {
 const idRequest = request.params.id
 let movieRequest = request.body
 let findMovie = filmesJson.findIndex(movie => movie.id == idRequest)
//esta removendo UM elemento elemento, apartir do INDEX ENCONTRADO e ADD o movieRequest no lugar
 filmesJson.splice(findMovie, 1, movieRequest)
 response.status(200).json([{
    'message': 'update movie atualizado',filmesJson
 }])
}
//declaro const de atualizar o titulo do movie
const updateTitleByID = (request, response) => {
const idRequest = request.params.id
let newTitle = request.body.title
let findMovie = filmesJson.find(movie => movie.id == idRequest)
findMovie.title = newTitle
response.status(200).json([{
    'message': "o titulo do filme foi atualizado",
    findMovie
}])
}
const deleteMovieByID = (request, response) => {
    const idRequest = request.params.id
    const deleteMovie = filmesJson.findIndex(movie => movie.id == idRequest)
    filmesJson.splice(deleteMovie, 1)
    response.status(200).json([{
        "message": "filme deletado",
        "deleted": idRequest,
        filmesJson
    }])                                                                                                                                        
}
const deleteMovieByTitle = (request, response)=>{
    const idRequest = request.params.title.toLowerCase()
    const deleteMovie = filmesJson.findIndex(movie => movie.title.toLowerCase() == idRequest)
    filmesJson.splice(deleteMovie, 1)
    response.status(200).json([{
    'message': 'delet movie by title',
    'deleted': idRequest,
    filmesJson
    }])
}


module.exports = {
    getAll,
    updateMovieByID,
    updateTitleByID,
    deleteMovieByID,
    deleteMovieByTitle,
}

