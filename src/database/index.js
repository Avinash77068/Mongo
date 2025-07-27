import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config(); // 👈 load .env values

const dbConnection = async () => {
  try {
    const uri = process.env.MONGO_DB_URI;
    if (!uri) {
      throw new Error("MONGO_DB_URI is not defined in .env");
    }
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("db error", err);
  }
};

export default dbConnection;
