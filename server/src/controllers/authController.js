const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

// models
const User = require('../models/userModel');

// constants
const { ACCESS_TOKEN_LIFE, ACCESS_TOKEN_SECRET } = require('../constants/auth');

const authController = {};

let refreshTokens = [];

authController.handleRegister = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: 'Missing username or password' });
  }

  try {
    const user = await User.findOne({ username });

    // Check for user exists
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: 'Username is already taken' });
    }

    const hashedPassword = await argon2.hash(password);
    const newUser = new User({
      username,
      password: hashedPassword,
    });

    // Save to db
    await newUser.save();

    // Return token
    const accessToken = jwt.sign({ userId: newUser._id }, ACCESS_TOKEN_SECRET);

    // Default status is 200
    return res.json({
      success: true,
      message: 'User has been created successfully',
      accessToken,
    });
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

authController.handleLogin = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: 'Missing username or password' });
  }

  try {
    const user = await User.findOne({ username });

    // Check for user does not exist
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: 'Incorrect username' });
    }

    const passwordValid = await argon2.verify(user.password, password);

    if (!passwordValid) {
      return res
        .status(400)
        .json({ success: false, message: 'Incorrect password' });
    }

    // Return token
    const accessToken = jwt.sign({ userId: user._id }, ACCESS_TOKEN_SECRET, {
      expiresIn: ACCESS_TOKEN_LIFE,
    });

    const refreshToken = jwt.sign(
      { userId: user._id },
      process.env.REFRESH_TOKEN_SECRET
    );

    refreshTokens.push(refreshToken);

    // Default status is 200
    return res.json({
      success: true,
      message: 'User has successfully logged in',
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

authController.handleLogout = (req, res) => {
  console.log(req.body);
  refreshTokens = refreshTokens.filter(
    (token) => token !== req.body.refreshToken
  );

  res.status(204).json({ success: true, message: 'User is logged out' });
};

authController.handleGetNewToken = (req, res) => {
  const { refreshToken } = req.body;

  if (refreshToken === null) {
    return res.status(401).json({ message: 'Token not provided' });
  }

  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json({ message: 'Refresh token does not exist' });
  }

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, user) => {
    if (error) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    const accessToken = jwt.sign({ userId: user._id }, ACCESS_TOKEN_SECRET, {
      expiresIn: ACCESS_TOKEN_LIFE,
    });

    res.json({ accessToken });
  });
};

module.exports = authController;
