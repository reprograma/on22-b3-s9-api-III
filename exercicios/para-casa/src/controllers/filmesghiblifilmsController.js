const filmes = require('../models/filmesghiblifilms.json')
const express = require('express')
const app = express()

app.use(express.json()) 
const getAll = (request, response) => {

    response.status(200).json([
        {
            "filmes": filmes
        }
    ])

}


const updateTitle = (request, response) => {
    const idRequest = request.params.id
    let novoTitulo = request.body.title
    filmeFiltrado = filmes.find(filme => filme.id == idRequest)
    filmeFiltrado.title = novoTitulo
    response.status(200).json([{
        "mensagem": "seu filme foi atualizado",
        filmeFiltrado
    }])
}


const updateMovie = (request, response) => {
    const idRequest = request.params.id
    let filmeRequest = request.body
    let indexEncontrado = filmesJson.findIndex(filme => filme.id == idRequest)
   
    filmesJson.splice(indexEncontrado, 1, filmeRequest)
    response.status(200).json([
        {
            "message": "filme atualizado",
            filmesJson
        }
    ])
}

const deleteFilme = (request, response) => {
    const idRequest = request.params.id    
    const indiceFilme = filmesJson.findIndex(filme => filme.id == idRequest)
    filmesJson.splice(indiceFilme, 1)
    response.status(200).json([{
        "message": "filme deletado, mona",
        "deletado": idRequest,
        filmesJson
    }])
}


    const deleteFilmePorTitulo = (request, response)=>{
        
        const idRequest = request.params.title.toLowerCase()
        const indiceFilme = filmesJson.findIndex(filme => filme.title.toLowerCase() == idRequest)
        filmesJson.splice(indiceFilme, 1)
    
        response.status(200).json([
            {
                "message": "filme deletado com sucesso",
                "deletada": idRequest,
                filmesJson
            }
        ])
    }


module.exports = {
    getAll,
    updateTitle,
    updateMovie,
    deleteFilme,
    deleteFilmePorTitulo
}