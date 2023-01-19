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



module.exports = {
    indexGet,
    createPost,
    getById,
}