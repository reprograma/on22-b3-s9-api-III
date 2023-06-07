const express = require('express');
const app = express();
app.use(express.json());

// Importe o arquivo JSON de filmes
const filmesJson = require('../models/filmes.json');

// Função para listar todos os filmes
const getAll = (request, response) => {
  response.status(200).json(filmesJson);
};

// Função para atualizar o título de um filme
const updateTitle = (request, response) => {
  const idRequest = request.params.id;
  const novoTitulo = request.body.title;

  const filmeFiltrado = filmesJson.find(filme => filme.id == idRequest);
  if (filmeFiltrado) {
    filmeFiltrado.title = novoTitulo;
    response.status(200).json({
      mensagem: 'Filme atualizado',
      filme: filmeFiltrado
    });
  } else {
    response.status(404).json({ mensagem: 'Filme não encontrado' });
  }
};

// Função para atualizar um filme
const updateMovie = (request, response) => {
  const idRequest = request.params.id;
  const filmeRequest = request.body;

  const indexEncontrado = filmesJson.findIndex(filme => filme.id == idRequest);
  if (indexEncontrado !== -1) {
    filmesJson.splice(indexEncontrado, 1, filmeRequest);
    response.status(200).json({
      mensagem: 'Filme atualizado',
      filmes: filmesJson
    });
  } else {
    response.status(404).json({ mensagem: 'Filme não encontrado' });
  }
};

// Função para deletar um filme pelo ID
const deleteFilme = (request, response) => {
  const idRequest = request.params.id;

  const indiceFilme = filmesJson.findIndex(filme => filme.id == idRequest);
  if (indiceFilme !== -1) {
    filmesJson.splice(indiceFilme, 1);
    response.status(200).json({
      mensagem: 'Filme deletado',
      deletado: idRequest,
      filmes: filmesJson
    });
  } else {
    response.status(404).json({ mensagem: 'Filme não encontrado' });
  }
};

// Função para deletar um filme pelo título
const deleteFilmePorTitulo = (request, response) => {
  const titleRequest = request.params.title.toLowerCase();

  const indiceFilme = filmesJson.findIndex(filme => filme.title.toLowerCase() === titleRequest);
  if (indiceFilme !== -1) {
    filmesJson.splice(indiceFilme, 1);
    response.status(200).json({
      mensagem: 'Filme deletado',
      deletado: titleRequest,
      filmes: filmesJson
    });
  } else {
    response.status(404).json({ mensagem: 'Filme não encontrado' });
  }
};

// Rotas
app.get('/filmes', getAll);
app.put('/filmes/:id/title', updateTitle);
app.put('/filmes/:id', updateMovie);
app.delete('/filmes/:id', deleteFilme);
app.delete('/filmes/titulo/:title', deleteFilmePorTitulo);

// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});