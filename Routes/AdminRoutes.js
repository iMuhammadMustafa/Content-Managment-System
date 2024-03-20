import express from "express";
const router = express.Router();

import PostsRepo from "../Services/PostsRepo.js";
import UsersRepo from "../Services/UsersRepo.js";
import CommentsRepo from "../Services/CommentsRepo.js";

router.get("/", (req, res) => {
  if (!req.cookies.user) return res.redirect("/auth");

  res.render("Admin/index.ejs", { title: "Admin", layout: "Layouts/admin.ejs" });
});

router.get("/users", async (req, res) => {
  const users = await UsersRepo.getUsersDto();

  res.render("Admin/users.ejs", { title: "Users", users, layout: "Layouts/admin.ejs" });
});
router.get("/users/edit/:userId", async (req, res) => {
  const userId = req.params.userId;

  const user = userId ? await UsersRepo.getUserDtoById(userId) : null;
  if (!user) return res.status(404).send("User not found");

  res.render("Admin/editUser.ejs", { title: "Edit User", user, layout: "Layouts/admin.ejs" });
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

  res.render("Admin/posts.ejs", { title: "Posts", posts, layout: "Layouts/admin.ejs" });
});
router.get("/posts/edit/:postId", async (req, res) => {
  const postId = req.params.postId;

  if (!postId) return res.status(404).send("Post not found");

  const post = await PostsRepo.getPostDtoById(postId);

  res.render("Admin/editPost.ejs", { title: "Edit Post", post, layout: "Layouts/admin.ejs" });
});
router.post("/posts/edit", async (req, res) => {
  const post = req.body;
  const postId = post._id;

  if (post.published === "on") post.published = true;
  else post.published = false;
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

  res.render("Admin/comments.ejs", { title: "Comments", comments, layout: "Layouts/admin.ejs" });
});

router.get("/comments/edit/:commentId", async (req, res) => {
  const commentId = req.params.commentId;

  const comment = commentId ? await CommentsRepo.getCommentDtoById(commentId) : null;
  if (!comment) return res.status(404).send("Comment not found");

  res.render("Admin/editComment.ejs", { title: "Edit Comment", comment, layout: "Layouts/admin.ejs" });
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
