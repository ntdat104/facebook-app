const express = require('express');

const authController = require('../controllers/authController');

const router = express.Router();

// @route GET api/auth/login
// @desc Check if user is logged in
// @access Public
router.get('/login', authController.handleLogin);

// @route GET api/auth/register
// @desc Register user
// @access Public
router.post('/register', authController.handleRegister);

module.exports = router;
