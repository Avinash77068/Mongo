<<<<<<< HEAD
import User from "../models/User.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

export const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res
      .status(403)
      .send({ message: "email is required", status: false });
  }

  if (!password) {
    return res
      .status(403)
      .send({ message: "password is required", status: false });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).send({ message: "user not found", status: false });
  }

  if (user.password !== password) {
    return res.status(404).send({ message: "invalid password", status: false });
  }

  const payload = {
    id: user._id,
    name: user.username,
  };

  const token = jwt.sign(payload, process.env.SECRET_KEY);
  user.token = token;

  user.save();

  const auth = user.toObject();
  delete auth.password;

  return res
    .status(200)
    .send({ message: "Login Successfull", status: true, auth });
});
=======
import User from "../models/User.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

export const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res
      .status(403)
      .send({ message: "email is required", status: false });
  }

  if (!password) {
    return res
      .status(403)
      .send({ message: "password is required", status: false });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).send({ message: "user not found", status: false });
  }

  if (user.password !== password) {
    return res.status(404).send({ message: "invalid password", status: false });
  }

  const payload = {
    id: user._id,
    name: user.username,
  };

  const token = jwt.sign(payload, process.env.SECRET_KEY);
  user.token = token;

  user.save();

  const auth = user.toObject();
  delete auth.password;

  return res
    .status(200)
    .send({ message: "Login Successfull", status: true, auth });
});
>>>>>>> 9aa4fe9af5039d6bc34d7790545c9f20d25d8d94
