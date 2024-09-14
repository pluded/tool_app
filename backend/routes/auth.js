// routes/auth.js

const express = require('express');
const router = express.Router();
const passport = require('passport');
const { registerUser, loginUser, resetPassword } = require('../controllers/authController');

// @route   POST /api/auth/register
// @desc    Register user
// @access  Public
router.post('/register', registerUser);

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', loginUser);

// @route   POST /api/auth/reset-password
// @desc    Reset password
// @access  Public
router.post('/reset-password', resetPassword);

// @route   GET /api/auth/facebook
// @desc    Facebook authentication
// @access  Public
router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));

// @route   GET /api/auth/facebook/callback
// @desc    Facebook authentication callback
// @access  Public
router.get(
  '/facebook/callback',
  passport.authenticate('facebook', { session: false }),
  (req, res) => {
    // Generate JWT and send to client
    res.redirect('/dashboard');
  }
);

// @route   GET /api/auth/google
// @desc    Google authentication
// @access  Public
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// @route   GET /api/auth/google/callback
// @desc    Google authentication callback
// @access  Public
router.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    // Generate JWT and send to client
    res.redirect('/dashboard');
  }
);

module.exports = router;
