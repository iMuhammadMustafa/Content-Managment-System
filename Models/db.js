import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connection = await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log(`Connected to database on host ${connection.connection.host}`);
  } catch (e) {
    console.log(e);
  }
};

export default dbConnection;
