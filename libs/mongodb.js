import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to mongo");
  } catch (err) {
    console.log("MongoDB connection error:", err);
  }
};

export default connectMongoDB;