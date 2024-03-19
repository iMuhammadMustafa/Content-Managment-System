import express from "express";
const router = express.Router();

import UsersRepo from "../Services/UsersRepo.js";

router.get("/",(req, res) =>{
    res.render("authentification.html", {title: "Authentication"});
})

router.get("/login", async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let user = username ? await UsersRepo.getUserByUsername(username) : null;
    if(!user || user.password !== password) {
        res.status(404).send("Username or password is incorrect");
    }
    res.render("home.html",{user : user});
})

router.post("/register", async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    const currentDate = new Date();

    let user ={username, email, password, role : null , createdAt : currentDate, updatedAt : null};
    let userCreated =  await UsersRepo.createUser(user);
    res.render("home.html",{user : userCreated});
});

export default router;
