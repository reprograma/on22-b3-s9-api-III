const express = require("express")
const app = express()
const moviesJson = require("../models/ghiblifilms.json")
app.use(express.json())

const changeDirector = (req, res) =>{
    const idRequest = req.params.id
    let novoDirector = req.body.director
    directorFilter = moviesJson.find(movies => movies.id == idRequest)
    directorFilter.director = novoDirector

    res.status(200).json([{
        "mensagem": "Director atualized",
        directorFilter
    }])
}

const updateDescription = (req, res) =>{
    const idRequest = req.params.id
    let movieRequest = req.body
    let indexFound = moviesJson.findIndex(movies => movies.id == idRequest)

    moviesJson.splice(indexFound, 1, movieRequest)

    res.status(200).json([{
        "mensagem": "Descrição atualizada",
        indexFound
    }])

}

module.exports = {
    changeDirector,
    updateDescription,
}

