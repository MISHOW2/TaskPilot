// controllers/authController.js
const bcrypt = require('bcrypt');
const { users } = require('../config/db');

const signup = async (req, res) => {
  const { fullName, email, password } = req.body;
  const user = users.find(user => user.email === email);

  if (user) {
    return res.status(400).json({
      success: false,
      errors: [{ msg: "Invalid email or password" }]
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({
    userId: users.length + 1,
    fullName,
    email,
    password: hashedPassword
  });

  res.json({ success: true, msg: "User registered successfully!" });
};

module.exports = { signup };
