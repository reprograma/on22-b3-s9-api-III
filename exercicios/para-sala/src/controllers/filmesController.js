const filmesJson = require("../models/filmes.json")
const express = require("express")
const app = express()
app.use(express.json())

const getAll = (req, res) => {
    res.status(200).json([{
        'filmes': filmesJson
    }])
}

const updateMovieByID = (req, res) => {
    const IdRequest = req.params.id
    let movieRequest = req.body 
    let findMovie = filmesJson.findIndex(movie => movie.id == IdRequest )
// Está removendo 1 elemento, a partir do index encontrado e adicionando o movieRequest no lugar 
    filmesJson.splice(findMovie, 1, movieRequest)
    res.status(200).json([{
        'message': 'updated movie/filme atualizado',
        filmesJson
    }])
}

//declarando minha constante de atualizar titulo do filme:

const updateTitleByID = (req, res) => {
    const IdRequest = req.params.id //Defino que vou buscar pelo ID pois o ID é unico
    let newTitle = req.body.title //Altero o titulo pelo body através do ID
    let findMovie = filmesJson.find(movie => movie.id == IdRequest) //filtrei o meu 'banco de dados' para encontrar o id 

    //depois disso, no meu filme, a parte especifica do titulo sera alterada pelo novo titulo
    findMovie.title = newTitle
    res.status(200).json([{
        'message': 'Titulo do filme atualizado/Update title',
        findMovie
    }])
}

const deleteMovieByID = (req, res) => {
    const IdRequest = req.params.id
    const movieIndex = filmesJson.findIndex(movie => movie.id == IdRequest)
    const deletedMovie = filmesJson.splice(movieIndex, 1)

    res.status(200).json({
        'message': 'Deleted Movie',
        'Deleted': IdRequest,
        deletedMovie
    })
}

const deleteMovieByTitle = (req, res) => {
    const IdRequest = req.params.title.toLowerCase()
    const movieIndex = filmesJson.findIndex(movie => movie.title.toLocaleLowerCase() == IdRequest)
    filmesJson.splice(movieIndex, 1)

    res.status(200).json([{
        'menssage': 'Deleted movie by title',
        'Deleted': IdRequestmovieIndex,
        filmesJson
    }])

}

module.exports = {
    getAll,
    updateMovieByID,
    updateTitleByID,
    deleteMovieByID,
    deleteMovieByTitle
}


