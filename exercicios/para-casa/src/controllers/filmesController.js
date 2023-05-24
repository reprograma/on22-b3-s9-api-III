
const ghibliFilmsJson = require ('../models/ghiblifilms.json')
const express = require ('express')
const app = express()
app.use(express.json())


const updateDirectorByID =(req,res)=>{
    const idRequest = req.params.id 
    let newDirector = req.body.director 
    let findMovie = ghibliFilmsJson.find(movie => movie.id == idRequest)
    findMovie.director = newDirector
    res.status(200).json([{
            "message": "updated director",
            findMovie
        }])
    }

    const updateRunningTimeByID =(req,res)=>{
        const idRequest = req.params.id 
        let newRunningTime = req.body.running_time 
        let findMovie = ghibliFilmsJson.find(movie => movie.id == idRequest)
        findMovie.running_time = newRunningTime
        res.status(200).json([{
                "message": "updated running_time",
                findMovie
            }])
        }

const updateDescriptionByID =(req,res)=>{
    const idRequest = req.params.id 
    let newDescription = req.body.description 
    let findMovie = ghibliFilmsJson.find(movie => movie.id == idRequest) 
    findMovie.description = newDescription
    res.status(200).json([{
            "message": "updated description",
            findMovie
        }])
    }
    const deleteMovieByProducer = (req, res)=>{
            const idRequest = req.params.producer
            const deleteMovie = ghibliFilmsJson.findIndex(movie=>movie.producer == idRequest)
            ghibliFilmsJson.splice(deleteMovie ,1)
            res.status(200).json([{
                'message':"filme deletado/deleted movie",
                "Deleted": idRequest,
                ghibliFilmsJson
            }])
        }
        const getMovieByID = (request,res)=>{
            let idRequest = request.params.id
            let idEncontrado = ghibliFilmsJson.find(movie=> movie.id == idRequest)
        
            res.status(200).json([{
                'message: Filme encontrado': 
                idEncontrado
            
        }])
        }
        
        
    

    module.exports = {
        updateDirectorByID,
        updateRunningTimeByID,
        updateDescriptionByID,
        deleteMovieByProducer,
        getMovieByID
    }