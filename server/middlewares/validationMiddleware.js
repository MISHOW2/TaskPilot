const { check, validationResult } = require('express-validator');

const validateSignup = [
  check('fullName')
    .notEmpty()
    .withMessage('Full Name is required'),
  
  check('email')
    .isEmail()
    .withMessage('Please provide a valid email'),

  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must have at least 6 characters'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false,
        errors: errors.array().map(err => ({ msg: err.msg })) // Send all validation errors
      });
    }
    next();
  }
];

module.exports = { validateSignup };
