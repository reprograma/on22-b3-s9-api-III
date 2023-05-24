const controller = require('../controllers/controller');
const express = require('express');

const router = express.Router();

router.get('/filmes', controller.getAll); //ok

router.get('/filme/:id', controller.getByID); //ok

router.patch('/upd-director/:id', controller.updateDirectorByID); //ok

router.patch('/upd-duration/:id', controller.updateTimeDuration); //ok

router.put('/upd-desc/:id', controller.updateDescription); //ok

router.delete('/deleteproducer/:producer', controller.deleteByProducer); //ok

module.exports = router;