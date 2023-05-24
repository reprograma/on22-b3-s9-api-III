
const filmesJson = require ('../models/filmes.json')
const express = require ('express')
const app = express()
app.use(express.json())

const getAll = (req, res)=>{
    res.status(200).json([{"filmes": filmesJson}])

}

const updateMovieByID = (req,res)=> {
    const idRequest = req.params.id
    let movieRequest = req.body
let findMovie = filmesJson.findIndex(movie => movie.id==idRequest)
//Está removendo um elemento, por isso do numero 1 ali, a partir do index encontrado e adicionando o movieRequest no lugar
filmesJson.splice(findMovie, 1, movieRequest)
res.status(200).json([{
    'message' : "updatad movie/filme atualizado",
    filmesJson

}])
}



//declaro minha const de atualisar o titulo de filme
const updateTitleByID =(req,res)=>{
    const idRequest = req.params.id //defino que vou buscar pelo id porque é unico
    let newTitle = req.body.title //altero o titulo pelo body através do id
    let findMovie = filmesJson.find(movie => movie.id == idRequest) //filtrei 'banco de dados' para encontrar o id
    //depois disso, no meu filme a parte especifica do titulo será alterada palo novo titulo
    findMovie.title = newTitle
    res.status(200).json([{
            "message": "updated title",
            findMovie
        }])
    }
const deleteByID =(req,res)=>{
    const idRequest = req.params.id
    const deleteMovie = filmesJson.findIndex(movie=>movie.id == idRequest)
    filmesJson.splice(deleteMovie ,1)
    res.status(200).json([{
        'message':"filme deletado/deleted movie",
        "Deleted": idRequest,
        filmesJson
    }])
}
const deleteMovieByTitle = (req, res)=>{
    const idRequest = req.params.title.toLowerCase()
    const deleteMovie = filmesJson.findIndex(movie => movie.title.toLowerCase() == idRequest)
    filmesJson.splice(deleteMovie, 1)
    res.status(200).json ([{
        "message": "delete movie by title",
        "Deleted":idRequest,
        filmesJson

    }])
}

module.exports = {
    getAll, 
    updateMovieByID,
    updateTitleByID,
    deleteByID,
    deleteMovieByTitle
}