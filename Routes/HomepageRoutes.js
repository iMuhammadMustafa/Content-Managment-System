import express from "express";
const router = express.Router();
import { seedData } from "../Models/db.js";
import PostsRepo from "../Services/PostsRepo.js";

router.get("/", async (req, res) => {
  let user = req.cookies.user;
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

router.get("/seed", (req, res) => {
  res.send("Seeding the database");
  seedData();
});

router.post("/search", (req, res) => {
  let search = req.body.search;
  PostsRepo.searchPosts(search)
    .then(posts => {
      console.log(posts);
      res.render("Posts/search", { title: "Search", posts });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send("An error occurred during search.");
    });
});

export default router;
