const express = require ('express');
const database = require ('./src/utils/database')


database.connectDB()

const bookRoutes = require('./src/api/books/book.routes')
const indexRoutes = require('./src/api/index/index.routes')



const PORT = 3000;

const server  = express();

server.use(express.json())


server.use('/books', bookRoutes)
server.use('/', indexRoutes)


// En caso de que no se encuentre la URL

server.use('*', (req, res, next) => {
    return res.status(404).json('No se encuentra la URL. Prueba con otra')
})

// Controlador de errores

server.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || "Unexpected error"; 
    return res.status(status).json(message)
})


server.listen(PORT,() => {
    console.log(`Te escucho en http:localhost:${PORT}`)
})

