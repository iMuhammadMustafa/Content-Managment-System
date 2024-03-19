const express = require('express');
const router = express.Router();
const User = require('../models/User.js');

// Route to fetch user profile by userId
router.get('/admin/profile/:userId', async (req, res) => {
  const userId = req.params.userId;
  console.log(userId, "here");
  try {
    const user = await User.findById(userId);
    res.json(user); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;