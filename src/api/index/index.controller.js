const indexGet = (req, res, next) => {
    return res.status(200).json ('API ROOT')
}


const statusGet = (req, res, next) => {
    return res.status(200).json('Status OK - Server Working')
}

module.exports = {
    indexGet,
    statusGet
}