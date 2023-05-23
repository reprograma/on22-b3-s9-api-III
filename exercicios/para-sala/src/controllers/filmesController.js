const filmesJson = require("../models/filmes.json")
const express = require("express")
const app = express()
app.use(express.json())

//const getAll = (request, response)
const getAll = (req, res) => {
    res.status(200).json([{
        'filmes': filmesJson
    }])
}

const updateFilmById = (req, res) => {
    const idRequest = req.params.id
    let filmRequest = req.body
    let findFilm = filmesJson.findIndex(film => film.id == idRequest)

    // está removendo 1 elemento, a partir do index encontrado e adicionando o filmRequest no lugar
    filmesJson.splice(findFilm, 1, filmRequest)
    res.status(200).json([{
        'message': 'updated film/filme atualizado',
        filmesJson
    }])
}

//declaro minha constante de atualizar o titulo do filme
const updateTitleById = (req, res) => {
    const idRequest = req.params.id //defino que vou procurar pelo id que é único
    let newtTitle = req.body.title //altero o titulo pelo body atraves do id
    let findFilm = filmesJson.find(film => film.id == idRequest) // filtrei o BD para encontrar o id
    //depois disso, no meu filme a parte especifica do titulo será alterada pelo novo titulo
    findFilm.title = newtTitle
    res.status(200).json([{
        "message": "O titulo do seu filme foi atualizado/title updated",
        findFilm
    }])

}

const deleteFilmById = (req, res) => {
    const idRequest = req.params.id
    const deleteFilm = filmesJson.findIndex(film => film.id == idRequest)
    filmesJson.splice(deleteFilm, 1) 

    res.status(200).json
([{
    "message": "Filme deletado/Deleted film",
    "Deleted": idRequest,
    filmesJson
}])}

const deleteMovieByTitle = (req, res) => {
    const idRequest = req.params.title.toLowerCase()
    const deleteFilm = filmesJson.findIndex(film => film.title.toLowerCase() == idRequest)
    filmesJson.splice(deleteFilm, 1)
    res.status(200).json([{
        "message": "Filme deletado pelo titulo/deleted film by title",
        "Deleted": idRequest,
        filmesJson
    }])
}

module.exports = {
    getAll, 
    updateFilmById,
    updateTitleById,
    deleteFilmById,
    deleteMovieByTitle
}

