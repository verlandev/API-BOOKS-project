const express = require ('express');

const controller = require('./user.controller');

const router = express.Router();

router.post('/register', controller.registerPost);
router.post('/login', controller.loginPost);

modules.exports = router