const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const users = []; // Mock database

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      let user = users.find((user) => user.googleId === profile.id);

      if (!user) {
        user = {
          userId: users.length + 1,
          googleId: profile.id,
          fullName: profile.displayName,
          email: profile.emails[0].value,
        };
        users.push(user);
      }

      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.userId);
});

passport.deserializeUser((userId, done) => {
  const user = users.find((user) => user.userId === userId);
  done(null, user || false);
});
