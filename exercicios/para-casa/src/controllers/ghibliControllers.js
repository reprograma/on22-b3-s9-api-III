const ghiblifilmsJson = require("../models/ghiblifilms.json")
const express =  require("express")
const app = express()
app.use(express.json()) //body parse

const getByID = (request, response) => {
    let idRequest = request.params.id
    let findMovie = ghiblifilmsJson.find(movie => movie.id == idRequest)

    response.status(200).send(findMovie)
}

const changeDirectorByID = (request, response) => {
    const idRequest = request.params.id //vou buscar pelo id
    let newDirector = request.body.director //altero o diretor pelo body atraves do id
    let  findMovie = ghiblifilmsJson.find( movie => movie.id == idRequest)

    findMovie.director = newDirector

    response.status(200) .json([{
        "message" : "Diretor alterado",
        findMovie
    }])

}

const alterRunning_TimeByID = (request, response) =>{
    const idRequest = request.params.id
    let newRunning_Time = request.body.running_Time
    let findMovie = ghiblifilmsJson.find( movie => movie.id == idRequest)

    findMovie.running_Time = newRunning_Time

    response.status(200).json([{
        "message" : "Running_Time alterado.",
        findMovie
    }])
}

const updateDescriptionByID = (request, response) => {
    const idRequest = request.params.id
    let descriptionRequest = request.body
    let findDescription = ghiblifilmsJson.findIndex(description => description.id == idRequest)

    ghiblifilmsJson.splice(findDescription, 1, descriptionRequest)
response.status(200).json([{
    "message": "Descrição atualizada",
    ghiblifilmsJson
}])
}

const deleteProducerByID = (request, response) => {
    const idRequest = request.params.id
    const deleteMovie = ghiblifilmsJson.findIndex(movie => movie.id == idRequest)
    ghiblifilmsJson.splice(deleteMovie,1)

    response.status(200).json([{
        "message" : "Filme deletado pelo produtor",
        "deleted" : idRequest,
        ghiblifilmsJson
    }])
}


module.exports = {
    getByID,
    updateDescriptionByID,
    changeDirectorByID,
    alterRunning_TimeByID,
    deleteProducerByID,
}
