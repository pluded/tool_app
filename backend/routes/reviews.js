// routes/reviews.js

const express = require('express');
const router = express.Router();
const passport = require('passport');
const { addReview, getReviewsForTool } = require('../controllers/reviewController');

// @route   POST /api/reviews
// @desc    Add a new review
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  addReview
);

// @route   GET /api/reviews/:toolId
// @desc    Get reviews for a tool
// @access  Public
router.get('/:toolId', getReviewsForTool);

module.exports = router;
