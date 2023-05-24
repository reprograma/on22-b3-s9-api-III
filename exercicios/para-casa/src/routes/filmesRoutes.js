const filmesController = require('../controllers/filmesController')
const express = require('express')
const router = express.Router()


router.get('/filmesId/:id', filmesController.getById)
router.patch('/change/:id', filmesController.updateDirectorById)
router.patch('/change/tempoDuracao/:id', filmesController.tempoDuracaoById)
router.put('/update/:id', filmesController.updateDescricaoById)
router.delete('/delete/:producer' , filmesController.deleteByProducer)

module.exports = router