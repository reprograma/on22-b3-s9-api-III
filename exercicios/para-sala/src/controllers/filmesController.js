/// acessando endereço do banco/json
const filmesJson = require('../models/filmes.json')
const express = require('express')
const app = express() //executar o express

app.use(express.json()) // fazendo o body parser

const getAll = (request, response) => {

    response.status(200).json([
        {
            "filmes": filmesJson
        }
    ])

}

// declaro minha constante de atualizar o titulo do filme 

const updateTitle = (request, response) => {
    const idRequest = request.params.id
    let novoTitulo = request.body.title
    filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)
    filmeFiltrado.title = novoTitulo
    response.status(200).json([{
        "mensagem": "seu filme foi atualizado",
        filmeFiltrado
    }])
}

    // guardo o id que foi enviado no request na constante idRequest (pq params? pq id é especifico e eu uso params para buscas especificas) 
   
    // guardo o titulo que foi enviado no body da requisiçao (pq body? pq pra put, patch e post eu PRECISO passar um body)
    
// depois disso tudo, mando uma response dizendo q ta tudo OK e envio o filme com a alteraçao
    // preciso filtrar o meu ''banco de dados'' para encontrar o id que a pessoa digitou
   

    // depois disso, o meu filme a parte especifica do titulo será alterada pelo Novo Titulo que foi enviado


const updateMovie = (request, response) => {
    const idRequest = request.params.id
    let filmeRequest = request.body
    let indexEncontrado = filmesJson.findIndex(filme => filme.id == idRequest)
    // oq isso esta fazendo???
    // esta removendo UM elemento, a partir de iNDEX ENCONTRADO, e adicionando o FILME REQUEST no lugar.
    filmesJson.splice(indexEncontrado, 1, filmeRequest)
    response.status(200).json([
        {
            "message": "filme atualizado",
            filmesJson
        }
    ])
}

const deleteFilme = (request, response) => {
    const idRequest = request.params.id    
    const indiceFilme = filmesJson.findIndex(filme => filme.id == idRequest)
    filmesJson.splice(indiceFilme, 1)
    response.status(200).json([{
        "message": "filme deletado, mona",
        "deletado": idRequest,
        filmesJson
    }])
}

    // id que quero deletar

    
    // pegar o indice(index) do filme que vai ser deletado

   
    
    // retira o filme da array de filmes a partir do indice que eu disser 
    // ARRAY.SPLICE(INDICE, NUMERO DE COISAS QUE VOU DELETAR, ITEM QUE VOU ADICIONAR)

    


    const deleteFilmePorTitulo = (request, response)=>{
        //id que quero deletar
        const idRequest = request.params.title.toLowerCase()
    
        //pegando o indice(index) da tarefa q vai ser deletada
        const indiceFilme = filmesJson.findIndex(filme => filme.title.toLowerCase() == idRequest)
    
        //retira a tarefa da array de tarefas a partir do seu indice
        //ARRAY.SPLICE(INDICE, NUMERO DE ITENS DELETADOS, ITEM A SER ADICIONADO)
        //quando splice a gente so coloca o indice e 1, estamo retirando somente o tem
        filmesJson.splice(indiceFilme, 1)
    
        response.status(200).json([
            {
                "message": "filme deletado com sucesso",
                "deletada": idRequest,
                filmesJson
            }
        ])
    }


//exportando todas os funções do controller para ser usada no filmesRoutes.js
module.exports = {
    getAll,
    updateTitle,
    updateMovie,
    deleteFilme,
    deleteFilmePorTitulo
}