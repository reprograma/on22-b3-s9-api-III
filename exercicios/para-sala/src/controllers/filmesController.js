const filmesJson = require('../models/filmes.json');
const express = require('express');

const app = express();
app.use(express.json());


const getAll = (req,res) => {
    res.status(200).json([{
        'filmes': filmesJson
    }])
}

const updateMovieByID = (req, res) => {
    const idRequest = req.params.id;
    let movieRequest = req.body;
    console.log(movieRequest);
    let findMovie = filmesJson.findIndex(movie => movie.id == idRequest);

    filmesJson.splice(findMovie, 1, movieRequest);
    res.status(200).json([{
        'msg': "updated movie", filmesJson
    }]);
}
//declaro minha constante ded atualizar o título do filme
const updateTitleByID = (req,res) => {
    const idRequest = req.params.id; //buscando pelo ID pois é unico
    const newTitle = req.body.title;

    const findMovie = filmesJson.find(movie => movie.id == idRequest); //filtrei usando o ID
    //depois disso, a parte especifica do filme, o titulo, será alterada pelo novo

    findMovie.title = newTitle;
    res.status(200).json([{
        'msg': "updated title", findMovie
    }])

}

const deleteMovieByID = (req,res) => {
    const idRequest = req.params.id;
    
    const deleteMovie = filmesJson.findIndex(movie => movie.id == idRequest);
    filmesJson.splice(deleteMovie, 1);

    res.status(200).json([{
        'msg': "deleted movie", 
        'Deleted': idRequest,
        filmesJson
    }])
}

const deleteMovieByTitle = (req,res) => {
    const deleteTitle = req.params.title.toLowerCase();
    const deleteMovie = filmesJson.findIndex(movie => movie.title.toLowerCase() == deleteTitle);

    filmesJson.splice(deleteMovie, 1);

    res.status(200).json([{
        'msg': "Deleted movie.",
        'Deleted': deleteTitle,
        filmesJson
    }])
}

module.exports = {
    getAll,
    updateMovieByID,
    updateTitleByID,
    deleteMovieByID,
    deleteMovieByTitle
};