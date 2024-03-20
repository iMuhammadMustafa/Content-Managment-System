import express from "express";
import cookieParser from "cookie-parser";
import ejs from "ejs";
import "dotenv/config";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import { fileURLToPath } from "url";
import dbConnection, { seedData } from "./Models/db.js";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/public", express.static(path.join(__dirname, "Public")));
app.use("/styles", express.static(path.join(__dirname, "Styles")));

app.listen(3000, () => {
  console.log("Your Server is running on 3000");
});
dbConnection();

//EJS Engine
app.use(expressEjsLayouts);
app.set("views", path.join(__dirname, "Views"));
app.set("layout", path.join(__dirname, "Views/Layouts/main.ejs"));
app.engine("html", ejs.renderFile);
app.set("view engine", "html");

import homepageRouter from "./Routes/HomepageRoutes.js";
import authRouter from "./Routes/AuthRoutes.js";
import postsRouter from "./Routes/PostsRoutes.js";
import adminRouter from "./Routes/AdminRoutes.js";
import userRouter from "./Routes/UserRoutes.js";
import { addUserFromCookie } from "./Middlewares/authMiddleware.js";

app.use(addUserFromCookie);
app.use(homepageRouter);
app.use("/auth", authRouter);
app.use(postsRouter);
app.use(userRouter);
app.use("/profile", adminRouter);
