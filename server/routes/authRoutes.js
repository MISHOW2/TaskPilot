// routes/authRoutes.js
const router = require('express').Router();
const { validateSignup } = require('../middlewares/validationMiddleware');
const { signup } = require('../controllers/authController');

router.post('/signup', validateSignup, signup);

module.exports = router;
