const filmesController = require("../controllers/filmesController")
const express = require("express")
//const {Router} = require("express")
const router = express.Router()

router.get('/catalogo', filmesController.getAll)
module.exports = router