import express from "express";
const router = express.Router();

import PostsRepo from "../Services/PostsRepo.js";
import UsersRepo from "../Services/UsersRepo.js";
import CommentsRepo from "../Services/CommentsRepo.js";
// <!-- <%- include('../partials/header.ejs') %> -->

router.get("/admin/posts", async (req, res) => {
  res.render("admin/posts.ejs", { title: "Users Posts" });
});

export default router;
