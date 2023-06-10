const ghibliJson = require("../models/ghiblifilms.json")
const express = require("express")
const app = express()
app.use(express.json())

const getAll = (request, response) => {
    response.status(200).json([{
        "ghiblifilmes": "glibliJson", 
        ghibliJson
    }])
}

const getGhiblhiId = (request, response) => {
    let idRequest = request.params.id 
    let idFilme = ghibliJson.find(filme => filme.id == idRequest)
    response.status(200).json(idFilme)
}

const updadeGhibliByDirector = (request, response) => {
    let idRequest = request.params.id
    let directorRequest = request.body.director
    let filmeEncontrado = ghibliJson.find(filme => filme.id == idRequest)
    filmeEncontrado.director = directorRequest
    response.status(200).json([{
        "message": "director atualizado com SUCESSO",
        filmeEncontrado
    }])
}
 
const updateGhibliByRunningtime = (request,response) => {
    const id = request = request.params.id
    let filmeFound = filmesJson.find(filme.id == id),

    if(filmeFound){
        filmeFound.running_time = request.body.running_time,

        res.status(200).send.filmeFound,
    } else {
        response.status(400).send({ message: "não foi possivel editar o tempo do filme"})
    }
    }
const updateGhibliByDescription = (request, response) => {
const id = request.params.id
let filmeFound = filmesJson.find(filme.id == id),

if(filmeFound){
    filmeFound.description = request.body.description,

    res.status(200).send.filmeFound,
 else {
    response.status(400).send({ message: "não foi possivel editar o descricao do filme"})
}
}

const deleteGhibliByProducer = (request, response) => {
    const filmeProducer = request.params.producer.toLowerCase()
    const movieIndex = filmesJson.findIndex(movie => movie.producer.toLowerCase() == filmeProducer)
    if(movieIndex){
        filmesJson.splice(movieIndex, 1),
        res.status(200).json([{
            message: "filme deletado" )},
    } else {
        response.status(400).send({ message: "não foi possivel editar o descricao do filme"}),

        }
    }

module.exports = {
    getAll,
    getGhiblhiId,
    updadeGhibliByDirector,
    updateGhibliByRunningtime,
    updateGhibliByDescription,
    deleteGhibliByProducer,
}