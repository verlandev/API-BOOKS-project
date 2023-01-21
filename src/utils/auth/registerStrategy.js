const localStrategy = require('passport-local')

const registerStrategy = new localStrategy(
    {
        usernameField:      'email',
        passwordField:      'passport',
        passReqToCallback:   true,

    }, 
    async (req, email, password, done) => {
        const userSimulated = {
            name:       'Pepe',
            lastName:   'Guardiola'
        }

        return done(null, userSimulated)
    });


module.exports = registerStrategy