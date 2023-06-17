let filmesGhibli = require("../models/ghiblifilms.json");

const update = (request, response) => {
  const idRequest = request.params.id;
  const newDirector = request.body.director;
  const newRunningTime = request.body.runningTime;
  const newDescription = request.body.description;

  filmeFiltrado = filmesGhibli.find((filme) => filme.id == idRequest);

  if (newDirector) {
    filmeFiltrado.director = newDirector;
  }

  if (newRunningTime) {
    filmeFiltrado.running_time = newRunningTime;
  }

  if (newDescription) {
    filmeFiltrado.description = newDescription;
  }

  return response.status(200).json([
    {
      mensagem: "O diretor foi atualizado",
      filmeFiltrado,
    },
  ]);
};

const deleteMovies = (request, response) => {
  const producer = request.params.producer;

  const updateMovies = filmesGhibli.filter(
    (filme) => filme.producer !== producer
  );

  filmesGhibli = updateMovies;

  return response.status(200).json(filmesGhibli);
};

const getMovie = (request, response) => {
  const id = request.params.id;
  const movie = filmesGhibli.find((mv) => mv.id === id);

  return response.status(200).json(movie);
};

module.exports = {
  update,
  deleteMovies,
  getMovie
};
