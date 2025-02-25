import mongoose from "mongoose";

const user = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,

    },
    category: {
      type: String,
      required: true,
    },
    bioMessage: {
      type: String,
      default: "",
    },
    token: {
      type: String,
      trim: true,
      default: null,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", user);

export default User;
