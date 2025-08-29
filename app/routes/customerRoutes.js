import express from "express";
import { customerList,addCustomer,updateCustomer,deleteCustomer } from "../controllers/customerController.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get('/customerList',verifyToken, customerList);
router.post("/addCustomer",verifyToken, addCustomer);
router.patch("/customer/:id",verifyToken, updateCustomer);
router.delete("/customer/:id",verifyToken, deleteCustomer);

export default router;