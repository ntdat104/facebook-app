const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

// models
const User = require('../models/userModel');

const authController = {};

authController.handleRegister = async (req, res, next) => {
  const { username, password } = req.body;

  // Init validation
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
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET
    );

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

  // Init validation
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
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET
    );

    // Default status is 200
    return res.json({
      success: true,
      message: 'User has successfully logged in',
      accessToken,
    });
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

module.exports = authController;
