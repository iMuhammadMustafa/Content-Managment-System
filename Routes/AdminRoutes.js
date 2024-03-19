import express from "express";
const router = express.Router();

import PostsRepo from "../Services/PostsRepo.js";
import UsersRepo from "../Services/UsersRepo.js";
import CommentsRepo from "../Services/CommentsRepo.js";

router.get("/", (req, res) => {
  res.render("admin/index.ejs", { title: "Admin" });
});

router.get("/users", async (req, res) => {
  const users = await UsersRepo.getUsersDto();

  res.render("admin/users.ejs", { title: "Users", users });
});
router.get("/users/edit/:userId", async (req, res) => {
  const userId = req.params.userId;

  const user = userId ? await UsersRepo.getUserDtoById(userId) : null;
  if (!user) return res.status(404).send("User not found");

  res.render("admin/editUser.ejs", { title: "Edit User", user });
});
router.post("/users/edit", async (req, res) => {
  const user = req.body;
  const userId = user._id;

  if (!userId) return res.status(404).send("User not found");

  await UsersRepo.updateUser(user._id, user);

  res.redirect("/admin/users");
});
router.get("/users/delete/:userId", async (req, res) => {
  const userId = req.params.userId;

  await UsersRepo.deleteUser(userId);

  res.redirect("/admin/users");
});

router.get("/posts", async (req, res) => {
  const posts = await PostsRepo.getPostsDto();

  res.render("admin/posts.ejs", { title: "Posts", posts });
});
router.get("/posts/edit/:postId", async (req, res) => {
  const postId = req.params.postId;

  if (!postId) return res.status(404).send("Post not found");

  const post = await PostsRepo.getPostDtoById(postId);

  res.render("admin/editPost.ejs", { title: "Edit Post", post });
});
router.post("/posts/edit", async (req, res) => {
  const post = req.body;
  const postId = post._id;

  if (!postId) return res.status(404).send("Post not found");

  await PostsRepo.updatePost(post._id, post);

  res.redirect("/admin/posts");
});
router.get("/posts/delete/:postId", async (req, res) => {
  const postId = req.params.postId;

  await PostsRepo.deletePost(postId);

  res.redirect("/admin/posts");
});

router.get("/comments", async (req, res) => {
  const comments = await CommentsRepo.getCommentsDto();

  res.render("admin/comments.ejs", { title: "Comments", comments });
});

router.get("/comments/edit/:commentId", async (req, res) => {
  const commentId = req.params.commentId;

  const comment = commentId ? await CommentsRepo.getCommentDtoById(commentId) : null;
  if (!comment) return res.status(404).send("Comment not found");

  res.render("admin/editComment.ejs", { title: "Edit Comment", comment });
});
router.post("/comments/edit", async (req, res) => {
  const comment = req.body;
  const commentId = comment._id;

  if (!commentId) return res.status(404).send("Comment not found");

  await CommentsRepo.updateComment(comment._id, comment);

  res.redirect("/admin/comments");
});

router.get("/comments/delete/:commentId", async (req, res) => {
  const commentId = req.params.commentId;

  await CommentsRepo.deleteComment(commentId);

  res.redirect("/admin/comments");
});

export default router;
