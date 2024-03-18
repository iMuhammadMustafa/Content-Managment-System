import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  id: String,
  username: String,
  email: String,
  password: String,
  role: String,
  createdAt: Date,
  updatedAt: Date,
});

const User = model("User", userSchema);

export default User;
