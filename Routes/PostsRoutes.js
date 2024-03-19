import express from "express";
const router = express.Router();
import Post from "../Models/Post.js";

router.get("/post/:id", (req, res) => {
  let slug = req.params.id;

  const data = Post.getPostById({ _id, slug });

  res.render("post", { data: data });
});

export default router;
