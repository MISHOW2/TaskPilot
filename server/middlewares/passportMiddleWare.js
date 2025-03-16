const jwt = require('jsonwebtoken');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { getUserByEmail, addUser } = require('../config/db'); 
require('dotenv').config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
      scope: ['profile', 'email'],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await getUserByEmail(profile.emails[0].value);

        if (!user) {
          user = await addUser({
            fullname: profile.displayName,
            email: profile.emails[0].value,
            password: null, // No password for OAuth users
          });
        }

        // Generate JWT token
        const token = jwt.sign(
          { userId: user.userId, email: user.email },
          process.env.JWT_SECRET_KEY,
          { expiresIn: '1h' }
        );

        return done(null, { ...user, token });
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.userId);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await getUserById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

module.exports = passport;
