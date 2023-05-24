const app = require("./exercicios/para-casa/src/app") //chamando o arquivo app

const PORT = 2345 //PORTA

//iniciando o servidor
app.listen(PORT , ()=>{                              //app me escute
    console.log(`Estou rodando na porta ${PORT} e ok`)      //estou rodando nesta porta
}) 
