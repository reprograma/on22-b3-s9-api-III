const app = require("./exercicios/para-casa/src/app"); //chamando o arquivo app

require('dotenv').config();
const PORT = process.env.API_PORT || 3036; //PORTA

//iniciando o servidor
app.listen(PORT , ()=>{ //app, me escute
    console.log(`To rodando na porta ${PORT}`); //estou rodando nesta porta
});