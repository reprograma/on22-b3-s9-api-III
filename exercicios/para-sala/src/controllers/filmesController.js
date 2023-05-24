const filmesJson = require("../models/filmes.json");
const express = require("express");

const app = express();
app.use(express.json());

const getAll = (_req, res) => {
	res.status(200).json([{"Filmes": filmesJson}]);
}

const updateMovieById = (req, res) => {
	const idRequest = req.params.id;
	let movieRequest = req.body;
	let findMovie = filmesJson.findIndex(movie => movie.id == idRequest);
	// está removendoum elemento, a partir o index encontrado e adicionando o movieRequest no lugar
	filmesJson.splice(findMovie, 1, movieRequest);
	res.status(200).json([{
		"message": "updated movie/filme atualizado", filmesJson
	}]);
}

// Declare uma constante de atualizar o título do filme
const updateTitleById = (req, res)=> {
	const idRequest = req.params.id; // defini que vou buscar pelo id que é único
	let newTitle = req.body.title;// altero título pelo bidy através do id
	let findMovie = filmesJson.find(movie => movie.id == idRequest);// filtrar no "banco de dados" para encontrar o id

	//depois disso, no meu filme, a parte específica do título será alterada pelo novo título
	findMovie.title = newTitle;
	res.status(200).json([{
		"message": "O título do seu feu filme foi atualizado/updated title",
		findMovie
	}]);
}

const deleteMovieById = (req, res) => {
 const idRequest = req.params.id;
 const deleteMovie = filmesJson.findIndex(movie => movie.id == idRequest);
 filmesJson.splice(deleteMovie, 1);
 res.status(200).json([{
	"message": "Filme deletado/ Deleted Movie",
	"Deleted": idRequest,
	filmesJson
}]);
}

const deleteMovieByTitle = (req, res) => {
	const idRequest = req.params.title.toLowerCase();
	const deleteMovie = filmesJson.findIndex(movie => movie.title.toLowerCase()== idRequest);
	filmesJson.splice(deleteMovie, 1)
	res.status(200).json([{
		"message": "Deletd Movie",
		"Deleted": idRequest,
		filmesJson
	}]);
}

module.exports = {
	getAll,
	updateMovieById,
	updateTitleById,
	deleteMovieById,
	deleteMovieByTitle
}
