const express = require('express');

const authController = require('../controllers/authController');

const router = express.Router();

// @route POST api/auth/login
// @desc Check if user is logged in
// @access Public
router.post('/login', authController.handleLogin);

// @route GET api/auth/register
// @desc Register user
// @access Public
router.post('/register', authController.handleRegister);

// @route DELETE api/auth/logout
// @desc Log out user
// @access Private
router.delete('/logout', authController.handleLogout);

// @route GET api/auth/token
// @desc Generate token
// @access Private
router.post('/token', authController.handleGetNewToken);

module.exports = router;
