import express from "express";
const router = express.Router();
import { seedData } from "../Models/db.js";

router.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

router.get("/seed", (req, res) => {
  res.send("Seeding the database");
  seedData();
});

export default router;
