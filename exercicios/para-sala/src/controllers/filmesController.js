const filmesJson = require("../models/filmes.json");
const express = require("express");
const app = express(); 

app.use(express.json())

const getAll = (req, res) => {
    res.status(200).json([{
        "filmes": filmesJson
    }])
}

const updateMovieByID = (req, res) =>{
    const idRequest = req.params.id
    let movieRequest = req.body 
    let findMovie = filmesJson.findIndex(movie => movie.id == idRequest )
    
    // Está removendo 1 elemento, a partir do index encontrado e adicionando o movieRequest no lugar 
    filmesJson.splice(findMovie, 1, movieRequest)
    res.status(200).json([{
        'message': 'updated movie/filme atualizado',
        filmesJson
    }])
}

//declaro minha const de atualiar o titulo do filme
const updateTitleByID = (req, res) => {
    const idRequest = req.params.id //defino que vou buscar pelo id porque é unico
    let newTitle = req.body.title //altero o titulo pelo body através do id
    let findMovie = filmesJson.find(movie => movie.id == idRequest) //filtrei 'banco de dados' para encontrar o id
    //depois disso, no meu filme a parte especifica do titulo será alterada pelo novo titulo
    findMovie.title = newTitle

    res.status(200).json([{
        "message": "o titulo do seu filme foi atualizado / updated title",
        findMovie

    }])
}

const deleteMovieByID = (req, res) => {
    const idRequest = req.params.id
    const deleteMovie = filmesJson.findIndex(movie => movie.id == idRequest)
    filmesJson.splice(deleteMovie, 1)

    res.status(200).json([{
        "message": "Deleted movie",
        "deleted": idRequest, 
        filmesJson
    }])
}

const deleteMovieByTitle = (req, res) => {
    const idRequest = req.params.title.toLowerCase()
    const deleteMovie = filmesJson.findIndex(movie => movie.title.toLowerCase() == idRequest)
    filmesJson.slice(deleteMovie, 1)
    res.status(200).json([{
        "message": "deleted movie",
        "deleted": idRequest,
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