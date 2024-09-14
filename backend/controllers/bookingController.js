// controllers/bookingController.js

const { Booking, Tool } = require('../models');

exports.createBooking = async (req, res) => {
  const { toolId, startDate, endDate } = req.body;

  try {
    const tool = await Tool.findByPk(toolId);
    if (!tool) return res.status(404).json({ msg: 'Tool not found' });

    const totalPrice =
      tool.price * ((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));

    const booking = await Booking.create({
      toolId,
      userId: req.user.id,
      startDate,
      endDate,
      totalPrice,
    });

    res.json(booking);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      where: { userId: req.user.id },
      include: [Tool],
    });
    res.json(bookings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.updateBookingStatus = async (req, res) => {
  const { status } = req.body;

  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(404).json({ msg: 'Booking not found' });

    // Only the owner of the tool can update the booking status
    const tool = await Tool.findByPk(booking.toolId);
    if (tool.userId !== req.user.id)
      return res.status(401).json({ msg: 'User not authorized' });

    booking.status = status;
    await booking.save();

    res.json(booking);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
