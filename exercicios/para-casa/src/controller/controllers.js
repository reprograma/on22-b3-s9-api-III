const filmesJson = require("../models/ghiblifilms.json");
const express = require("express");
const app = express();
app.use(express.json());

const updateDirectorByID = (req, res) => {
  const idRequest = req.params.id;
  let newDirector = req.body.direct;
  let findMovie = filmesJson.find(movie => movie.id == idRequest);
  findMovie.director = newDirector;

  res.status(200).json([{
      message: "update Director",
      findMovie,
    }]);
};

const updateRunning_time = (req, res) => {
    const idRequest = req.params.id;
    let newRunning_time = req.body.runningTime;
    let findMovie = filmesJson.find(movie => movie.id == idRequest);
    findMovie.running_time =  newRunning_time;

    res.status(200).json([{
        message: "Update Running time",
        findMovie,
      }]);
};

const updateDescriptionByID = (req, res) => {
    const idRequest = req.params.id;
    let movieRequest = req.body;
    let findMovie = filmesJson.findIndex(movie => movie.id == idRequest);
    filmesJson.splice(findMovie, 1, movieRequest);

    res.status(200).json([{
        message: 'updated Description',
        filmesJson 
    }]);
};

const deleteMovieByProducer = (req, res) => {
    const idRequest = req.params.producer.toLocaleLowerCase();
    let deleteMovie = filmesJson.findIndex(movie => movie.producer.toLocaleLowerCase() == idRequest);
    filmesJson.slice(deleteMovie, 1);

    res.status(200).json([{
        'messege':' Delete Movie',
        'Delete': idRequest,
        filmesJson
    }]);
};

const getByID = (req, res) => {
   const idRequest = req.params.id;
   let movies = filmesJson.find(movie => movie.id == idRequest);

   res.status(200).send(movies);

}

module.exports = {
  updateDirectorByID,
  updateRunning_time,
  updateDescriptionByID,
  deleteMovieByProducer,
  getByID,
};
