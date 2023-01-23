const bcrypt = require('bcrypt');
const User = require("../../api/users/user.model");
const { isValidEmail, isValidPassword } = require("./validations");

const LocalStrategy = require("passport-local").Strategy;

const loginStrategy = new LocalStrategy(
    {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
    },
    async (req, email, password, done) => {
        try {
            if (!isValidEmail(email) || !isValidPassword(password)) {
                const error = new Error("Email o contraseña no cumplen con el formato esperado");
                return done(error, null);
            }

            const userDB = await User.findOne({ email });

            const isValidUserPassword = await bcrypt.compare(password, userDB.password);

            if (!isValidUserPassword) {
                const error = new Error('Las contraseñas no coinciden. Prueba de nuevo');
                error.status = 400;
                return done(error); // No le pongo null porque el segundo argumento si es null no hay que ponerlo
            }
            
            const userWithoutPassword = userDB.toObject();
            Reflect.deleteProperty(userWithoutPassword, 'password');

            return done(null, userWithoutPassword);
        } catch (error) {
            return done(error, null);
        }
    }
);

module.exports = loginStrategy;