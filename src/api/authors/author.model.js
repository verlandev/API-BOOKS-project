const mongoose = require ('mongoose');

const authorSchema = new mongoose.Schema(
    {

        name: {
            type: String, 
            required: [true, "Debes poner el nombre del autor"]
        },

        genre: {
            type: mongoose.Types.ObjectId,
            ref: "genres"
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