// routes/users.js

const express = require('express');
const router = express.Router();
const passport = require('passport');
const { getUserProfile, updateUserProfile } = require('../controllers/userController');

// @route   GET /api/users/profile
// @desc    Get user profile
// @access  Private
router.get(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  getUserProfile
);

// @route   PUT /api/users/profile
// @desc    Update user profile
// @access  Private
router.put(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  updateUserProfile
);

module.exports = router;
