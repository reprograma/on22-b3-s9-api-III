const filmescontrollers = require("../controllers/filmescontrollers") 
const express = require("express") 
const router = express.Router() 

router.get('/filmes/:id', filmescontrollers.getfilmeporid)
router.delete('/deletefilme/:producer', filmescontrollers.deletefilmeporproducer)
router.put('/atualizar/:id', filmescontrollers.atualizarfilmedescrição)
router.patch('/update/:running_time', filmescontrollers.atualizarfilmeduração)
router.patch('/updated/:director', filmescontrollers.atualizarfilmediretor)

module.exports = router