const express = require('express');
const controller = require('./author.controller')

const router = express.Router();

router.get('/', controller.indexGet)

router.post('/create', controller.createPost)

router.get('/getbyid/:id', controller.getbyid)

router.get('/getbyname/:name', controller.getByName)

router.put('/edit/:id', controller.editPut)

router.delete('/delete/:id', controller.deleteAuthor)





module.exports = router;