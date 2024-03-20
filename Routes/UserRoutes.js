import express from "express";
const router = express.Router();
import UserRepo from "../Services/UsersRepo.js";

// Route to fetch user profile by userId
router.get('/profile/profile/:userId', async (req, res) => {
  const userId = req.params.userId;
  // console.log(userId, "here --------------------- ");
  try {
    const user = await UserRepo.getUserById(userId);
    res.render('profile/myProfile.ejs', { user, title: 'Profile' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;