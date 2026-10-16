import mongoose from 'mongoose';
import dotenv from "dotenv";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const envPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../.env");
dotenv.config({ path: envPath });

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(`MONGODB_URI is not set. Add it to ${envPath}`);
  }

  const conn = await mongoose.connect(uri);

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

export default connectDB;