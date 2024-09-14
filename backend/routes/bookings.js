// routes/bookings.js

const express = require('express');
const router = express.Router();
const passport = require('passport');
const {
  createBooking,
  getUserBookings,
  updateBookingStatus,
} = require('../controllers/bookingController');

// @route   POST /api/bookings
// @desc    Create a new booking
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  createBooking
);

// @route   GET /api/bookings
// @desc    Get bookings for a user
// @access  Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  getUserBookings
);

// @route   PUT /api/bookings/:id
// @desc    Update booking status
// @access  Private
router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  updateBookingStatus
);

module.exports = router;
