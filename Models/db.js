import mongoose from "mongoose";
import User from "./User.js";
import Post from "./Post.js";
import Comment from "./Comment.js";
import Roles from "./Roles.js";

const dbConnection = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connection = await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log(`Connected to database on host ${connection.connection.host}`);
  } catch (e) {
    console.log(e);
  }
};

const users = [
  {
    username: "user1",
    email: "email",
    password: "password",
    role: Roles.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    username: "user2",
    email: "email",
    password: "password",
    role: Roles.User,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    username: "user3",
    email: "email",
    password: "password",
    role: Roles.Editor,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    username: "user4",
    email: "email",
    password: "password",
    role: Roles.Guest,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
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

export const seedData = async () => {
  Comment.insertMany(comments);

  Post.insertMany(posts);

  User.insertMany(users);
};

export default dbConnection;
