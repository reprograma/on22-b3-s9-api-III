const filmesJson = require("../models/filmes.json") // conectando o controles com as rotas e apps

const express = require("express")

const app = express()

app.use(express.json())

const getALL = (req, res) =>{ // p incurtar request e response fica "req" e "res"
    res.status(200).json([{
        "filmes": filmesJson,
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

// declaro minha const de atualizar o titulo do filme
const updateTitleByID = (req, res) => {
    const idRequest = req.params.id // defino que vou buscar pelo id, pq id é unico
    let newTitle = req.body.title  // altero o titulo pelo body através do id que eu indiquei anteriormente
    let findMovie = filmesJson.find(movie => movie.id == idRequest) // filtrar no meu "banco de dados" (jason) para encontrar o id
    // depois disso, no meu filme a parte especifica do título será alterada pelo novo título
    findMovie.title = newTitle
    res.status(200).json([{
        "message": "updated title/ O título do seu filme foi atualizado",
        findMovie
    }]) 
}

// deletar por ID
const deleteMovieByID = (req, res) => {
    const idRequest = req.params.id
    const deleteMovie = filmesJson.findIndex(movie => movie.id == idRequest)
    filmesJson.splice(deleteMovie, 1)
    res.status(200).json([{
        "message": "Deleted movie / filme deletado",
        "deleted": idRequest,
        filmesJson
    }])
}

const deleteMovieByTitle = (req, res) => {
    const titleRequest = req.query.title.toLowerCase()
    const deleteMovie = filmesJson.findIndex(movie => movie.title.toLowerCase() == titleRequest)
    filmesJson.splice(deleteMovie, 1)
    res.status(200).json([{
        "message": "Deleted Movie by Title/ Deletado Filme por Título",
        "deleted": titleRequest,
        filmesJson
    }])
}

module.exports = {
    getALL,
    updateMovieByID,
    updateTitleByID,
    deleteMovieByID,
    deleteMovieByTitle
}
 
