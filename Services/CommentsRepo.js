import Comment from "../Models/Comment.js";

export default class CommentsRepo {
  static async getComments() {
    return await Comment.find();
  }
  static async getCommentsDto() {
    return await Comment.find().select("_id content userId postId createdAt updatedAt rating");
  }

  static async getCommentsByPostId(postId) {
    return await Comment.find({ postId: postId }).populate("userId");
  }

  static async getCommentById(id) {
    return await Comment.findById(id).populate("userId").populate("postId");
  }
  static async getCommentDtoById(id) {
    return await Comment.findById(id).select("_id content userId postId createdAt updatedAt rating");
  }

  static async createComment(comment) {
    return await Comment.create(comment);
  }

  static async updateComment(id, comment) {
    return await Comment.findByIdAndUpdate(id, comment, { new: true });
  }

  static async deleteComment(id) {
    return await Comment.findByIdAndDelete(id);
  }
}
