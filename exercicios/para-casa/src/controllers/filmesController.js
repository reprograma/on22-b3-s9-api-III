const filmesJson = require('../models/ghiblifilms.json')
const express = require('express')
const app = express()

app.use(express.json())

const getById = (req, res) => {
    const idRequest = req.params.id
    const filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)
    res.status(200).json([{'message': 'filme encontrado garota:', filmeEncontrado}])
}

const updateDirectorById = (req, res) => {
    const idRequest = req.params.id
    let newDirector = req.body.director
    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)
    filmeEncontrado.director = newDirector 
    res.status(200).json([{
        'message': 'o diretor do filme foi atualizado', filmeEncontrado
    }])
}

const tempoDuracaoById = (req, res) => {
    const idRequest = req.params.id
    let tempoNovo = req.body.running_time
    let novo = filmesJson.find(tempo => tempo.id == idRequest)
    novo.running_time = tempoNovo
    res.status(200).json([{
        'message': 'o tempo foi mudado',
        'running_time': idRequest, filmesJson
    }])
}

const updateDescricaoById = (req, res) => {
    const idRequest = req.params.id
    let descricaoRequest= req.body
    let descricaoNova = filmesJson.findIndex(filme => filme.id == idRequest)
    filmesJson.splice(descricaoNova, 1 , descricaoRequest)
    res.status(200).json([{'message': 'descrição atualizada', 'description': descricaoRequest}])
}

// ⚠️ profa esse codigo do deleteByProducer n ta apagando no postman, ele me manda o json todinhoo e n apaga nada!! n sei o que to fazendo errado, to esperando pela aula de correção kkkkkk ms o resto ta pegando direitinho

const deleteByProducer = (req, res) => {
    const idRequest = req.params.producer.toLocaleLowerCase()
    const deleteProducer = filmesJson.findIndex(filme => filme.producer.toLocaleLowerCase() == idRequest)
    filmesJson.splice(deleteProducer, 1)
    res.status(200).json([{
        'message': 'Producer deletado',
        'deleted': idRequest, filmesJson
        }])
}

module.exports = {
    getById, updateDirectorById, tempoDuracaoById, updateDescricaoById, deleteByProducer
}