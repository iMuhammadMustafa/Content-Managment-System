import Post from "../Models/Post.js";

export default class PostsRepo {
  static async getPosts() {
    return await Post.find();
  }

  static async getPostsDto() {
    return await Post.find().select("title content published userId category tags createdAt updatedAt rating");
  }

  static async getPostById(id) {
    return await Post.findById(id);
  }

  static async createPost(post) {
    return await Post.create(post);
  }

  static async updatePost(id, post) {
    return await Post.findByIdAndUpdate(id, post, { new: true });
  }

  static async deletePost(id) {
    return await Post.findByIdAndDelete(id);
  }
}
