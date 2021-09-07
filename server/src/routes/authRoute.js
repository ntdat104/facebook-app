const express = require('express');

const authController = require('../controllers/authController');
const verifyToken = require('../middlewares/authMiddleware');

const router = express.Router();

// @route GET api/auth
// @desc Get current user
// @access Public
router.get('/', verifyToken, authController.handleGetUser);

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
// @access Public
router.delete('/logout', authController.handleLogout);

// @route GET api/auth/token
// @desc Generate new token
// @access Public
router.post('/token', authController.handleGetNewToken);

module.exports = router;
