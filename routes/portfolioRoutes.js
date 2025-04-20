const express = require('express');
const User = require('../models/Users');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/portfolio', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.portfolio = req.body;
    await user.save();
    res.json({ 
      message: 'Portfolio saved',
      portfolio: user.portfolio
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save portfolio' });
  }
});

router.get('/portfolio/:username', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user.portfolio);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch portfolio' });
  }
});

module.exports = router;