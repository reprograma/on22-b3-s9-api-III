const filmesJson = require("../models/filmes.json")
const express = require("express")
const app = express()
app.use(express.json())

const getAll = (request, response) =>{
    response.status(200).json([{
        'filmes': filmesJson
    }])
}

const updateFilmByID = (request, response) => {
    const idRequest = request.params.id
    let filmRequest = request.body
    let findFilm = filmesJson.findIndex(film => film.id == idRequest)
   //Está removendo um elemento, a partir do index encontrado e adicionando o filmRequest no lugar 
    filmesJson.splice(findFilm, 1, filmRequest)
    response.status(200).json([{
        'message': 'updated film',
        filmesJson
    }])
}



//declaro minha const de atualizar o titulo do filme
const updateTitleByID = (request, response) =>{
    const idRequest = request.params.id // Defino que vou buscar pelo id pq é único
    let newTitle = request.body.title // altero o titulo pelo body atraves do id
    let findFilm = filmesJson.find(film => film.id == idRequest) //filtrei "banco de dados" pra encontrar o id 
    //depois disso, no meu filme a parte especifica do titulo sera alterada pelo novo titulo
    findFilm.title = newTitle

response.status(200).json([{
    'message': 'updated title',
    findFilm
}])
}

const deleteFilmByID = (request, response) =>{
    const idRequest = request.params.id 
    const deleteFilm = filmesJson.findIndex(film => film.id == idRequest)
    filmesJson.splice(deleteFilm, 1)
        response.status(200).json([{
            'message': 'Deleted film',
            'deleted': idRequest,
            filmesJson
        }])
}

const deleteFilmByTitle = (request, response) =>{
    const idRequest = request.params.title.toLowerCase()
    const deleteFilm = filmesJson.findIndex(film => film.title.toLowerCase() == idRequest)
    filmesJson.splice(deleteFilm, 1)
    response.status(200).json([{
        'message': 'Deleted film by title',
        'deleted' : idRequest,
        filmesJson
    }])
}

module.exports = {
    getAll,
    updateFilmByID,
    updateTitleByID,
    deleteFilmByID,
    deleteFilmByTitle
}
