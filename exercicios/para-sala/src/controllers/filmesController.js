const filmesJson = require("../models/filmes.json")
const express = require("express")
const app = express()
app.use(express.json())

const getAll = (request, response) => {
    response.status(200).json([{
        "filmes" : filmesJson
    }])
}

//Declaro minha constante de atualização do filme por ID
const updateMovieByID = (request, response) => {
    const idRequest = request.params.id
    let movieRequest = request.body
    //o código abaixo encontra o filme pelo index
    let findMovie = filmesJson.findIndex(movie => movie.id == idRequest)
    //o código abaixo remove um elemento, a partir do index encontrado e adiciona movieRequest no lugar
    filmesJson.splice(findMovie, 1, movieRequest)
    response.status(200).json([{
        "message": "updated movie",
        filmesJson
    }]) 
}

//Declaro minha constante de atualização do título do filme por ID
    const updateTitleByID = (request, response) => {
    const idRequest = request.params.id //defino que vou buscar pelo ID pois ele é único
    let newTitle = request.body.title //altero o título pelo body através do ID
    let findMovie = filmesJson.find(movie => movie.id == idRequest) //filtrei no banco de dados pra encontrar ID
    //Depois disso, no meu filme a parte específica do título será alterada pelo novo título:
    findMovie.title = newTitle
    response.status(200).json([{
        "message": "updated title",
        findMovie
    }])
}

//Declaro minha constante para deletar o filme por ID
    const deleteMovieByID = (request, response) =>  {
    const idRequest = request.params.id
    const deleteMovie = filmesJson.findIndex(movie => movie.id == idRequest)
    filmesJson.splice(deleteMovie, 1)

    response.status(200).json([{
        "message": "deleted movie",
        "Deleted": idRequest, 
        filmesJson
    }])

}

//Declaro minha constante para deletar o filme por título
    const deleteMovieByTitle = (request, response) => {
    const idRequest = request.params.title.toLowerCase
    const deleteMovie = filmesJson.findIndex(movie => movie.title.toLowerCase() == idRequest)
    filmesJson.splice(deleteMovie, 1)

    response.status(200).json([{
        "message": "deleted movie by title",
        "Deleted": idRequest, 
        filmesJson
    }])
    }


module.exports = { //module.exports é sempre o último
    getAll,
    updateMovieByID,
    updateTitleByID,
    deleteMovieByID,
    deleteMovieByTitle,
}

