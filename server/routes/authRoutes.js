const express = require('express');
const passport = require('passport');// routes/authRoutes.js
const router = require('express').Router();
const { validateSignup } = require('../middlewares/validationMiddleware');
const { signup, login, googleAuthSuccess } = require('../controllers/authController');

router.post('/signup', validateSignup, signup);
router.post('/login', validateSignup, login);


// Google authentication
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/' }), 
    googleAuthSuccess
);

module.exports = router;
