// controllers/userController.js
import { createUser, authenticateUser, getUsers, updateUserData } from "../services/userServices.js";

// REGISTER USER
export const registerUser = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const { user, token } = await createUser({ username, password, role });

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: { id: user._id, username: user.username, role: user.role },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// LOGIN USER
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const { user, token } = await authenticateUser({ username, password });

    res.json({
      message: "Login successful",
      token,
      user: { id: user._id, username: user.username, role: user.role },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET ALL USERS
export const getAllUsers = async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE USER
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, role, oldPassword, newPassword } = req.body;

    const user = await updateUserData({ id, username, role, oldPassword, newPassword });

    res.json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
