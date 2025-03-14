const passport = require('passport')
require('../middlewares/passportMiddleWare')
const router = require('express').Router();
const { validateSignup } = require('../middlewares/validationMiddleware');

const { signup,login } = require('../controllers/authController');

router.post('/signup', validateSignup, signup);
router.post('/login', validateSignup, login);

router.get('/',(req,res)=>{
  res.send('<a href="/auth/google/callback">auth</a>')
})


// Google OAuth callback route
router.get('/auth/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
  if (!req.user) {
      return res.status(401).json({ success: false, msg: 'Google authentication failed' });
  }

  // Send token and user info to the client
  res.json({
      success: true,
      token: req.user.token, // Send the token
      user: {
          userId: req.user.userId ,
          fullname: req.user.fullname,
          email: req.user.email
      }
  });
});
module.exports = router;
