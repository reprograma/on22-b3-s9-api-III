const ghiblifilmsJson = require("../models/ghiblifilms.json")
const express = require("express")
const app = express()
app.use(express.json())

const getById = (request, response) =>{
    response.status(200).json([{
        'Id': ghiblifilmsJson
    }])
}
const deleteMovieByProducer = (request, response) => {
    const producerRequest = request.query.producer.toLowerCase()
    const deleteMovieProducer = ghiblifilmsJson.findIndex(movie => movie.producer.toLocaleLowerCase() == producerRequest)
    ghiblifilmsJson.splice(deleteMovieProducer, 1)
    response.status(200).json([{
    'message': 'delet movie by producer',
    'deleted': producerRequest,
    ghiblifilmsJson
    }])
}
const updateByDescription = (request, response) => {
    const updateRequest = request.query.updateByDescription.toLowerCase()
    let movieRequest = request.body
    let findMovie = ghiblifilmsJson.findIndex(movie => movie.description.toLocaleLowerCase() == updateRequest)
    ghiblifilmsJson.splice(findMovie, 1, movieRequest)
    response.status(200).json([{
        'Message': 'updated movie description.',
        ghiblifilmsJson
    }])
}
const updateRunningTime = (request, response) => {
const updateTimeRequest = request.query.running_time 
let newTime = request.body.running_time
let findTime = ghiblifilmsJson.find(movie => movie.running_time == updateTimeRequest) 
findTime.running_time = newTime
response.status(200).json([{
    'message': 'updated running time ok', 
    findTime
}])
}

const updateByDirector = (request, response) => {
    const updateDirector = request.query.director 
    let newDirector = request.body.director 
    let findDirector = ghiblifilmsJson.find(movie => movie.director == updateDirector)
    findDirector.director = newDirector
    response.status(200).json([{
        'message': 'updated Director ok', 
        findDirector
    }])

}



module.exports = {
 getById,
 deleteMovieByProducer,
 updateByDescription,
 updateRunningTime,
 updateByDirector,
}