const express = require("express") //aqui está importando uma biblioteca (npm i express)
const app = express()
app.use(express.json())

const ghibliRoutes = require("./routes/ghibliRoutes") //importa as rotas de filmes. Aqui está importando algo(um arquivo) que já tem nosso código.

app.use("/filmes", ghibliRoutes) //criei uma rota raiz



module.exports = app //serve para exportar nossas informações para outro lugar e poder utilizar nesse outro lugar.







//OBS:
//Nós vamos fazer um caminho, onde uma coisa estará chamando a outra.
//Eu preciso do app1 para conectar o meu server com a pasta routes.
//E minha pasta routes estará conectada com a minha pasta controllers.
//E a minha pasta controllers estará conectada ao meu models.
//Está tudo conectado.
//E a pasta raiz é a minha pasta central, ela que define o primeiro caminho que eu irei realizar.
//E esse primeiro caminho é o de rotas.
//Todas minha rotas precisarão comecar com /filmes

//O server se conecta apenas com o app