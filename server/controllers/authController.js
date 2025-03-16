// controllers/authController.js
const bcrypt = require('bcrypt');
const { users } = require('../config/db');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
  const { fullName, email, password } = req.body;
  const user = users.find(user => user.email === email); // Check if the user already exists

  if (user) {
    return res.status(400).json({
      success: false,
      errors: [{ msg: "User already exists" }] // Changed message to "User already exists"
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

  users.push({
    userId: users.length + 1, // Generate userId
    fullName,
    email,
    password: hashedPassword // Save hashed password
  });

  // Create JWT token
  const payload = { userId: users.length, email };
  const secret = process.env.JWT_SECRET_KEY;

  const token = jwt.sign(payload, secret, { expiresIn: '1h' }); // Create the token with expiration

  // Send the response with token
  res.json({
    success: true,
    msg: "User registered successfully!",
    token,
    user
    
  });
};

const login = async (req, res) => {
  const { email, password,fullName } = req.body;
  const user = users.find(user => user.email === email); // Find user by email

  if (!user) {
    return res.status(400).json({
      success: false,
      errors: [{ msg: "Invalid credentials" }] 
    });
  }

  // Compare the password with the hashed one
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({
      success: false,
      errors: [{ msg: "Invalid credentials" }] // Changed message to "Invalid credentials"
    });
  }

  // Create JWT token
  const payload = { userId: user.userId, email }; // Use the found user's userId
  const secret = process.env.JWT_SECRET_KEY;

  const token = jwt.sign(payload, secret, { expiresIn: '1h' }); // Create the token

  // Send the response with token
  res.json({
    success: true,
    msg: "User logged in successfully!",
    token,
    user
  });
};

module.exports = { signup, login };
