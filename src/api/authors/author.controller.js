const Author = require ('./author.model');

const indexGet = async (req, res, next) => {
    try{
        const authors = await Author.find();
        return res.status(200).json(authors)
    }catch(error){
        return next(error)
    }
};

const createPost = async (req,res, next) => {
    try{

        console.log(req.body);
        const authorToBeCreated = new Author (req.body);
        const created = await authorToBeCreated.save();
        return res.status(201).json((created))

    }catch(error){
        return next(error)
    }
}

const getbyid = async (req,res,next) => {
    try{
        const {id} = req.params;
        const found = await Author.findById(id);
        return res.status(200).json(found)

    }catch (error){
        return next(error)
    }
}

const getByName = async (req, res, next) => {
    try{

        const {name} = req.params;
        const found = await Author.find({name: name});
        return res.status(200).json(found)

    }catch(error){
        return next(error)
    }
}

const editPut = async (req, res, next) => {
    try {
        const {id} = req.params;
        const fields = {...req.body}
        const options = {new:true}
        const edited = await Author.findByIdAndUpdate(id, fields, options);
        return res.status(200).json(edited)

    }catch (error){
        return next(error)
    }
}

const deleteAuthor = async (req, res, next) => {
    try{
        const {id} = req.params;
        const deleted = await Author.deleteMany({_id:id})
        if (deleted.deletedCount){
            return res.status(200).json('Autor eliminado con éxito')
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
    getbyid,
    getByName,
    editPut,
    deleteAuthor
}