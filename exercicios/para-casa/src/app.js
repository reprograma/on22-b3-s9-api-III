const express = require("express"); //importando o express
const app = express(); // executo o express
app.use(express.json()); // uso o bodyparser

const routes = require('./routes/router');

app.use('/', routes);

module.exports = app;