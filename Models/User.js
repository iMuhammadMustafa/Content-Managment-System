import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  role: String,
  createdAt: Date,
  updatedAt: Date,
});

const User = model("User", userSchema);

const users = [
  {
    username: "user1",
    email: "email",
    password: "password",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    username: "user2",
    email: "email",
    password: "password",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    username: "user3",
    email: "email",
    password: "password",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// User.insertMany(users);

export default User;
