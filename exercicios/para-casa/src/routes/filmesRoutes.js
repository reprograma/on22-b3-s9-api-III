const controller = require('../controllers/filmesController')
const express = require('express')
const router = express.Router()

router.get('/catalogo', controller.getAll)
router.put('/update/:id', controller.updateFilmDescriptionByID)
router.patch('/change/:id', controller.updateFilmDirectorByID)
router.patch('/modification/:id', controller.updateFilmRunningTimeByID)
router.delete('/delete/:id', controller.deleteFilmProducer)
router.get('/film/:id', controller.getFilmByID)



module.exports = router

