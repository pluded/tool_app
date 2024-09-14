// routes/tools.js

const express = require('express');
const router = express.Router();
const passport = require('passport');
const upload = require('../middleware/upload');
const {
  getTools,
  addTool,
  getToolById,
  updateTool,
  deleteTool,
} = require('../controllers/toolController');

// @route   GET /api/tools
// @desc    Get all tools
// @access  Public
router.get('/', getTools);

// @route   POST /api/tools
// @desc    Add a new tool
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  upload.array('images', 5),
  addTool
);

// @route   GET /api/tools/:id
// @desc    Get tool by ID
// @access  Public
router.get('/:id', getToolById);

// @route   PUT /api/tools/:id
// @desc    Update a tool
// @access  Private
router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  updateTool
);

// @route   DELETE /api/tools/:id
// @desc    Delete a tool
// @access  Private
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  deleteTool
);

module.exports = router;
