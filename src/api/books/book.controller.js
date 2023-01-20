const { nextTick } = require('process');
const Book = require ('./book.model');

const indexGet = async (req, res, next) =>{
    try{
        const books = await Book.find();
        return res.status(200).json(books)

    }catch(error){
        return nextTick(error)
    }
}

const createPost = async (req, res, next) =>{

    try{
        console.log(req.body);
        const bookToBeCreated = new Book (req.body);
        const created = await bookToBeCreated.save()
        return res.status(201).json((created))

    } catch (error) {
        return next(error)
    }

}


const getById = async (req, res, next) => {

    try{
        const {id} = req.params;
        const found = await Book.findById(id);
        return res.status(200).json(found)

    } catch (error) {
        return next(error)
    }

}

const getByTitle = async (req,res,next) => {
    
    try{
        const {title} = req.params;
        const found = await Book.find({title:title});
        return res.status(200).json(found)

    }catch(error){
        return next(error)
    }
}

const getByAuthor = async (req,res,next) => {

    try{
        const {author} = req.params;
        const found = await Book.find({author:author});
        return res.status(200).json(found)

    }catch(error){
        return next(error)
    }

}

const editPut = async (req, res, next) => {
    
    try{
        const {id} = req.params;
        const fields = {...req.body}
        const options = {new:true};
        const edited = await Book.findByIdAndUpdate(id, fields, options);
        return res.status(200).json(edited)

    }catch (error){
        return next(error)
    }
}


const deleteBook = async (req, res, next) => {
    
    try{
        const {id} = req.params;
        const deleted = await Book.deleteMany({_id:id})
        if(deleted.deletedCount){
            return res.status(200).json('Elemento eliminado con éxito')
        } else {
            return res.status(200).json('No se encuentra el elemento para eliminar')
        }

    }catch(error){
        return next(error)
    }
}



module.exports = {
    indexGet,
    createPost,
    getById,
    getByTitle,
    getByAuthor,
    editPut,
    deleteBook
}