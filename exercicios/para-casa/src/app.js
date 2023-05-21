const expres = require("express");
const app = expres();
app.use(expres.json());

const filmsRoutes = require("./routes/routes");
app.use("/filmes", filmsRoutes);

module.exports = app;