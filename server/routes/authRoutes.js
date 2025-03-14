const passport = require('passport')
require('../middlewares/passportMiddleWare')
const router = require('express').Router();
const { validateSignup } = require('../middlewares/validationMiddleware');

const { signup,login } = require('../controllers/authController');

router.post('/signup', validateSignup, signup);
router.post('/login', validateSignup, login);

router.get('/',(req,res)=>{
  res.send('<a href="/auth/google">auth</a>')
})
router.get('/auth/google',passport.authenticate('google', {scope: ['email','profile']}))
module.exports = router;
