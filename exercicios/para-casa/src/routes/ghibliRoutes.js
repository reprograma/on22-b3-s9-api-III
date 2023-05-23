const ghibliController = require('../controllers/ghibliController')
const express = require('express')
const router = express.Router()

router.patch('/modify/director/:id', ghibliController.modifyByDirector)
router.patch('/modify/running_time/:id', ghibliController.modifyByRunningTime)
router.put('/update/:id', ghibliController.updateDescriptionById)
router.delete('/delete/:producer', ghibliController.deleteByProducer)
router.get('/:id', ghibliController.getGhibliFilmsById)
router.get('/lista-completa', ghibliController.getAllGhibliFilms)


module.exports = router