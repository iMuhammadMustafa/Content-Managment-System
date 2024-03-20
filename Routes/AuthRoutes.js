import express from "express";
const router = express.Router();
import cookieParser from "cookie-parser";
import UsersRepo from "../Services/UsersRepo.js";
import PostsRepo from "../Services/PostsRepo.js";

router.get("/", (req, res) => { 
    res.render("authentification.html", { title: "Authentication", layout: "./Layouts/auth.ejs" });
});

router.post("/login", async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let user = username ? await UsersRepo.getUserByUsername(username) : null;
  if (!user || user.password !== password) {
    res.status(404).send("Username or password is incorrect");
  }
  let topPosts = await PostsRepo.getTopPostsThisWeek();
  let posts = await PostsRepo.getPosts();
  res.cookie("user", user);
  res.render("home.html", { title: "Home", posts, topPosts, user });
});

router.post("/register", async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;
  const currentDate = new Date();

  let user = { username, email, password, role: null, createdAt: currentDate, updatedAt: null };
  let userCreated = await UsersRepo.createUser(user);
  let posts = await PostsRepo.getPosts();
  let topPosts = await PostsRepo.getTopPostsThisWeek();
  res.cookie("user", userCreated);
  res.render("home.html", { title: "Home", posts, topPosts, userCreated });
});

router.get("/logout", async (req, res) => {
    res.clearCookie("user");
    res.render("authentification.html", { title: "Authentication", layout: "./Layouts/auth.ejs" });
})

export default router;
