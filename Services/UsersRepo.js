import User from "../Models/User.js";

export default class UsersRepo {
  static async getUsers() {
    return await User.find();
  }

  static async getUsersDto() {
    return await User.find().select("_id username email role createdAt updatedAt");
  }

  static async getUserById(id) {
    return await User.findById(id);
  }
  static async getUserDtoById(id) {
    return await User.findById(id).select("_id username email role createdAt updatedAt");
  }

  static async getUserByEmail(email) {
    return await User.findOne({ email: email });
  }

  static async getUserByUsername(username) {
    return await User.findOne({ username: username });
  }

  static async createUser(user) {
    return await User.create(user);
  }

  static async updateUser(id, user) {
    return await User.findByIdAndUpdate(id, user, { new: true });
  }

  static async deleteUser(id) {
    await User.findByIdAndDelete(id);
  }
}
