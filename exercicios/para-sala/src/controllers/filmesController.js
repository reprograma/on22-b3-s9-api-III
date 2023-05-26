const filmesJson = require("../models/filmes.json")
const express = require("express")
const app = express()
app.use(express.json())

const getAll= (request,response)=>{
    response.status(200).json([{
        "filmes":filmesJson
    }])
}
const updateMovieByID = (request,response)=>{
    const idRequest = request.params.id
    let movieRequest = request.body
    let findMovie = filmesJson.findIndex(movie => movie.id == idRequest)
//ESTA REMOVENDO UM(1) ELEMENTO,APARTR DO INDEX ENCONTRADO
// E ADICIONANDO O MOVIEREQUEST NO LUGAR
    filmesJson.splice(findMovie,1,movieRequest)
    response.status(200).json([{
        "message": "updated movie/filme atualizado",
        filmesJson
    }])
}
//atualizando o titulo do filme
const changeTitleByID = (req,res)=>{
    const idRequest = req.params.id
    let newTitle = req.body.title//alterando o titulo pelo body atraves do id
    let findMovie = filmesJson.find(movie => movie.id == idRequest)
    //dps disso no meu filme a parte especifica do titulo sera alterada
    //pelo novo titulo
    findMovie.title = newTitle
    res.status(200).json([{
        "message": "O título do filme foi atualizado",
        findMovie
    }])
}
const deleteMovieByID = (req,res)=>{
    const idRequest = req.params.id
    const deleteMovie = filmesJson.findIndex(movie=> movie.id == idRequest)//achando o filme para deletar
    filmesJson.splice(deleteMovie,1)//deletando o livro encontrado todo
    res.status(200).json([{//traz tanto o id do filme deletado como todos os filmes do json
        "message":"Filme deletado",
        "deleted":idRequest,
        filmesJson 
    }])
}



module.exports = {
    getAll,
    updateMovieByID,
    changeTitleByID
}