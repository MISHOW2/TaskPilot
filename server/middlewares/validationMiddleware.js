// middlewares/validationMiddleware.js
const { check, validationResult } = require('express-validator');

const validateSignup = [
  check('email').isEmail().withMessage('Please provide a valid email'),
  check('password').isLength({ min: 6 }).withMessage('Password must have at least 6 characters'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        "success": false,
        "errors": [
            {
                "msg": "Please provide a valid email",     
            }
        ]});
    }
    next();
  }
];

module.exports = { validateSignup };
