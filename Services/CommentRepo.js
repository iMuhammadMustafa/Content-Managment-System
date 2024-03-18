import Comment from "../Models/Comment.js";

export default class CommentRepo {
  static async getComments() {
    return await Comment.find();
  }

  static async getCommentById(id) {
    return await Comment.findById(id).populate("userId").populate("postId");
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
