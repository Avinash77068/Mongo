<<<<<<< HEAD
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
=======
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
>>>>>>> 9aa4fe9af5039d6bc34d7790545c9f20d25d8d94
