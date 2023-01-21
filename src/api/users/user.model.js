const mongoose = require ('mongoose');

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Debes escribir tu email"],
            unique: true
        },

        password: {
            type: String, 
            required: [true, "Debes introducir una contraseña válida"]
        },

        name: {
            type: String,
        }
    },
    {
        timestamps: true,
    })


const User = mongoose.model('users', userSchema);

module.exports = User