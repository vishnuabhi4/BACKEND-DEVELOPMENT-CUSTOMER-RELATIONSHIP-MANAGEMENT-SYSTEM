import express from "express";
import {registerUser,loginUser,getAllUsers,updateUser} from "../controllers/userController.js";
import { customerList,addCustomer,updateCustomer,deleteCustomer } from "../controllers/customerController.js";
import { allCases,createCase, caseUpdate, caseDelete } from "../controllers/caseController.js";

const router = express.Router();

//user controller
router.get('/userlist',getAllUsers);
router.post("/registerUser",registerUser);
router.post("/loginUser",loginUser);
router.patch('/updateUser/:id',updateUser);

//customer controller
router.get('/customerList',customerList);
router.post("/addCustomer",addCustomer);
router.patch("/customer/:id",updateCustomer);
router.delete("/customer/:id",deleteCustomer);

//case controller
router.get("/caseList",allCases);
router.post("/createCase",createCase);
router.patch("/caseUpdate/:id",caseUpdate);
router.delete("/caseDelete/:id",caseDelete)

export default router;