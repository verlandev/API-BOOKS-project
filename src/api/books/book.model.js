const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema (
    {
        title: {
            type:String,
            required: [true, "Debes poner el título del libro"],
        },

        author: {
            type: String,
           
            // type: mongoose.Types.ObjectId,
            // refer:"authors",
            // required: [true, "Debes poner el nombre del autor"],
        },

        genre: {
            type: mongoose.Types.ObjectId,
            ref: "genres",
            // required: [true, "Debes poner el género del libro"]

        },

        publishedDate: {
            type: Date,
            required: [true, "Debes poner la fecha de publicación"]
        },

        summary: {
            type: String, 
            // unique: true,
        },

        editorial: {
            type: String,
        }

    },
    {
        timestamps: true,
    }
);

const Book = mongoose.model('books', bookSchema);

module.exports = Book 
