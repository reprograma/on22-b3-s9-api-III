/**const app = require("./exercicios/para-sala/src/app") //chamando o arquivo app

const PORT = 1313 //PORTA

//iniciando o servidor
app.listen(PORT , ()=>{
    console.log(`To rodando na porta ${PORT}`)
})*/


const app = require('./exercicios/para-casa/src/app')

const PORT = 1313

app.listen(PORT, ()=>{
   console.log(`Porta ${PORT} funcionando!`)
})

