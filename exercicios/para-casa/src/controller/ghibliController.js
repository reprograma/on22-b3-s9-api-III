const ghibliJson = require("../models/ghiblifilms.json")
const express = require("express")
const app = express()

app.use(express.json())

const getAll = (request, response) =>{
    response.status(200).json(ghibliJson)
}

const filmeById = (request, response) => {
    const idRequest = request.params.idRequest

    const findMovie = ghibliJson.find(movie => {
        return movie.id === idRequest
    })
    console.log(findMovie)
    response.status(200).json(findMovie)
}
module.exports = {
    filmeById,
    getAll
}