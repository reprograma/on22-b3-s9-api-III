const ghibliFilmesJson = require("../models/ghiblifilms.json");
const express = require("express");
const app = express();
app.use(express.json());

const getAll = (_req, res) => {
	res.status(200).json([{"Filmes": ghibliFilmesJson}]);
}

const ghibliFilmById = (req, res) => {
	const idRequest = req.params.id;
	const filmRequest = ghibliFilmesJson.find(film => film.id == idRequest);
	res.status(200).send(filmRequest);
}

// const updateDirectorById = (req, res) => {
// }


module.exports = {
getAll,
ghibliFilmById
}