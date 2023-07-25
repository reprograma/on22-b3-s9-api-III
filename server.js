const app = require("./exercicios/para-sala/src/app") //chamando o arquivo app

const PORT = 1313 //PORTA

//iniciando o servidor
app.listen(PORT , ()=>{
    console.log(`To rodando na porta ${PORT}`) // estou rodando nessa porta
}) 