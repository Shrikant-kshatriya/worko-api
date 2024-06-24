const express = require('express');
const { loginCotroller } = require('../controllers/authController');
const router = express.Router();

router
// login route
.post('/login', loginCotroller)

module.exports = router;