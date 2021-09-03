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

// @route GET api/auth/token
// @desc Generate token
// @access Private
router.post('/token', authController.handleGetNewToken);

// @route DELETE api/auth/logout
// @desc Log out user
// @access Private
router.delete('/logout', authController.handleLogout);

module.exports = router;
