const mongoose = require ('mongoose');

const authorSchema = new mongoose.Schema(
    {

        name: {
            type: String, 
            required: [true, "Debes poner el nombre del autor"]
        },

        literaryGenre: {
            type: String,
            enum: ["Fantasía", "Narrativo", "Lírico", "Dramático", "Comedia", "Ciencia Ficción", "Romántico", "Poesía", "Teatro", "Juvenil", "Desarrollo Personal"]
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