import mongoose from "mongoose";
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  id: String,
  content: String,
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  postId: { type: Schema.Types.ObjectId, ref: "Post" },
  createdAt: Date,
  updatedAt: Date,
  rating: Number,
});

const Comment = model("Comment", commentSchema);
export default Comment;
