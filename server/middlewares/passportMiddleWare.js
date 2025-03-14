const jwt = require('jsonwebtoken');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { users, getUserByEmail, addUser } = require('../config/db'); 
require('dotenv').config();

passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback",
    scope: ['profile', 'email'],
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Ensure users is an array before using find()
      if (!Array.isArray(users)) {
        return done(new Error('Users database is not an array'), null);
      }

      let user = users.find(u => u.email === profile.emails[0].value);

      if (!user) {
        user = {
          userId: users.length + 1,
          fullname: profile.displayName,
          email: profile.emails[0].value,
          password: null, // No password for OAuth users
        };
        users.push(user);
      }

      // Generate JWT token for the user
      const token = jwt.sign(
        { userId: user.userId, email: user.email },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '1h' }
      );

      user.token = token; // Store token in the user object

      return done(null, user);
    } catch (error) {
      return done(error, null);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.userId);
});

passport.deserializeUser((id, done) => {
  const user = users.find(u => u.userId === id);
  done(null, user || null);
});

module.exports = passport;
