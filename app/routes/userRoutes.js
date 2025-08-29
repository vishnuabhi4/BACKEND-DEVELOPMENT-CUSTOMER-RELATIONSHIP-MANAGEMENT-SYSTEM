import express from "express";
import {registerUser,loginUser,getAllUsers,updateUser} from "../controllers/userController.js";
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

router.get('/userlist',verifyToken,getAllUsers);
router.post("/registerUser",registerUser);
router.post("/loginUser",loginUser);
router.patch('/updateUser/:id',verifyToken, updateUser);

export default router;