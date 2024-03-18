import mongoose from "mongoose";
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  content: String,
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  postId: { type: Schema.Types.ObjectId, ref: "Post" },
  createdAt: Date,
  updatedAt: Date,
  rating: Number,
});

const Comment = model("Comment", commentSchema);

const comments = [
  {
    content: "Content 1",
    userId: "65f8a8688187038de876c46b",
    postId: "65f8a89e0eb2e504ad7235e3",
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4,
  },
  {
    content: "Content 2",
    userId: "65f8a8688187038de876c46c",
    postId: "65f8a89e0eb2e504ad7235e4",
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 5,
  },
  {
    content: "Content 3",
    userId: "65f8a8688187038de876c46d",
    postId: "65f8a89e0eb2e504ad7235e4",
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 3,
  },
];

// Comment.insertMany(comments);

export default Comment;
