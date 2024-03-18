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
});

const posts = [
  {
    title: "Post 1",
    content: "Content 1",
    published: true,
    userId: "65f8a8688187038de876c46b",
    category: "Category 1",
    tags: ["tag1", "tag2"],
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4,
  },
  {
    title: "Post 2",
    content: "Content 2",
    published: true,
    userId: "65f8a8688187038de876c46c",
    category: "Category 2",
    tags: ["tag1", "tag2"],
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 5,
  },
  {
    title: "Post 3",
    content: "Content 3",
    published: true,
    userId: "65f8a8688187038de876c46d",
    category: "Category 3",
    tags: ["tag1", "tag2"],
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 3,
  },
];

const Post = model("Post", postSchema);

// Post.insertMany(posts);
export default Post;
