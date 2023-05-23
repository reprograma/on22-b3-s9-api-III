const ghibliFilmesJson = require('../models/ghiblifilms.json')
const express = require('express')
const app = express()
app.use(express.json())


const getAllGhibliFilms = (request, response) => {
    let amountFilms = Object.keys(ghibliFilmesJson).length
    response.status(200).json([{
        'total of films:': amountFilms,
        'ghibliFilms': ghibliFilmesJson
    }])
}

const getGhibliFilmsById = (request, response) => {
    const idRequest = request.params.id
    let ghibliFilmRequest = request.body
    let findGhibliFilm = ghibliFilmesJson.find(ghibliFilms => ghibliFilms.id == idRequest)


    ghibliFilmesJson.splice(findGhibliFilm, 1, ghibliFilmRequest)
    response.status(200).json([{
        'message': 'Ghibli film found!',
        'ghibliFilmsFound': findGhibliFilm
    }])
}
const updateDescriptionById = (request, response) => {
    const idRequest = request.params.id
    let newDescription = request.body.description
    let findGhibliFilm = ghibliFilmesJson.find(ghibliFilm => ghibliFilm.id == idRequest)
    findGhibliFilm.description = newDescription
    response.status(200).json([{
        'message': 'Ghiblis film description updated!',
        findGhibliFilm
    }])
}

/*AQUI EU QUERIA DELETAR TODAS OS FILMES COM O MESMO PRODUTOR

const deleteByProducer = (request, response) => {
const idRequest = request.params.producer.toLowerCase().includes
const deleteGhibliFilm = ghibliFilmesJson.findIndex(ghibliFilm => ghibliFilm.producer.toLowerCase().includes == idRequest)
//let amountFilmsDeleted = Object.keys(deleteGhibliFilm).length

 ghibliFilmesJson.splice(deleteGhibliFilm, 1) 
 response.status(200).json([{
    
    'message': 'Sucess! Deleted film(s)!',
    //'number of deleted': amountFilmsDeleted,
    ghibliFilmesJson
}])

}*/

const deleteByProducer = (request, response) => {
    const idRequest = request.params.producer.toLowerCase()
    const deleteFilm = ghibliFilmesJson.findIndex(film => film.producer.toLowerCase() == idRequest)
    ghibliFilmesJson.splice(deleteFilm, 15)
    response.status(200).json([{
        "message": "Filme deletado pelo titulo/deleted film by title",
        "Deleted": idRequest,
        ghibliFilmesJson
    }])
}
const modifyByDirector = (request, response) => {
    const idRequest = request.params.id
    let newDirector = request.body.director
    let findGhibliFilm = ghibliFilmesJson.find(film => film.id == idRequest)

    findGhibliFilm.director = newDirector
    response.status(200).json([{
        'message': 'Director updated',
        findGhibliFilm
    }])
}

const modifyByRunningTime = (request, response) => {
    const idRequest = request.params.id
    let newRunningTime = request.body.running_time
    let findGhibliFilm = ghibliFilmesJson.find(ghibliFilm => ghibliFilm.id == idRequest)

    findGhibliFilm.running_time = newRunningTime
    response.status(200).json([{
        'message': 'Running time updated',
        findGhibliFilm
    }])
}

module.exports = {
    modifyByDirector,
    modifyByRunningTime,
    updateDescriptionById,
    deleteByProducer,
    getGhibliFilmsById,
    getAllGhibliFilms
}