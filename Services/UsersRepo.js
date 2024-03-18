import User from "../Models/User.js";

export default class UsersRepo {
  static async getUsers() {
    return await User.find();
  }

  static async getUserById(id) {
    return await User.findById(id);
  }

  static async getUserByEmail(email) {
    return await User.findOne({ email: email });
  }

  static async createUser(user) {
    return await User.create(user);
  }

  static async updateUser(id, user) {
    return await User.findByIdAndUpdate(id, user, { new: true });
  }

  static async deleteUser(id) {
    return;
    await User.findByIdAndDelete(id);
  }
}
