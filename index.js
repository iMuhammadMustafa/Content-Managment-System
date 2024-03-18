import express from "express";
import cookieParser from "cookie-parser";
import ejs from "ejs";
import "dotenv/config";

import dbConnection from "./Models/db.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/public", express.static("Public"));
app.use("/styles", express.static("Styles"));

app.listen(3000, () => {
  console.log("Your Server is running on 3000");
});
dbConnection();

//EJS Engine
app.set("view engine", "html");
app.engine("html", ejs.renderFile);

import homepageRouter from "./Routes/HomepageRoutes.js";
import authRouter from "./Routes/AuthRoutes.js";
import postsRouter from "./Routes/PostsRoutes.js";
import adminRouter from "./Routes/AdminRoutes.js";

app.use(homepageRouter);
app.use(authRouter);
app.use(postsRouter);
app.use(adminRouter);
