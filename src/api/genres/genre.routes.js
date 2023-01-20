const express = require('express');

const controller = require('./genre.controller')

const router = express.Router();

router.get('/', controller.indexGet)

router.post('/create', controller.createPost)

router.get('/getbyid/:id', controller.getById)

router.get('/getbyname/:name', controller.getByName)

router.put('/edit/:id', controller.editPut)

router.delete('/delete/:id', controller.deleteGenre)


module.exports = router;