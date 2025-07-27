
import User from "../models/User.js";
import asyncHandler from "../utils/asyncHandler.js";

// Fetch All Users
export const fetchAllUsers = asyncHandler(async (req, res) => {
  const data = await User.find();
  return res.send({ data, status: true });
});

// Fetch User by ID
export const fetchUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) {
    return res.status(404).send({ message: "User not found", status: false });
  }

  return res.send({ data: user, status: true });
});


export const addUser = asyncHandler(async (req, res) => {
  const { username, email, password, category, bioMessage } = req.body;

  console.log(username, 'username', email, 'email', password, 'password', category, 'category', bioMessage, 'bioMessage');

  // 🔒 Input validation
  if (!username || !email || !password || !category) {
    return res.status(400).json({ message: "All required fields must be provided!" });
  }

  // 🔍 Check for existing email
  const emailExists = await User.findOne({ email });
  if (emailExists) {
    return res.status(409).json({ message: "Email is already registered. Please use another email." });
  }

  // 🔍 Check for existing username
  const usernameExists = await User.findOne({ username });
  if (usernameExists) {
    return res.status(409).json({ message: "Username is already taken. Please choose another one." });
  }

  // ✅ Create new user
  const user = await User.create({
    username,
    email,
    password,
    category,
    bioMessage,
  });

  return res.status(201).json({
    message: `User ${username} created successfully!`,
    user,
    status: true,
  });
});


// Update User
export const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send({ message: "_id is required", status: false });
  }

  const updatedUser = await User.findByIdAndUpdate(id, req.body, {
    new: true, // Return updated user
    runValidators: true, // Validate fields before updating
  });

  if (!updatedUser) {
    return res.status(404).send({ message: "User not found", status: false });
  }

  return res.status(200).send({
    message: "User updated successfully!",
    updatedUser,
    status: true,
  });
});

// Delete User
export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send({ message: "_id is required", status: false });
  }

  const user = await User.findByIdAndDelete(id);

  if (!user) {
    return res.status(404).send({ message: "User not found", status: false });
  }

  return res.status(200).send({
    message: `User with ID ${id} deleted successfully!`,
    status: true,
  });
});