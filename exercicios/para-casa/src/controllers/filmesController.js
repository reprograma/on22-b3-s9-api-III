const ghiblifilmsJson = require('../models/ghiblifilms.json')
const express = require('express')
const app = express()
app.use(express.json())

const getAll = (request, response) =>{
    response.status(200).json([{
        'filmes': ghiblifilmsJson
    }])
}

const updateFilmDescriptionByID = (request, response) =>{
    const idRequest = request.params.id
    let descriptionRequest = request.body
    let findFilmDescription = ghiblifilmsJson.findIndex(description => description.id == idRequest) 

    ghiblifilmsJson.splice(findFilmDescription, 1, descriptionRequest)
    response.status(200).json([{
        'message': 'Updated film',
        ghiblifilmsJson
    }])
}

const updateFilmDirectorByID = (request, response) =>{
    const idRequest = request.params.id
    let newDirector = request.body.director
    let findFilmDirector = ghiblifilmsJson.find(director => director.id == idRequest)
    findFilmDirector.director = newDirector

    response.status(200).json([{
        'message': 'Updated film director',
        findFilmDirector
    }])
    
}

const updateFilmRunningTimeByID = (request, response) =>{
    const idRequest = request.params.id
    let newRunningTime = request.body.running_time
    let findFilmRunningTime = ghiblifilmsJson.find(running_time => running_time.id == idRequest)
    findFilmRunningTime.running_time = newRunningTime

    response.status(200).json([{
        'message': 'Updated new running time',
        findFilmRunningTime
    }])
}

const deleteFilmProducer = (request, response) =>{
    const idRequest = request.params.producer
    const deleteFilmProducer = ghiblifilmsJson.findIndex(film => film.producer == idRequest)
    ghiblifilmsJson.splice(deleteFilmProducer, 1)

    response.status(200).json([{
        'message': 'Deleted film by producer',
        'deleted' : idRequest,
        ghiblifilmsJson
    }])
}

const getFilmByID = (request, response) =>{
    const idRequest = request.params.id
    const filmeEncontrado = ghiblifilmsJson.find(filme => filme.id == idRequest)
    response.status(200).send(filmeEncontrado)
        
}




module.exports = {
    getAll,
    updateFilmDescriptionByID,
    updateFilmDirectorByID,
    updateFilmRunningTimeByID,
    deleteFilmProducer,
    getFilmByID,

}