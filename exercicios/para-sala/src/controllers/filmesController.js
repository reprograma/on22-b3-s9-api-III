const filmesJson = require("../models/filmes.json")
const express = require("express")
const app = express()
app.use (express.json())

const getAll = (request, response) => {
    response.status(200).json([{
        'filmes': filmesJson
    }])
}

const updateMovieByID = (request, response) => {
    const idRequest = request.params.id
    let movieRequest = request.body
    let findMovie = filmesJson.findIndex(movie => movie.id == idRequest)
 // está removendo um elemento, apartir do index encontrado e adicionando o movierequest no lugar.
    filmesJson.splice(findMovie, 1, movieRequest)
    response.status(200).json([{
        'message': "updated movie/filme atualizado",
        filmesJson
    }])

}

// declaro minha constante de atualizar o título do filme
const updateTitleByID = (req, res) => {
    const idRequest = req.params.id // defino por id
    let newTittle = req.body.title //altero o titulo pelo body
    let findMovie = filmesJson.find(movie => movie.id == idRequest) //filtrei no "banco de dados", para encontrar o id que digitei
    //depois disso, no meu flime a parte especifica  do título será alterada pelo novo título
    findMovie.title = newTittle

    res.status(200).json([{
        "message": "título foi atualizado",
        findMovie
    }])
}

const deleteMovieByID = (req, res) => {
    const idRequest = req.params.id
    const deleteMovie = filmesJson.findIndex(movie => movie.id == idRequest)
    filmesJson.splice(deleteMovie, 1)

    res.status(200).json([{
        "message": "Filme deletado / Deleted Movie",
        "Deleted": idRequest,
        filmesJson
    }])
}

const deleteByTitle = (req, res) => {
    const idRequest = req.params.title.toLowerCase()
    const deleteMovie = filmesJson.findIndex(movie => movie.title.toLocaleLowerCase() == idRequest )
    filmesJson.splice(deleteMovie, 1)
    res.status(200).json([{
        "message": "Movie deletado",
        "Deleted": idRequest,
        filmesJson
    }])
}




module.exports = {
    getAll,
    updateMovieByID,
    updateTitleByID,
    deleteMovieByID,
    deleteByTitle

}

