const express = require ('express');

const controller = require('./book.controller')

const router = express.Router();

router.get('/', controller.indexGet)

router.post('/create', controller.createPost)

router.get('/getbyid/:id', controller.getById)

router.get('/getbytitle/:title', controller.getByTitle)

router.get('/getbyauthor/:author', controller.getByAuthor)

router.put('/edit/:id', controller.editPut)

router.delete('/delete/:id', controller.deleteBook)




module.exports = router