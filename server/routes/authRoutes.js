// routes/authRoutes.js
const router = require('express').Router();
const { validateSignup } = require('../middlewares/validationMiddleware');
const { signup,login } = require('../controllers/authController');

router.post('/signup', validateSignup, signup);
router.post('/login', validateSignup, login);

module.exports = router;
