const mongoose = require ('mongoose');

const authorSchema = new mongoose.Schema(
    {

        name: {
            type: String, 
            required: [true, "Debes poner el nombre del autor"]
        },

        genres: {
            type: [mongoose.Types.ObjectId],
            ref: "genres"
        },

        books: {
            type: [mongoose.Types.ObjectId],
            ref: "books"
        },

        biography: {
            type: String,
            unique: true
        },

    },
    {
        timestamps: true        

    }
)

const Author = mongoose.model ('authors', authorSchema);

module.exports = Author