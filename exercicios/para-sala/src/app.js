const express = require("express") //importando o express
const app = express() // executo o express
app.use(express.json()) // uso o bodyparser





// exportando para usar o server.js
module.exports = app 