import Post from "../Models/Post.js";

export default class PostsRepo {
  static async getPosts() {
    return await Post.find();
  }

  static async getPostsDto() {
    return await Post.find().select("_id title content published userId category tags createdAt updatedAt rating");
  }

  static async getPostById(id) {
    return await Post.findById(id);
  }
  static async getPostDtoById(id) {
    return await Post.findById(id).select(
      "_id title content published userId category tags createdAt updatedAt rating"
    );
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

  static async getTopPostsThisWeek() {
    const today = new Date();
    const startOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
    const endOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 6);

    return await Post.find({
      createdAt: { $gte: startOfWeek, $lte: endOfWeek },
    })
      .sort({ rating: -1 })
      .limit(4); // Example: Sort by likes and limit to top 10 posts
  }

  static async searchPosts(search) {
    return await Post.find({
      $or: [
        { title: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
        { tags: { $regex: search, $options: "i" } },
      ],
    });
  }
}
