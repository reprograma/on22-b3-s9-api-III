const filmesJson = require("../models/filmes.json");
const express = require("express");
const app = express();
app.use(express.json());

const getAll = (req, res) => {
    res.status(200).json([{
        "filmes": filmesJson
    }]);
};

const updateMovieByID = (req, res) => {
    const idRequest = req.params.id;
    let movieRequest = req.body;
    let findMovie =  filmesJson.findIndex(movie => movie.id == idRequest); //procurando o filme
//está removendo UM elemento, a partir o index(id) encontrado e adicionando o movieRequest no lugar
    filmesJson.splice(findMovie, 1, movieRequest);

    res.status(200).json([{
        'message': 'updated movie/filme atualizado',
        filmesJson 
    }]);
};

//declaro minha constante de atualizar o titulo do filme
const updateTitleByID = (req, res) => {
    const idRequest = req.params.id; // defino que vou buscar pelo id, pois ele é unico
    let newTitle = req.body.title; //altero o titulo pelo body através do id
    let findMovie = filmesJson.find(movie => movie.id == idRequest); //filtrei no bancos de dados(json) para encontrar o id
    //depois disso no meu filme a parte especifica do titulo sera alterada pelo novo titulo
    findMovie.title = newTitle;

    res.status(200).json([{
        'message':'O titulo do filme foi atualizado/ update title',
        findMovie
    }]);
};

const deleteMovieByID = (req, res) => {
    const idRequest = req.params.id;
    const deleteMovie = filmesJson.findIndex(movie => movie.id == idRequest);
    filmesJson.slice(deleteMovie, 1);

    res.status(200).json([{
        'messege':'Filme deletado/ Deleted Movie',
        'Deleted': idRequest,
        filmesJson
    }])
}

const deletefilmByTitle = (req, res) => {
    const idRequest = req.params.title.toLowerCase();
    const deleteMovie = filmesJson.findIndex(movie => movie.title.toLocaleLowerCase() == idRequest);
    filmesJson.splice(deleteMovie, 1);

    res.status(200).json([{
        'message': 'Filme deletado/ Deleted Movie',
        'Deleted':idRequest,
        filmesJson
    }])
}

module.exports = {
    getAll, 
    updateMovieByID,
    updateTitleByID,
    deleteMovieByID,
    deletefilmByTitle
};