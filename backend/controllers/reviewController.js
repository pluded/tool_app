// controllers/reviewController.js

const { Review, Tool } = require('../models');

exports.addReview = async (req, res) => {
  const { toolId, rating, comment } = req.body;

  try {
    const tool = await Tool.findByPk(toolId);
    if (!tool) return res.status(404).json({ msg: 'Tool not found' });

    const review = await Review.create({
      userId: req.user.id,
      toolId,
      rating,
      comment,
    });

    res.json(review);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getReviewsForTool = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      where: { toolId: req.params.toolId },
    });
    res.json(reviews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
