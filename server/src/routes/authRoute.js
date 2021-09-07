const express = require('express');

const authController = require('../controllers/authController');
const verifyToken = require('../middlewares/authMiddleware');

const router = express.Router();

// @route GET api/auth
// @desc Get current user
// @access Public
router.get('/', verifyToken, authController.getUser);

// @route POST api/auth/login
// @desc Check if user is logged in
// @access Public
router.post('/login', authController.login);

// @route POST api/auth/register
// @desc Register user
// @access Public
router.post('/register', authController.register);

// @route DELETE api/auth/logout
// @desc Log out user
// @access Public
router.delete('/logout', authController.logout);

// @route POST api/auth/token
// @desc Generate new token
// @access Public
router.post('/token', authController.getNewToken);

module.exports = router;
