const filmesJson = require("../models/filmes.json")
const express = require("express")
const app = express()
app.use(express.json())

const getAll = (req, res) => {
    res.status(200).json([{
        "filmes": filmesJson
    }])
}

const updateMovieById = (req, res) => {
    const idRequest = req.params.id
    let movieRequest = req.body
    let findMovie = filmesJson.findIndex(movie => movie.id == idRequest)
    //está removendo um elemento a partir do INDEX encontrado e adicionando o movieRequest no lugar
    filmesJson.splice(findMovie, 1, movieRequest)

    res.status(200).json([{
        "message": "updated movie/filme atualizado",
        filmesJson
    }])


}

//declaro minha constante de atualizar o título do filme

const updateTitleById = (req,res) => {
    const idRequest = req.params.id //defino que vou buscar pelo Id, pq Id é único
    let newTitle = req.body.title // altero o título pelo body através do Id
    let findMovie = filmesJson.find(movie => movie.id == idRequest) //filtrei o banco de dados para encontrar o id
    //depois disso, no meu filme a parte específica do título será alterada pelo novo título
    findMovie.title = newTitle

    res.status(200).json([{
        "message": "o título do seu filme foi atualizado / updated title",
        findMovie
    }])
}

const deleteMovieById = (req,res) => {
    const idRequest = req.params.id
    const deleteMovie = filmesJson.findIndex(movie => movie.id == idRequest)
    filmesJson.splice(deleteMovie, 1)

    res.status(200).json ([{
        "message": "Filme deletado / Deleted Movie",
        "Deleted": idRequest,
        filmesJson
    }])
}

const deleteMovieByTitle = (req,res) => {
    const idRequest = req.params.title.toLowerCase()
    const deleteMovie = filmesJson.findIndex(movie => movie.title.toLowerCase() == idRequest)
    filmesJson.splice(deleteMovie, 1)

    res.status(200).json ([{
        "message": "delete movie by title",
        "Delete": idRequest,
        filmesJson


    }])
}

module.exports = {
    getAll,
    updateMovieById,
    updateTitleById,
    deleteMovieById,
    deleteMovieByTitle,
}

