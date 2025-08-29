// services/userService.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

// Create a new user
export const createUser = async ({ username, password, role }) => {
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    throw new Error("User already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  const user = new User({ username, passwordHash, role });
  await user.save();

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );

  return { user, token };
};

// Authenticate login
export const authenticateUser = async ({ username, password }) => {
  const user = await User.findOne({ username });
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) throw new Error("Invalid password");

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );

  return { user, token };
};

// Get all users (excluding passwords)
export const getUsers = async () => {
  return await User.find().select("-passwordHash");
};

// Update a user
export const updateUserData = async ({ id, username, role, oldPassword, newPassword }) => {
  const user = await User.findById(id);
  if (!user) throw new Error("User not found");

  if (username) user.username = username;
  if (role) user.role = role;

  if (newPassword) {
    if (!oldPassword) throw new Error("Old password is required");

    const isMatch = await bcrypt.compare(oldPassword, user.passwordHash);
    if (!isMatch) throw new Error("Old password is incorrect");

    const salt = await bcrypt.genSalt(10);
    user.passwordHash = await bcrypt.hash(newPassword, salt);
  }

  await user.save();

  const { passwordHash, ...userData } = user.toObject();
  return userData;
};
