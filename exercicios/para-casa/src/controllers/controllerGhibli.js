const filmesGhibli = require("../models/ghiblifilms.json")
const express = require("express")
const app = express()
app.use(express.json())

//gerando um catálogo de filmes Ghibli: GET
const getAll = (request, response) => {
let filmRequest = request.query.film;
let filmesEncontrados = filmesGhibli.filter(film => film.filmeEncontrado == filmRequest);
response.status(200).json({
filmes: filmesEncontrados
})
}

//Criando uma rota GET pelo ID:
const filmByID = (request, response) => {
  let idRequest = request.params.id
  let filmeEncontrado = filmesGhibli.find(film => film.id == idRequest)
  response.status(200).send(filmeEncontrado)
}

//Declaro minha constante de atualização do filme por descrição: PUT
const updateDescriptionByID = (request, response) => {
  const idRequest = request.params.id
  let newDescription = request.body.description
  let filmeEncontrado = filmesGhibli.find(film => film.id == idRequest)
  filmeEncontrado.description = newDescription

  response.status(200).json([{
    message: "updated film description by ID",
    filmeEncontrado
  }])
}

//Declaro minha constante de atualização do filme por diretor: PATCH
const updateFilmByDirector = (request, response) => {
    const idRequest = request.params.id
    let newDirector = request.body.director
    let filmeEncontrado = filmesGhibli.find(film => film.id == idRequest)
    filmeEncontrado.director = newDirector
    
    response.status(200).json([{
        "message": "updated film by director",
        filmeEncontrado
    }]) 
}

//Declaro minha constante de atualização do running time: PATCH
    const updateFilmByRunningTime = (request, response) => {
    const idRequest = request.params.id
    let newRunningTime = request.body.running_time 
    let filmeEncontrado = filmesGhibli.find(film => film.id == idRequest)
    
    filmeEncontrado.running_time = newRunningTime
    response.status(200).json(filmeEncontrado)
}

//Declaro minha constante para deletar o filme por produtor: DELETE
    const deleteFilmByProducer = (request, response) => {
    const idRequest = request.params.producer.toLocaleLowerCase()
    let deleteFilmProducer = filmesGhibli.findIndex(film => film.producer.toLocaleLowerCase() == idRequest)
    filmesGhibli.splice(deleteFilmProducer, 1)

    response.status(200).json([{
        "message": "deleted film by producer",
        "Deleted": idRequest, 
        filmesGhibli
    }])
}

module.exports = {
    getAll,
    filmByID,
    updateDescriptionByID,
    updateFilmByDirector,
    updateFilmByRunningTime,
    deleteFilmByProducer,
}