const app = require("./exercicios/para-casa/src/app") //chamando o arquivo app

const PORT = 7788 //PORTA

//iniciando o servidor
app.listen(PORT , ()=>{ //app me escute 
    console.log(`To rodando na porta ${PORT}`) //estou rodando nessa porta
}) 