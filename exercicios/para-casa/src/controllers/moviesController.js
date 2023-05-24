const moviesJson = require('../models/ghiblifilms.json')
const express = require('express')
const app = express()

app.use(express.json())

//fazer constantes para referenciar no moviesRoutes

const getAll = (req,res)=>{
    res.status(200).json([{
        'message':"Catalogue",
        'movies': moviesJson
    }])
}

const updateDirector = (req,res)=>{
    const directorRequest = req.params.director.toLocaleLowerCase()
    let newDirector = req.body.director
    let findMovie = moviesJson.filter(movie=> movie.director.toLocaleLowerCase().includes(directorRequest))

    for(let i=0; i<findMovie.length;i++){
        findMovie[i].director = newDirector
    }
    

    res.status(200).json([{
        'message': 'Director altered',
        findMovie
    }])
}

const updateRunning_timeById = (req,res)=>{
    const idRequest = req.params.id 
    let newRunning_time = req.body.running_time
    let findMovie = moviesJson.find(movie=> movie.id == idRequest)

    findMovie.running_time = newRunning_time

    res.status(200).json([{
        'message': 'Running time altered',
        findMovie
    }])
}

const updateDescriptionById = (req,res)=>{
    const idRequest = req.params.id
    let newDescription = req.body
    //dá pra fazer assim ou com findindex
    //assim aparecem todos os dados e em fica:
    //"description": {
        //"description": "Nova descrição"
    //}
    /**let findMovie = moviesJson.find(movie => movie.id == idRequest)

    findMovie.description = newDescription*/

    let findMovie = moviesJson.findIndex(movie => movie.id == idRequest)

    moviesJson.splice(findMovie, 1, newDescription)


    res.status(200).json([{
        'message': 'Description altered',
        moviesJson
    }])
}

const deleteByProducer = (req,res)=>{
    const producerRequest = req.params.producer.toLocaleLowerCase()
    let deleteProducer = moviesJson.filter(movie=> movie.producer.toLocaleLowerCase().includes(producerRequest))
    
    //cris novo array vazio para colocar os filmes que não foram excluídos
    let newMovies = []
    
    //no novo array coloca o moviesJson filtrado, ou seja, ecluindo
    // os itens do array de filmes do produtor a ser deletado
    newMovies = moviesJson.filter( function(movie){
        return !deleteProducer.includes(movie)
    })

    
    res.status(200).json([{
        'message': 'Producer successfully deleted',
        'deleted': producerRequest,
        newMovies
    }])
}

const findById = (req,res)=>{
    const idRequest = req.params.id
    let findMovie = moviesJson.find(movie=> movie.id == idRequest)

    res.status(200).json([{
        'message': 'Movie found!',
        findMovie
    }])
}

module.exports = {
    getAll,
    updateDirector,
    updateRunning_timeById,
    updateDescriptionById,
    deleteByProducer,
    findById
}