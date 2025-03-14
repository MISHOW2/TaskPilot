const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const user = require('../config/db')

require('dotenv').config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    
      return cb(err, profile);

  }
));


passport.serializeUser(function(user,done){
    done(null,user);
})

passport.deserializeUser(function(user,done){
  done(null,user);
})