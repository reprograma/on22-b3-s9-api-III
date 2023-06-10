const filmesJson = require("../models/filmes.json")
const express = require("express")
const app = express()
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
//Esta removendo um elemento, a partir do INDEX ENCONTRADO e adicionando o filme movieRequest no lugar 
    filmesJson.splice(findMovie, 1, movieRequest)
    res.status(200).json([{
        'message': 'update movie /filme atualizado',
        filmesJson,
    }])
} 

//Declaro minha const de atualizar o titulo do filme 
const updateTitleByID = (req, res) => {
    const idRequest = req.params.id //defico que vou buscar pelo id 
    let newTitle = req.body.title //altero o titulo pelo body através do id 
    let findMovie = filmesJson.find(movie => movie.id == idRequest) //filtrei 'banco de dados' para encontrar o id
    //depois disso, no meu filme a parte especifica do titulo será alterada pelo novo titulo
    findMovie.title = newTitle

    res.status(200).json([{
        'message': "o titulo do seu filme foi atualizado / updateed title",
        findMovie
    }])
}
// delete por ID 
const deleteMovieByID = (req, res) => {
    const idRequest = req.params.id 
    const deleteMovie = filmesJson.findIndex(movie => movie.id == idRequest)
    filmesJson.splice(deleteMovie,1) 
    res.status(200).json([{
        "message": "delete movie ou filme deletado",
        "delete": "idRequest", 
        filmesJson

    }])
}
//deletar por titulo 
const deleteMovieByTitle = (req, res) => {
    const idRequest = req.params.title.toLowerCase()
    const deleteMovie = filmesJson.findIndex(movie => movie.title.toLowerCase() == idRequest)
    filmesJson.splice(deleteMovie, 1)
    res.status(200).json([{
        "message": "Deleted Movie by Title/ Deletado Filme por Título",
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
