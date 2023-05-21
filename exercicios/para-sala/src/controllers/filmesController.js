const filmesJson = require('../models/filmes.json')
const express = require('express')
const app = express()

app.use(express.json())

const getAll= (req, res) => {
    res.status(200).json([{'filmes': filmesJson}])
}

const updateMovieById = (req, res) => {
    const idRequest = req.params.id
    let movieRequest = req.body
    let findMovie = filmesJson.findIndex(movie => movie.id == idRequest)

    // ta removendo um elemento, a partir do index encontrado e add filme requst no lugar
    filmesJson.splice(findMovie, 1 , movieRequest)
    res.status(200).json([{'message': 'updated movie/filme atualizado', filmesJson}])

} 

// declaro minha constante de atualizar o titulo 

const updateTitleById = (req, res) => {
    const idRequest = res.params.id // defino o que for buscar pelo id
    let newTitle = req.body.title // altero o titulo pelo body atraves do id
    let findMovie = filmesJson.find(movie => movie.id == idRequest) //filtrei banco de dsdos p encontrar id, dps disso no meu filme a parte especifica do titulo q sera alterada pelo novo titulo
    findMovie.title = newTitle

    res.status(200).json([{
        'message': 'o titulo do seu filme foi atualizado/ updated title', findMovie
    }])

}

const deleteMovieById = (req, res) => {
    const idRequest = req.params.id
    const deleteMovie = filmesJson.findIndex(movie => movie.id == idRequest)
    filmesJson.splice(deleteMovie, 1)
    res.status(200).json([{
        'message': 'filme deletado/deleted movie' ,
        'deleted' : idRequest,
        filmesJson
    }])
}

const deleteMovieByTitle = (req, res) => {
    const idRequest = req.params.title.toLowerCase()
    const deleteMovie = filmesJson.findIndex(movie => movie.title.toLowerCase() == idRequest)
    filmesJson.splice(deleteMovie, 1)
    res.status(200).json([{
    'message': 'delete movie by title',
    'delited': idRequest, filmesJson
    }])
}
module.exports = {
    getAll, updateMovieById, updateTitleById, deleteMovieById, deleteMovieByTitle
}