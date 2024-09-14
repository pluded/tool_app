// controllers/toolController.js

const { Tool } = require('../models');

exports.getTools = async (req, res) => {
  try {
    const tools = await Tool.findAll();
    res.json(tools);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.addTool = async (req, res) => {
  const { name, description, category, price, availability } = req.body;
  const images = req.files ? req.files.map((file) => file.filename) : [];

  try {
    const tool = await Tool.create({
      userId: req.user.id,
      name,
      description,
      category,
      price,
      availability,
      images,
    });
    res.json(tool);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getToolById = async (req, res) => {
  try {
    const tool = await Tool.findByPk(req.params.id);
    if (!tool) return res.status(404).json({ msg: 'Tool not found' });
    res.json(tool);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.updateTool = async (req, res) => {
  try {
    const tool = await Tool.findByPk(req.params.id);
    if (!tool) return res.status(404).json({ msg: 'Tool not found' });

    if (tool.userId !== req.user.id)
      return res.status(401).json({ msg: 'User not authorized' });

    const { name, description, category, price, availability } = req.body;

    tool.name = name || tool.name;
    tool.description = description || tool.description;
    tool.category = category || tool.category;
    tool.price = price || tool.price;
    tool.availability = availability || tool.availability;

    await tool.save();

    res.json(tool);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.deleteTool = async (req, res) => {
  try {
    const tool = await Tool.findByPk(req.params.id);
    if (!tool) return res.status(404).json({ msg: 'Tool not found' });

    if (tool.userId !== req.user.id)
      return res.status(401).json({ msg: 'User not authorized' });

    await tool.destroy();

    res.json({ msg: 'Tool removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
