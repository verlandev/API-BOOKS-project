const express = require ('express');

const controller = require('./book.controller')

const router = express.Router();

router.get('/', controller.indexGet)

router.get('/create', controller.createPost)

router.get('/getbyid/:id', controller.getById)




module.exports = router