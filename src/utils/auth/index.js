const passport          = require ('passport')
const registerStrategy  = require('./registerStrategy')

const activateAuthentication = () => {
    passport.use('registrito', registerStrategy);
}

module.exports = {
    activateAuthentication
}

