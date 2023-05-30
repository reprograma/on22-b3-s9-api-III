const filmesJson = require("../models/ghiblifilms.json")
const express = require("express")
const app = express()
app.use(express.json())

// filme => id 
const getfilmeporid = (req, res) => {
    const idrequest = req.params.id
    const filmeEncontrado = filmesJson.find(filme => filme.id == idrequest)
    res.status(200).send(filmeEncontrado)
}



//rota delete => producer
const deletefilmeporproducer = (req, res)=>{
    const idrequest = req.params.producer.toLowerCase()
    const deletefilme = filmesJson.findIndex(filme => filme.producer.toLowerCase() == idrequest)
    filmesJson.splice(deletefilme, 1)
    res.status(200).json([{
        'message': 'Movie deleted by producer',
        'Deleted': idrequest,
        filmesJson
    }])
}


 // rota put => descrição 
const atualizarfilmedescrição = (req, res)=>{
    let idrequest = req.params.description
    let novadescrição = req.body.description.toLowerCase()
    let encontrarfilme = filmesJson.find(filme => filme.id == idrequest)
    encontrarfilme.description = novadescrição
    res.status(200).json ([{
        'message': 'A descrição do filme foi atualizado',
        filmesJson
    }])
}

// rota pacth => running_time 
const atualizarfilmeduração = (req,res)=>{
    let idrequest = req.params.running_time
    let novaduração = req.body.running_time
    let encontrarfilme = filmesJson.find(filme => filme.id == idrequest)
    encontrarfilme.running_time = novaduração
    res.status(200).json ([{
        'message': 'A duração do filme foi atualizada',
        filmesJson
    }])
 }
 
// rota patch => diretor
const atualizarfilmediretor = (req,res) =>{
    let idrequest = req.params.director
    let novodiretor = req.body.director.toLowerCase()
    let encontrarfilme = filmesJson.find(filme => filme.id == idrequest)
    encontrarfilme.director = novodiretor
    res.status(200).json ([{
        'message': 'O diretor do filme foi atualizado'
    }])
}



module.exports  = {
    getfilmeporid,
    deletefilmeporproducer,
    atualizarfilmedescrição,
    atualizarfilmeduração,
    atualizarfilmediretor
}