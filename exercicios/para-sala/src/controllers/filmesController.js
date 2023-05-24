const filmesJson = require('../models/filmes.json')
const express = require('express')
const app = express()

app.use(express.json())   //precisa do body psre pq ta trabalhando c json

const getAll = (req,res) => {
    res.status(200).json([{
        'filmes': filmesJson
    }])
}

    const updateMovieById = (req,res)=>{
    const idRequest = req.params.id
    let movieRequest = req.body
    let findMovie = filmesJson.findIndex(movie => movie.id == idRequest)

    //está removendo um elemento (1) a partir do index encontrado e adicionano o filmeRequest no lugar
    filmesJson.splice(findMovie, 1, movieRequest)
    res.status(200).json([{
        'message': 'updated movie',
        filmesJson
    }])
}

//atualizar titulo do filme

const updateTitleById = (req,res)=>{
    const idRequest = req.params.id
    let newTitle = req.body.title
    let findMovie = filmesJson.find(movie=> movie.id == idRequest)

    //depois disso, no meu filme a parte específica do título será alterada pelo novo título
    findMovie.title = newTitle

    res.status(200).json([{
        'message': 'Título alterado',
        findMovie
    }])

}

const deleteMovieById = (req,res)=>{
    const idRequest = req.params.id
    const deleteMovie = filmesJson.findIndex(movie => movie.id == idRequest)
    filmesJson.splice(deleteMovie, 1)

    res.status(200).json([{
        'message': 'Filme deletado',
        'deleted': idRequest,
        filmesJson
    }])
}


    const deleteMovieByTitle = (req,res)=>{
        const idRequest = req.params.title.toLowerCase()
        const deleteMovie = filmesJson.findIndex(movie=>movie.title.toLowerCase() ==  idRequest)
        filmesJson.splice(deleteMovie,1)

        res.status(200).json([{
            'message': 'Deletado por título',
            'deleted': idRequest,
            filmesJson
        }])
    }

module.exports = {
    getAll, 
    updateMovieById,
    updateTitleById,
    deleteMovieById,
    deleteMovieByTitle
}


