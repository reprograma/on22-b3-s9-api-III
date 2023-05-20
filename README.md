# Introdução à API: PUT + PATCH + DELETE

Turma Online 22 - Todas em Tech | Back-end | Semana 9 | 2023 | Professora Gaia Maria

### Instruções

- Fork esse repositório
- Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
- Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)

### Resumo

- **PROTOCOLOS HTTP:**  O Protocolo de Transferência de Hipertexto é um serviço utilizado dentro do modelo Client/Server e é baseado em requisições (requests) e respostas (responses). Qualquer servidor que você escolha para hospedar um site tem um programa projetado para receber solicitações HTTP. Portanto, o navegador que você usa é um cliente HTTP que envia solicitações constantemente ao seu servidor.
*****  
- **VERBOS HTTP:** São um conjunto de métodos de requisição responsáveis por indicar uma ação a ser executada. O Client envia um request solicitando um dos verbos e o Server responde com um response. São eles: GET, POST, PATCH, PUT E DELETE.
*****  
- **STATUS CODE - HTTP:** Os códigos de status das respostas HTTP indicam se uma requisição HTTP foi concluída. É a pessoa desenvolvedora  que adiciona na construção do servidor quais serão os casos referentes a cada resposta.
*****  
- **CRUD:** CRUD é a composição da primeira letra de quatro operações básicas de um banco de dados. Elas são o que a maioria das aplicações fazem.
   - C: Create (criar) - criar um novo registro  
   - R: Read (ler) - exibir as informações de um registro  
   - U: Update (atualizar) - atualizar os dados do registro  
   - D: Delete (apagar) - apagar um registro  
    
*****  

- **API:** Uma API busca construir formas/ferramentas para se utilizar uma certa funcionalidade ou uma informação sem ter que ''reinventar'' algo novo. Ela não precisa estar somente em um link na Internet, Mas também, pode ser uma lib ou um framework, uma função já pronta em uma linguagem.
  - *API RESTFUL:*  Uma API REST ou RESTful, é uma interface de programação de aplicações (API ou API web). Permitem a criação de um projeto com interfaces bem definidas. permitindo, que aplicações se comuniquem.
  REST é a sigla em inglês para "Representational State Transfer", que em português significa tansferência de estado representacional.
 *****  

### Exercícios - PARA CASA

- Crie seu servidor e uma rota padrão
- Realize as importações e requisições necessarias  
- Crie um rota  **GET** que liste todos os filmes Ghibli;

- Crie rotas **GET** que possibilite buscar filme pelo título, id e pelo diretor;

- Devo conseguir cadastrar novos filme com uma rota **POST**

### Material da aula

APRESENTAÇÃO DISPONÍVEL [AQUI](https://www.canva.com/design/DAFinZcTFN0/ikeT_Gljyu_VhxMQ_oRVdA/edit?utm_content=DAFinZcTFN0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

### Links Úteis
- [POSTMAN](https://www.postman.com/)
- [Basico sobre http](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Basics_of_HTTP)
- [Requisições HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Messages#requisi%C3%A7%C3%B5es_http)
- [REST API](https://becode.com.br/o-que-e-api-rest-e-restful/)
- [Express JS](https://expressjs.com/pt-br/)
- [Entendendo map, filter, some, find e reduce do JavaScript Com Pokemons](https://medium.com/@mathiasghenoazzolini/entendendo-map-filter-some-find-e-reduce-do-javascript-com-pokemons-e4884551817b)
- [Quatro métodos de pesquisa através de arrays em JavaScript](https://www.digitalocean.com/community/tutorials/js-array-search-methods-pt)