import express from "express";
const router = express.Router();
import Post from "../Models/Post.js";
import Comment from "../Models/Comment.js";

router.get("/post/:id", (req, res) => {
  let slug = req.params.id;
  const data = Post.getPostById({ _id, slug });
  res.render("post", { data: data });
});

// posts per user
router.get("/admin/posts/:userId", async (req, res) => {
  const userId = req.params.userId;
  console.log(userId, "here");
  try {
    const posts = await Post.find({ userId: userId });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// comments per user
router.get("/admin/comments/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const comments = await Comment.find({ userId: userId });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// saved posts
router.get("/admin/savedPosts/:userId", async (req, res) => {
  const userId = req.params.userId;
  console.log(userId);
  try {
    const savedPosts = await Post.find({ savedBy: { $in: [`${userId}`] } });
    console.log(savedPosts);
    res.json(savedPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
