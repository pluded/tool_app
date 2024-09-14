// controllers/messageController.js

const { Message, User } = require('../models');

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.findAll({
      where: {
        receiverId: req.user.id,
      },
      include: [
        { model: User, as: 'Sender', attributes: ['id', 'name', 'email'] },
      ],
    });
    res.json(messages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.sendMessage = async (req, res) => {
  const { receiverId, content } = req.body;

  try {
    const receiver = await User.findByPk(receiverId);
    if (!receiver) return res.status(404).json({ msg: 'Receiver not found' });

    const message = await Message.create({
      senderId: req.user.id,
      receiverId,
      content,
    });

    res.json(message);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
