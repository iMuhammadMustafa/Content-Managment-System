import mongoose from "mongoose";
const { Schema, model } = mongoose;

const postSchema = new Schema({
  title: String,
  content: String,
  published: Boolean,
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  category: String,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  rating: Number,
  savedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Post = model("Post", postSchema);

export default Post;
