const app = require("./exercicios/para-casa/app") // Importando o arquivo app
const PORT = 433 // Porta

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Listening to requests on port ${PORT}`)
})