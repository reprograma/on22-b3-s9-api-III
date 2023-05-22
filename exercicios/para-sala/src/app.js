const express = require("express"); //importando o express(biblioteca)
const app = express(); // executo o express
app.use(express.json()); // uso o bodyparser

const filmesRoutes = require("./routes/filmesRoutes"); //importa as rotas de filme. É isso que agente fez!

app.use("/filmes", filmesRoutes); //cirei uma rota raiz



// exportando para usar o server.js
module.exports = app;