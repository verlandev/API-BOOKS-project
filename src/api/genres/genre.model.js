const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema(
    {
        name:{
            type: String, 
            required: [true, "Debes poner el nombre del género literario"]
        },

        description: {
            type: String,
            required: [true, "Debes poner una descripción del género"],
            unique: true
        },

        books: {
            type: mongoose.Types.ObjectId,
            ref: "books"
        }

    },
    {
        timestamps: true,
    })



const Genre = mongoose.model('genres', genreSchema);

module.exports = Genre