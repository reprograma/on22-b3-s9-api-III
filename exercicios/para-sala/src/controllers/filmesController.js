const filmesJson = require("../models/filmes.json")
const express = require("express") //importa o express
const app = express() //executo o express
app.use(express.json())

const getAll = (request, response) => { //forma de encurtar e no resto do cod tem que ser igual
    response.status(200).json([{
        "filmes": filmesJson
    }])
}

const updateMovieByID = (request, response) => {
    const idRequest = request.params.id
    let movieRequest = request.body
    let findMovie = filmesJson.findIndex(movie => movie.id == idRequest)
//Está removendo um elemento, a partir do INDEX ENCONTRADO(findIndex) e adicionando o movieRequest no lugar
    filmesJson.splice(findMovie, 1, movieRequest)
response.status(200).json([{
    "message" : "updated movie/filme atualizado",
    filmesJson 
}])
}

//Declaro minha const de atualizar o titulo do filme
const updateTitleByID = (request, response) => {
    const idRequest = request.params.id //defino que vou buscar pelo id, porque o id é único
    let newTitle = request.body.title //altero o titulo pelo body através do id que indentifiquei anterioemente 
    let findMovie = filmesJson.find(movie => movie.id == idRequest) //Filtrei no "banco de dados" pra encontrar o id 
    //depois disso, no meu filme a parte específica do titulo será alterada pelo nov otítulo
    findMovie.title = newTitle

    response.status(200).json([{
        "message" : "O título do seu filme foi atualizado / updated title",
        findMovie
    }])
}

const deleteMovieByID = (request, response) => {
    const idRequest = request.params.id
    const deleteMovie = filmesJson.findIndex(movie => movie.id == idRequest)
    filmesJson.splice(deleteMovie, 1)

    response.status(200).json([{
        "message": "Filme deletado pelo id",
        "Deleted" : idRequest,
        filmesJson
    }])
}

const deleteMovieByTitle = (request, response) => {
    const idRequest = request.params.title.toLowerCase()
    const deleteMovie = filmesJson.findIndex(movie => movie.title.toLowerCase() == idRequest)
    filmesJson.splice(deleteMovie, 1)

    response.status(200).json([{
        "message" : "Filme deletado pelo título",
        "Deleted" : idRequest,
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


