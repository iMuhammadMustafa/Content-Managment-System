const express = require("express");
const cookieParser = require("cookie-parser");
const ejs = require("ejs");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/public", express.static("public"));

app.listen(3000, () => {
  console.log("Your Server is running on 3000");
});

//EJS Engine
app.set("view engine", "html");
app.engine("html", ejs.renderFile);

app.use(router);
