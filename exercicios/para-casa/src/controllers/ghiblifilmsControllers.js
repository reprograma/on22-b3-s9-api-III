//acesso meus dados
const ghiblifilms = require("../models/ghiblifilms.json")
//importar o express
const express = require("express")
//executar o express
const app = express()
//body parse
app.use(express.json())

const updateDirectorByID = (req,res)=>{
    const idRequest = req.params.id
    let newDirector = req.body.director
    const findMovie = ghiblifilms.find(movie => movie.id == idRequest)
    
    findMovie.director = newDirector//pegando o diretor que eu inserir e armazenando no dado
    res.status(200).json([{
        "message":"Updated director",
        ghiblifilms
    }])
}

const updateRunningTimeByID =(req,res)=>{
    const idRequest = req.params.id
    let newRunTime = req.body.running_time
    let findMovie = ghiblifilms.find(movie=> movie.id == idRequest)
    findMovie.running_time = newRunTime
    res.status(200).json([{
        "message":"Running time alterado",
        ghiblifilms
    }])

}
const putByID =(req,res)=>{
    const idRequest = req.params.id
    let movieRequest = req.body
    let findMovie = ghiblifilms.find(movie=> movie.id == idRequest)
    ghiblifilms.splice(findMovie,1,movieRequest)
    res.status(200).json([{
        "message": "Filme atualizado",
        ghiblifilms

    }])
} 
const deleteFilm =(req,res)=>{
    const producerRequest = req.query.producer.toLowerCase()
    const deleteMovie = ghiblifilms.find(movie=> movie.producer == producerRequest)
    ghiblifilms.splice(deleteMovie,1)
    res.status(200).json([{
        "message":"Filme deletado",
        "deleted":ghiblifilms
    }])
}
const getByID = (req,res)=>{
    const idRequest = req.params.id
    let findMovie = ghiblifilms.find(movie = movie.id == idRequest)
    res.status(200).json([{
        "message":"Filme encontrado",
        findMovie
    }])
}



module.exports= {
    updateDirectorByID,
    updateRunningTimeByID,
    putByID,
    deleteFilm,
    getByID
}