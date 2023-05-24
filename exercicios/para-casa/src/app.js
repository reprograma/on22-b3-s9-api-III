const expres = require("express");
const app = expres();
app.use(expres.json());

const filmsRoutes = require("./Routes/routes");
app.use("/ghibliFilmes", filmsRoutes);

module.exports = app;