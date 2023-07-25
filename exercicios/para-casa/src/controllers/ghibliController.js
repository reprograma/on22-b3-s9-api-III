const ghibliJson = require("../models/ghiblifilms.json")

const express = require("express")

const app = express()

app.use(express.json())


const getALL = (req, res) =>{
    res.status(200).json([{
        "ghiblifilms": "ghibliJson",
        ghibliJson
    }])
} 

const getGhibliByID = (req, res) =>{
    let idRequest = req.params.id
    let idEncontrado = ghibliJson.find(movie => movie.id == idRequest)
    res.status(200).json(idEncontrado)
}


const updateGhibliByDirector = (req, res) => {
    const idRequest = req.params.id
    const newDirector = req.body.director
    let foundMovie = ghibliJson.find(movie => movie.id == idRequest)
    foundMovie.director = newDirector
    res.status(200).json([{ 
        "message": " Director Field Updated Successfully",
        foundMovie
    }])
} 

const updateGhibliByRunning_time = (req, res)=>{
    const idRequest = req.params.id
    const runningTimeUpdate = req.body.running_time 
    let findRunning = ghibliJson.find(movie => movie.id == idRequest)
    findRunning.running_time = runningTimeUpdate
    res.status(200).json([{
        "message": "Running Timer modificado com sucesso!!",
        findRunning
    }])
} 

const updateGhibliByDescription = (req, res)=>{
    const idRequest = req.params.id 
    const descriptionRequest = req.body.description 
    let encontrarMovie = ghibliJson.findIndex((movie) => movie.id == idRequest)
    ghibliJson.splice(encontrarMovie, 1, descriptionRequest)
    res.status(200).json([{
        "message": "Descrição do filme atualizado com sucesso!!!",
        ghibliJson
    }]) 
}

const deleteGhibliByProducer = (req, res) => {
    const producerRequest = req.query.producer.toLowerCase()
    const deleteMovie = ghibliJson.findIndex(movie => movie.producer.toLowerCase() == producerRequest)
    ghibliJson.splice(deleteMovie, 1)
    res.status(200).json([{
        "message": "Buscado por producer e Filme deletado com sucesso!!",
        "delete": producerRequest,
        ghibliJson
    }])

}

module.exports = {
    getALL,
    getGhibliByID,
    updateGhibliByDirector,
    updateGhibliByRunning_time,
    updateGhibliByDescription,
    deleteGhibliByProducer
}
