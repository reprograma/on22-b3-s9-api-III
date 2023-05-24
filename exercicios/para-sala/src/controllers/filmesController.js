const filmesJson = require("../models/filmes.json")
const express = require("express")
const app = express()
app.use(express.json())

const getAll = (req, res) =>{
    res.status(200).json([{
        'filmes': filmesJson
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

// declaro minhas constante de atualizar o titulo do filme

const updateByTitle = (req, res) =>{
    const idRequest = req.params.id // defino que vou buscar pelo id pois é único
    let newTitle = req.body.title // altero o titulo pelo body através do id
    let findMovie = filmesJson.find(movie => movie.id == idRequest) // filtrei no meu "banco de dados" pra encontrar o id
    // depois disso, no meu filme a parte específica do título será alterada pelo novo título
    findMovie.title = newTitle
    res.status(200).json([{
        'message': 'updated title/título atualizado',
        findMovie
    }])
}

const deleteById = (req, res) =>{
    const idRequest = req.params.id
    const deleteMovie = filmesJson.findIndex(movie => movie.id == idRequest)
    filmesJson.splice(deleteMovie, 1)

    res.status(200).json([{
        'message': 'deleted movie/filme deletado', 
        'Deleted': idRequest,
        filmesJson
    }])
}

const deleteByTitle = (req, res) =>{
    const idRequest = req.params.title.toLocaleLowerCase()
    const deleteMovie = filmesJson.findIndex(movie => movie.title.toLocaleLowerCase() == idRequest)
    filmesJson.splice(deleteMovie, 1)

    res.status(200).json([{
        'message': 'deleted movie by title/filme deletado pelo título',
        'Deleted': idRequest,
        filmesJson
    }])
}

module.exports = {
    getAll,
    updateMovieByID,
    updateByTitle,
    deleteById,
    deleteByTitle
}

