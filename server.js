// Imports /////////////////////////////////////////////////////
const app = require("./exercicios/para-casa/src/app")
const PORT = 433

// Server Config ///////////////////////////////////////////////
app.listen(PORT, () => {
    console.log(`Listening to requests on port ${PORT}`)
})