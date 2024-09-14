// routes/messages.js

const express = require('express');
const router = express.Router();
const passport = require('passport');
const { getMessages, sendMessage } = require('../controllers/messageController');

// @route   GET /api/messages
// @desc    Get all messages for a user
// @access  Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  getMessages
);

// @route   POST /api/messages
// @desc    Send a message
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  sendMessage
);

module.exports = router;
