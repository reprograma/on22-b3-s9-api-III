const app = require("./exercicios/para-casa/src/app") //chamando o arquivo app

const PORT = 1010 //PORTA

//iniciando o servidor
app.listen(PORT , ()=>{
    console.log(`To rodando na porta ${PORT}`)
}) 