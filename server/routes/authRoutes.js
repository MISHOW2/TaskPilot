const express = require('express');
const passport = require('passport');
require('../middlewares/passportMiddleWare'); // Ensure passport is initialized
const { signup, login } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

// Redirect users to Google for authentication
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google OAuth callback
router.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    if (!req.user) {
      return res.status(401).json({ success: false, msg: 'Google authentication failed' });
    }

    // Redirect to frontend with token
    res.redirect(`http://localhost:5173/dashboard?token=${req.user.token}`);
  }
);

module.exports = router;
