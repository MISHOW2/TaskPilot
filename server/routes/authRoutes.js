const router = require('express').Router();
const { users, addUser, getUserByEmail, getUserById } = require('../config/db');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');

// Route for /auth/signup
router.post('/signup', [
  check('email').isEmail().withMessage('Please provide a valid email'),
  check('password').isLength({ min: 6 }).withMessage('Password must have at least 6 characters')
], async (req, res) => {
  const errors = validationResult(req); 

  // If there are errors, return them
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { fullName, email, password } = req.body;
  const user = users.find(user => user.email === email);  // Check if user already exists

  // Check if user exists
  if (user) {
    return res.status(400).json(
      {
        "success": false,
        "errors": [
            {
                "msg": "Invalid email or password", //for security purposes user already exists is a risk
            }
        ]
      }
    );
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Add user to the database (or temporary storage for now)
  users.push({
    userId: users.length + 1,  // Generate a unique userId based on the length of the array
    fullName,
    email,
    password: hashedPassword
  });

  res.json({ success: true, msg: "User registered successfully!" });
});

module.exports = router;
