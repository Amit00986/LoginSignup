const express = require('express');

const router = express.Router();

const login = require('./LoginRoute')

router.use('/login', login);



module.exports = router;