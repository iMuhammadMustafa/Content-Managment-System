import express from "express";
const router = express.Router();

import PostsRepo from "../Services/PostsRepo.js";
import UsersRepo from "../Services/UsersRepo.js";
import User from "../Models/User.js";

router.get("/", async (req, res) => {
  const user = {
    email: "",
    password: "",
  };

  await UsersRepo.createUser(user);

  const users = await UsersRepo.getUsers();

  res.send(users);
  //   res.send("admin.html");
});

export default router;
