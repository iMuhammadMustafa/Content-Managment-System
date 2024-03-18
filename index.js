const express = require("express");
const cookieParser = require("cookie-parser");
const ejs = require("ejs");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/public", express.static("Public"));
app.use("/styles", express.static("Styles"));

app.listen(3000, () => {
  console.log("Your Server is running on 3000");
});

//EJS Engine
app.set("view engine", "html");
app.engine("html", ejs.renderFile);

const homepageRouter = require("./Routes/HomepageRoutes");
const authRouter = require("./Routes/AuthRoutes");
const postsRouter = require("./Routes/PostsRoutes");
const adminRouter = require("./Routes/AdminRoutes");

app.use(homepageRouter);
app.use(authRouter);
app.use(postsRouter);
app.use(adminRouter);
