import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

const connectionString = process.env.MONGODB_URL;

export const connectDB = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("db connected");
  } catch (error) {
    console.error("error", error);
  }
};
