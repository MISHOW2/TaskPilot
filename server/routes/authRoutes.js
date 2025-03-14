const passport = require('passport');
require('../middlewares/passportMiddleWare');
const router = require('express').Router();
const { validateSignup } = require('../middlewares/validationMiddleware');
const { signup, login } = require('../controllers/authController');

router.post('/signup', validateSignup, signup);
router.post('/login', validateSignup, login);

router.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

// Google OAuth authentication
router.get('/auth/google/callback', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google OAuth callback
router.get(
  '/auth/google/callback/callback',
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
