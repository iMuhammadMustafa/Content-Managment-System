import express from "express";
const router = express.Router();
import Post from "../Models/Post.js";
import Comment from "../Models/Comment.js";
import PostsRepo from "../Services/PostsRepo.js";

router.get("/post/:id", async (req, res) => {
  let slug = req.params.id;
  //const data = Post.getPostById({ _id, slug });
  const data = await PostsRepo.getPostById(slug);
  console.log(data);
  res.render("post.ejs", { data: data, title: "Post" });
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

router.get("/post/create/:userId", async (req, res) => {
  const userId = req.params.userId;
  res.render('Posts/createPost.html', { userId, title: 'Create Post' });
});

router.post("/post/postCreated/:userId", async (req, res) => {
    const userId = req.params.userId;
    const { title, content, category, tags } = req.body;
    const tagsArray = tags.split(',').map(tag => tag.trim()); // Split tags by commas and remove leading/trailing spaces
    let user = req.cookies.user;
    
    // Process the data (e.g., save to database, etc.)
    // Example: saving the post to a database
    const currentDate = new Date();
    const newPost = {
        title,
        content,
        category,
        tags: tagsArray,
        createdAt: currentDate,
        updatedAt: currentDate,
        userId,
        rating : 0,
        published : true
    };

    PostsRepo.createPost(newPost);
    let topPosts = await PostsRepo.getTopPostsThisWeek();
    let posts = await PostsRepo.getPosts();
    // Check if user is logged in
    if (user) {
      // User is logged in, render home page with user data
      res.render("home", { title: "Home", posts, topPosts, user });
    } else {
      // User is not logged in, render home page without user data
      res.render("home", { title: "Home", posts, topPosts });
    }
});

export default router;
