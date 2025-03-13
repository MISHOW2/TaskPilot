const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { users } = require('../config/db');
const generateToken = require('../utils/generateToken');
const passport = require('passport');

// User Signup
const signup = async (req, res) => {
  const { fullName, email, password } = req.body;
  const existingUser = users.find(user => user.email === email);

  if (existingUser) {
    return res.status(400).json({ success: false, msg: "User already exists." });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const userId = users.length + 1;

  const newUser = { userId, fullName, email, password: hashedPassword };
  users.push(newUser);

  res.status(201).json({
    success: true,
    msg: "User registered successfully!",
    token: generateToken(userId, email)
  });
};

// User Login
const login = async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(user => user.email === email);

  if (!user) {
    return res.status(400).json({ success: false, msg: "Invalid credentials." });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ success: false, msg: "Invalid credentials." });
  }

  res.json({
    success: true,
    msg: "User logged in successfully!",
    token: generateToken(user.userId, email)
  });
};

// Google Auth Success
const googleAuthSuccess = (req, res) => {
  if (!req.user) {
    return res.status(401).json({ success: false, msg: "Not authorized." });
  }

  const token = generateToken(req.user.userId, req.user.email);
  res.json({ success: true, msg: "Google Auth successful!", token });
};

module.exports = { signup, login, googleAuthSuccess };
